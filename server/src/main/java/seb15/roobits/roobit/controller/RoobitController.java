package seb15.roobits.roobit.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.roobit.dto.MultiResponseDto;
import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.dto.SingleResponseDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.mapper.RoobitMapper;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.service.RoomService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
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

        return new ResponseEntity<>(
                new SingleResponseDto<>(roobitMapper.roobitToRoobitResponseDto(createdRoobit)), HttpStatus.CREATED);
    }

    @GetMapping("/get/{roobit-id}")   // 작성된 루빗 조회 (필요없을 듯)
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>((roobitMapper.roobitToRoobitIdResponseDto(roobit)), HttpStatus.OK);
    }

    @GetMapping("/rooms/{room-id}")   // 나중에 roomId에 붙일 부분
    public ResponseEntity getRoom(@PathVariable("room-id") @Positive long roomId) {
        int page = 1;
        int size = 300;
        Page<Roobit> pageRoobits = roobitService.findRoobitsByRoomId(page - 1, 300);
        List<Roobit> roobits = pageRoobits.getContent();
        List<Roobit> roobitsById = new ArrayList<>();

        for (int i = 0; i < roobits.size(); i++) {
            roobits.get(i);
            long roomNum;
            roomNum = roobits.get(i).getRoom().getRoomId();
            if (roomNum == roomId) {
                System.out.println(roobits.get(i));
                roobitsById.add(roobits.get(i));
            }
        }
//         return new ResponseEntity<>(
//               new MultiResponseDto<>(roobitMapper.roobitsToRoobitResponsesDtos(roobitsById)), HttpStatus.OK);

            if (roobitsById.get(0).getRoobitStatus()== Roobit.RoobitStatus.ROOBIT_OPEN) {
                return new ResponseEntity<>(
                        new MultiResponseDto<>(roobitMapper.roobitsToRoobitResponsesDtos(roobitsById)), HttpStatus.OK);   //디데이일 때는 body도 출력
            } else {
                return new ResponseEntity<>(
                        new MultiResponseDto<>(roobitMapper.roobitsToRoobitNullResponsesDtos(roobitsById)), HttpStatus.OK);  // 디데이아닐 땐 body Null
            }

    }

    @DeleteMapping("/delete/{roobit-id}")   // 특정 루빗 삭제
    public ResponseEntity deleteRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        roobitService.deleteRoobit(roobitId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
