package com.board.board.room.controller;

import com.board.board.dto.MultiResponseDto;
import com.board.board.dto.SingleResponseDto;
import com.board.board.room.dto.RoomPatchDto;
import com.board.board.room.dto.RoomPostDto;
import com.board.board.room.dto.RoomPutDto;
import com.board.board.room.entity.Room;
import com.board.board.room.mapper.RoomMapper;
import com.board.board.room.service.RoomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/rooms")
@Validated
@Slf4j
public class RoomController {
    private final RoomService roomService;
    private final RoomMapper roomMapper;

    public RoomController(RoomService roomService, RoomMapper roomMapper) {
        this.roomService = roomService;
        this.roomMapper = roomMapper;
    }

    @PostMapping
    public ResponseEntity postRoom(@Valid @RequestBody RoomPostDto roomPostDto) {
        Room room = roomService.createRoom(roomMapper.roomPostDtoToRoom(roomPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(roomMapper.roomToRoomResponseDto(room)),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{room-id}")
    public ResponseEntity patchRoom(@PathVariable("room-id") @Positive long roomId,
                                  @Valid @RequestBody RoomPatchDto roomPatchDto) {
        roomPatchDto.setRoomId(roomId);
        Room room = roomService.updateRoom(roomMapper.roomPatchDtoToRoom(roomPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(roomMapper.roomToRoomResponseDto(room)),
                HttpStatus.OK);
    }

    @GetMapping("/{room-id}")
    public ResponseEntity getRoom(@PathVariable("room-id") @Positive long roomId) {
        Room room = roomService.findRoom(roomId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(roomMapper.roomToRoomResponseDto(room)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getRooms(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Room> pageRooms = roomService.findRooms(page - 1, size);
        List<Room> rooms = pageRooms.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(roomMapper.roomsToRoomResponseDtos(rooms), pageRooms),
                HttpStatus.OK);
    }

    @DeleteMapping("/{room-id}")
    public ResponseEntity deleteRoom(@PathVariable("room-id") long roomId) {
        roomService.deleteRoom(roomId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
