package seb15.roobits.roobit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.roobit.dto.MultiResponseDto;
import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.mapper.RoobitMapper;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.service.RoomService;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/roobits")
@Validated
public class RoobitController{
    private final RoobitService roobitService;
    private final RoobitMapper roobitMapper;
    private final RoobitRepository roobitRepository;
    private  final RoomService roomService;

    public RoobitController(RoobitService roobitService, RoobitMapper roobitMapper, RoobitRepository roobitRepository,RoomService roomService){
        this.roobitService = roobitService;
        this.roobitMapper = roobitMapper;
        this.roobitRepository = roobitRepository;
        this.roomService = roomService;
    }

    @PostMapping("/post")  // 루빗 작성
    public ResponseEntity postRoobit(@Valid @RequestBody RoobitPostDto roobitPostDto) {

        Room room = roomService.findRoom(roobitPostDto.getRoomId());
        Roobit roobit = roobitService.createRoobit(roobitMapper.roobitPostDtoToRoobit(roobitPostDto));
        roobit.addRoom(room);
        Roobit createdRoobit = roobitService.createRoobit(roobit);

        return new ResponseEntity<>((roobitMapper.roobitToRoobitIdResponseDto(createdRoobit)), HttpStatus.CREATED);
    }

    @GetMapping("/get/{roobit-id}")   // 작성된 루빗 하나 조회
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        if (roobit.getRoobitStatus()== Roobit.RoobitStatus.ROOBIT_OPEN) {
            return new ResponseEntity<>((roobitMapper.roobitToRoobitResponseDto(roobit)), HttpStatus.OK);   //디데이일 때는 body도 출력
        } else {
            return new ResponseEntity<>((roobitMapper.roobitToRoobitNullResponseDto(roobit)), HttpStatus.OK);  // 디데이 아닐 땐 body Null
        }
    }

    @GetMapping("/rooms/all/{room-id}")   // roomId에 해당하는 루빗 전체 다
    public ResponseEntity getRoom(@PathVariable("room-id") @Positive long roomId) {
        List<Roobit> roobitsById = roobitService.findRoobitsByRoomId(roomId);
        if (roobitsById.get(0).getRoobitStatus()== Roobit.RoobitStatus.ROOBIT_OPEN) {
            return new ResponseEntity<>(
                    new MultiResponseDto<>(roobitMapper.roobitsToRoobitResponsesDtos(roobitsById)), HttpStatus.OK);   //디데이일 때는 body도 출력
        } else {
            return new ResponseEntity<>(
                    new MultiResponseDto<>(roobitMapper.roobitsToRoobitNullResponsesDtos(roobitsById)), HttpStatus.OK);  // 디데이아닐 땐 body Null
        }
    }

    @GetMapping("/rooms/floors/{room-id}")   // 나중에 roomId에 붙일 부분
    public ResponseEntity getFloorRoom(@PathVariable("room-id") @Positive long roomId) {
        List<Roobit> roobitsById = roobitService.findRoobitsByRoomId(roomId);
        List<List<Roobit>> roobitsFloor = roobitService.findRoobitsFloorByRoomId(roomId);
        if (roobitsById.get(0).getRoobitStatus()== Roobit.RoobitStatus.ROOBIT_OPEN) {
            return new ResponseEntity<>(
                    new MultiResponseDto<>(roobitMapper.floorDtos(roobitsFloor)), HttpStatus.OK);   //디데이일 때는 body도 출력
        } else {
            return new ResponseEntity<>(
                    new MultiResponseDto<>(roobitMapper.floorNullDtos(roobitsFloor)), HttpStatus.OK);  // 디데이 아닐 땐 body Null
        }
    }

    @DeleteMapping("/delete/{roobit-id}")   // 특정 루빗 삭제
    public ResponseEntity deleteRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        roobitService.deleteRoobit(roobitId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @GetMapping("/search")   // search?roomId=3&keyword=뭔가
//    public ResponseEntity getRoom(@PathVariable("room-id") @Positive long roomId, String keyword) {
//        Room room = roomService.findRoom(roomId);
//        List<Roobit> roobitsById = roobitService.findRoobitsByRoomId(roomId);
//        List<Roobit> searchRoobits = roobitService.searchRoobits(roomId, keyword);
//
//        return new ResponseEntity<>(new MultiResponseDto<>(roobitMapper.roobitsToRoobitResponsesDtos(searchRoobits)), HttpStatus.OK);
//    }



}