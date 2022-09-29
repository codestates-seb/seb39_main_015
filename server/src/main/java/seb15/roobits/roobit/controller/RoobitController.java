package seb15.roobits.roobit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.roobit.dto.SingleResponseDto;
import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.mapper.RoobitMapper;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.service.RoomService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

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
        Roobit roobit = roobitService.createRoobit(roobitMapper.roobitPostDtoToRoobit(roobitPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(roobitMapper.roobitToRoobitResponseDto(roobit)),
                HttpStatus.CREATED);
    }

    @GetMapping("/get/{roobit-id}")   // 작성된 루빗 조회 (필요없을 듯)
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>((roobitMapper.roobitToRoobitIdResponseDto(roobit)), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchRoobit(@PathVariable("roobit-id") @Positive long roobitId) {

        return null;
    }

//    @GetMapping("/manager/get/{room-id}")
//    public ResponseEntity getRoobits(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Roobit> pageRoobits = roobitService.findRoobits(page - 1, size);
//        List<Roobit> roobits = pageRoobits.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.roobitsToRoobitResponsesDtos(roobits),pageRoobits),
//                        HttpStatus.OK);
//    }

//    @DeleteMapping("/manager/delete/{roobit-id}")
//    public ResponseEntity cancelQuestion(@PathVariable("roobit-id") @Positive long roobitId) {
//        roobitService.deleteRoobit(roobitId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

}
