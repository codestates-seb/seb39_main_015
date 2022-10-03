package seb15.roobits.room.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import seb15.roobits.globaldto.SingleResponseDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.roobit.dto.RoobitsListResponseDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.entity.RoomStatus;
import seb15.roobits.room.mapper.RoomMapper;
import seb15.roobits.room.service.RoomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/rooms")
@Validated
@RequiredArgsConstructor

@Slf4j
public class RoomController {
    private final RoomService roomService;
    private final RoomMapper roomMapper;
    private final MemberService memberService;



    @PostMapping
    public ResponseEntity postRoom(@AuthenticationPrincipal Member auth,
                                   @Valid @RequestBody RoomPostDto roomPostDto) {
        if(auth == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        Member member = memberService.findMember(auth.getUsername());
        Room room = roomMapper.roomPostDtoToRoom(roomPostDto);
        room.setMember(member);
        Room postRoom = roomService.createRoom(room);
        return new ResponseEntity<>(roomMapper.roomToRoomResponseDto(room),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{room-id}")
    public ResponseEntity patchRoom(@PathVariable("room-id") @Positive long roomId,
                                  @Valid @RequestBody RoomPatchDto roomPatchDto) {
        roomPatchDto.setRoomId(roomId);
        Room room = roomService.updateRoom(roomMapper.roomPatchDtoToRoom(roomPatchDto));

        return new ResponseEntity<>(roomMapper.roomToRoomResponseDto(room),
                HttpStatus.OK);
    }

    @GetMapping("/{room-id}")
    public ResponseEntity getRoom(@PathVariable("room-id") @Positive long roomId) {
        Room room = roomService.findRoom(roomId);

        if (room.getRoomStatus() == RoomStatus.ROOM_CLOSED) {
            return new ResponseEntity<>(roomMapper.roomToResponseRoomStatus(room),
                    HttpStatus.OK);
        } else {
            return new ResponseEntity<>(
                    new SingleResponseDto<>(roomMapper.roomToRoomResponseDto(room)),
                    HttpStatus.OK);
        }
    }

    @DeleteMapping("/{room-id}")
    public ResponseEntity deleteRoom(@PathVariable("room-id") long roomId) {
        roomService.deleteRoom(roomId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
