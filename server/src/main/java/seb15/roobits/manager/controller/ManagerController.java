package seb15.roobits.manager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import seb15.roobits.globaldto.MultiResponseDto;
import seb15.roobits.globaldto.SingleResponseDto;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.mapper.RoobitMapper;
import seb15.roobits.roobit.service.RoobitService;
import seb15.roobits.room.service.RoomService;
import seb15.roobits.security.auth.PrincipalDetails;

import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequiredArgsConstructor

public class ManagerController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    private final PrincipalDetails principalDetails;

    private final RoobitService roobitService;
    private final RoobitMapper mapper;

    private  final RoomService roomService;

    @GetMapping("/search") //관리자 권한  특정 멤버 조회
    public ResponseEntity searchMember(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return null;
    }

    @GetMapping("/allsearch") //관리자 권한 모든 멤버 조회
    public ResponseEntity searchMembers(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return null;
    }


    @GetMapping("/roobit/{roobit-id}")   // 특정 루빗 하나 열람
    public ResponseEntity getRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        Roobit roobit = roobitService.findRoobit(roobitId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.roobitToRoobitResponseDto(roobit)), HttpStatus.OK);
    }


//    @GetMapping("/room/{room-id}?page=1&size=10")    // 룸 내부 모든 루빗 페이지로 열람 manager/room/{room-id}?page=1&size=10
//    public ResponseEntity getRoobits(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Roobit> pageRoobits = roobitService.findRoobits(page - 1, 10);
//        List<Roobit> roobits = pageRoobits.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.roobitsToRoobitResponsesDtos(roobits),pageRoobits),
//                HttpStatus.OK);
//    }

    @GetMapping("/room/{room-id}")    // 룸 내부 모든 루빗을 한페이지에 모두 리스트로 가져옴 (0927YU)
    public ResponseEntity getRoobits(@PathVariable("room-id") @Positive long roomId) {
        int page = 1;
        int size = 300;
        Page<Roobit> pageRoobits = roobitService.findRoobits(page-1, 300);
        List<Roobit> roobits = pageRoobits.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.roobitsToRoobitResponsesDtos(roobits),pageRoobits),
                HttpStatus.OK);
    }

    @DeleteMapping("/delete/{roobit-id}")   // 특정 루빗 삭제 (soft로 바꿈)
    public ResponseEntity deleteRoobit(@PathVariable("roobit-id") @Positive long roobitId) {
        roobitService.deleteRoobit(roobitId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}