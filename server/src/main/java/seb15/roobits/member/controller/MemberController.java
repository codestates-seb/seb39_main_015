package seb15.roobits.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping // api 미정으로 임의로 지정
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @PostMapping("/join")  //회원가입
    public ResponseEntity joinMember(@RequestBody @Valid MemberDto.Join memberJoinDto){
        Member member = memberMapper.joinToMember(memberJoinDto);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = memberMapper.memberToResponse(createdMember);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}") //회원정보 수정
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @RequestBody @Valid MemberDto.Patch memberPatchDto){
        memberPatchDto.setMemberId(memberId);
        Member member = memberMapper.patchToMember(memberPatchDto);
        Member editMember = memberService.updateMember(member);
        MemberDto.Response response = memberMapper.memberToResponse(member);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}") //회원탈퇴
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search") //관리자 권한  특정 멤버 조회
    public ResponseEntity searchMember(){
        return null;
    }

    @GetMapping("/allsearch") //관리자 권한 모든 멤버 조회
    public ResponseEntity searchMembers(){
        return null;
    }

    @GetMapping("/host")
    public String host() {
        return "host";
    }


//    api 통신테스트를 위한 컨트롤러 메서드 생성
    @GetMapping("/home")
    public String home() {
        return "<h1>home</h1>";
    }
}
