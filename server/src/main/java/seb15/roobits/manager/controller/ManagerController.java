package seb15.roobits.manager.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.security.auth.PrincipalDetails;


@RestController
@RequiredArgsConstructor

public class ManagerController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    private final PrincipalDetails principalDetails;

    @GetMapping("/search") //관리자 권한  특정 멤버 조회
    public ResponseEntity searchMember(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return null;
    }

    @GetMapping("/allsearch") //관리자 권한 모든 멤버 조회
    public ResponseEntity searchMembers(@AuthenticationPrincipal PrincipalDetails principalDetails){
        return null;
    }
}
