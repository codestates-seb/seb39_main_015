package roobits.roobit.controller;

import roobits.dto.SingleResponseDto;
import roobits.roobit.dto.RoobitPostDto;
import roobits.roobit.service.RoobitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import roobits.roobit.entity.Roobit;
import roobits.roobit.mapper.RoobitMapper;
import roobits.room.service.RoomService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/roobits")
@Validated
public class RoobitController{
    private final RoobitService roobitService;
    private final RoobitMapper mapper;
    private  final RoomService roomService;

    public RoobitController(RoobitService roobitService, RoobitMapper mapper, RoomService roomService){
        this.roobitService = roobitService;
        this.mapper = mapper;
        this.roomService = roomService;
    }

    @PostMapping("/post")  // 루빗 작성
    public ResponseEntity postRoobit(@Valid @RequestBody RoobitPostDto roobitPostDto) {
        Roobit roobit = roobitService.createRoobit(mapper.roobitPostDtoToRoobit(roobitPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.roobitToRoobitResponseDto(roobit)),
                HttpStatus.CREATED);
    }

    @GetMapping("/get/{roobit-id}")   // 작성된 루빗 조회 (필요없을 듯)
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.roobitToRoobitResponseDto(roobit)), HttpStatus.OK);
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
