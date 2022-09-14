package seb15.roobits.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.member.dto.MemberDto;

import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping // api 미정으로 임의로 지정
public class MemberController {

    @PostMapping("/join")  //회원가입
    public ResponseEntity joinMember(@RequestBody MemberDto.Join memberJoinDto){
        return null;
    }

    @PatchMapping("/{member-id}") //회원정보 수정
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @RequestBody MemberDto.Patch memberPatchDto){
        return null;
    }

    @DeleteMapping("/{member-id") //회원탈퇴
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        return null;
    }

    @GetMapping("/search") //관리자 권한  특정 멤버 조회
    public ResponseEntity searchMember(){
        return null;
    }

    @GetMapping("/allsearch") //관리자 권한 모든 멤버 조회
    public ResponseEntity searchMembers(){
        return null;
    }



//    api 통신테스트를 위한 컨트롤러 메서드 생성
//    @GetMapping("/home")
//    public String home() {
//        return "<h1>home</h1>";
//    }
}
