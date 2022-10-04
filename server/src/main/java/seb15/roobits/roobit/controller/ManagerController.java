package seb15.roobits.roobit.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.roobit.dto.MultiResponseDto;
import seb15.roobits.roobit.dto.SingleResponseDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.mapper.RoobitMapper;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.service.RoomService;


import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/manager")
@Validated
public class ManagerController{
    private final RoobitService roobitService;
    private final RoobitMapper roobitMapper;
    private final RoobitRepository roobitRepository;
    private  final RoomService roomService;

    public ManagerController(RoobitService roobitService, RoobitMapper roobitMapper, RoobitRepository roobitRepository, RoomService roomService){
        this.roobitService = roobitService;
        this.roobitMapper = roobitMapper;
        this.roobitRepository = roobitRepository;
        this.roomService = roomService;
    }

    @GetMapping("/roobit/{roobit-id}")   // 특정 루빗 하나 열람
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(roobitMapper.roobitToRoobitResponseDto(roobit)), HttpStatus.OK);
    }

//    @GetMapping("/room/{room-id}")    // 룸 내부 모든 루빗 열람 manager/room/{room-id}?page=1&size=5
//    public ResponseEntity getRoobits(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Roobit> pageRoobits = roobitService.findRoobits(page - 1, size);
//        List<Roobit> roobits = pageRoobits.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.roobitsToRoobitResponsesDtos(roobits),pageRoobits),
//                HttpStatus.OK);
//    }

    @GetMapping("/room/{room-id}")
    public ResponseEntity getRoobits(@PathVariable("room-id") @Positive long roomId) {
        int page = 1;
        int size = 300;
        Page<Roobit> pageRoobits = roobitService.findRoobits(page-1, 300);
        List<Roobit> roobits = pageRoobits.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(roobitMapper.roobitsToRoobitResponsesDtos(roobits), pageRoobits), HttpStatus.OK);     //0929 FloorDto 형식 수정하고, 여기도 고칠 것
    }


    @DeleteMapping("/delete/{roobit-id}")   // 특정 루빗 삭제
    public ResponseEntity deleteRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        roobitService.deleteRoobit(roobitId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
