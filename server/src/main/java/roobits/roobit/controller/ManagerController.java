package roobits.roobit.controller;

import org.springframework.data.domain.Page;
import roobits.dto.MultiResponseDto;
import roobits.dto.SingleResponseDto;
import roobits.roobit.service.RoobitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import roobits.roobit.entity.Roobit;
import roobits.roobit.mapper.RoobitMapper;
import roobits.room.service.RoomService;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/manager")
@Validated
public class ManagerController{
    private final RoobitService roobitService;
    private final RoobitMapper mapper;
    private  final RoomService roomService;

    public ManagerController(RoobitService roobitService, RoobitMapper mapper, RoomService roomService){
        this.roobitService = roobitService;
        this.mapper = mapper;
        this.roomService = roomService;
    }

    @GetMapping("/roobit/{roobit-id}")   // 특정 루빗 하나 열람
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.roobitToRoobitResponseDto(roobit)), HttpStatus.OK);
    }

    @GetMapping("/room/{room-id}")    // 룸 내부 모든 루빗 열람 manager/room/{room-id}?page=1&size=5
    public ResponseEntity getRoobits(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Roobit> pageRoobits = roobitService.findRoobits(page - 1, size);
        List<Roobit> roobits = pageRoobits.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.roobitsToRoobitResponsesDtos(roobits),pageRoobits),
                HttpStatus.OK);
    }

    @DeleteMapping("/delete/{roobit-id}")   // 특정 루빗 삭제
    public ResponseEntity deleteRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        roobitService.deleteRoobit(roobitId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
