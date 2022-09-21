package seb15.roobits.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.security.auth.PrincipalDetails;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;


    @PostMapping("/join")  //회원가입
    public ResponseEntity joinMember(@RequestBody @Valid MemberDto.Join memberJoinDto){
        Member member = memberMapper.joinToMember(memberJoinDto);
//        Member createdMember =
        memberService.createMember(member);
//        MemberDto.Response response = memberMapper.memberToResponse(createdMember);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/patch") //회원정보 수정
    public ResponseEntity patchMember(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                      @RequestBody @Valid MemberDto.Patch memberPatchDto){
        long principalDetailsId;    //테스트 로직 코드
        if(principalDetails == null) {principalDetailsId =1L;}
        else {principalDetailsId = principalDetails.getId();}
        memberPatchDto.setMemberId(principalDetailsId);
        /////////////////////////////////////////////////////
//        if(principalDetails == null){
//            return new ResponseEntity(HttpStatus.NOT_FOUND);// exception으로 날려줘야함.
//        }
//        memberPatchDto.setMemberId(principalDetails.getId());
        ///////////////////////////////////////////////
        Member member = memberMapper.patchToMember(memberPatchDto);
//        Member editMember =
        memberService.updateMember(member);
//        MemberDto.Response response = memberMapper.memberToResponse(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete") //회원탈퇴
    public ResponseEntity deleteMember(@AuthenticationPrincipal PrincipalDetails principalDetails){
        long principalDetailsId;    //테스트 로직 코드
        if(principalDetails == null) {principalDetailsId =1L;}
        else {principalDetailsId = principalDetails.getId();}
        Member member = memberService.findMember(principalDetailsId);
///////////////////////////////////////////////////////////
//        if(principalDetails == null){
//            return new ResponseEntity(HttpStatus.NOT_FOUND); // exception으로 날려줘야함.
//        }
//        Member member = memberService.findMember(principalDetails.getId());
///////////////////////////////////////////////////////////////
        memberService.deleteMember(member.getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/myroom")
    public ResponseEntity getMyRoom(@AuthenticationPrincipal PrincipalDetails principalDetails){
        long principalDetailsId;    //테스트 로직 코드
        if(principalDetails == null) {principalDetailsId =1L;}
        else {principalDetailsId = principalDetails.getId();}
        Member getMemberRoom = memberService.findMember(principalDetailsId);
//////////////////////////////////////////////////////////////
//        if(principalDetails.getId() == 0){
//            return new ResponseEntity(HttpStatus.NOT_FOUND); // exception으로 날려줘야함.
//        }
//        Member getMemberRoom =
//                memberService.findMember(principalDetails.getId());
////////////////////////////////////////////////////////////
        MemberDto.GetMyRoomResponse response = memberMapper.memberTogetMyRoomResponse(getMemberRoom);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping("/finduser")
    public ResponseEntity findUsername(@RequestBody MemberDto.Find memberFindDto){
        Member member = memberMapper.findToMember(memberFindDto);
        Member findUsername = memberService.findUserId(member);
        MemberDto.FindUsernameResponse response = memberMapper.memberToFindUsernameResponse(findUsername);
        return new ResponseEntity(response,HttpStatus.OK);
    }

    //유저네임 중복체크
    @PostMapping("/usernamecheck")
    public ResponseEntity checkUsername(@RequestBody MemberDto.CheckUsername checkUsernameDto){
        Member username = memberMapper.checkUsernameToMember(checkUsernameDto);
        Boolean checkedUsername = memberService.checkUsername(username.getUsername());
        MemberDto.CheckUsernameResponse response = memberMapper.memberToCheckUsernameResponse(username);
        if(checkedUsername == true){response.setCheck("true");
        } else {response.setCheck("false");}
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    //프론트쪽 Auth확인
    @GetMapping("/auth")
    public ResponseEntity checkAuth(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        long principalDetailsId;    //테스트 로직 코드
        if (principalDetails == null) {
            principalDetailsId = 1L;
        } else {
            principalDetailsId = principalDetails.getId();
        }
        Member checkAuth = memberService.findMember(principalDetailsId);
///////////////////////////////////////////////////////////////
//        if(principalDetails.getId() == 0){
//            return new ResponseEntity(HttpStatus.NOT_FOUND); // exception으로 날려줘야함.
//        }
//        Member checkAuth =
//                memberService.findMember(principalDetails.getId());
///////////////////////////////////////////////////////////////////
        if (checkAuth == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);}
            MemberDto.CheckAuthResponse response = memberMapper.memberToCheckAuthResponse(checkAuth);

            return new ResponseEntity<>(response, HttpStatus.OK);
        }


    @GetMapping("/rooms")
    public String host() {
        return "room";
    }


    //    api 통신테스트를 위한 컨트롤러 메서드 생성
    @GetMapping("/home")
    public String home() {
        return "<h1>home</h1>";
    }
}
