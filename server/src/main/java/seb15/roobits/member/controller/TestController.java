package seb15.roobits.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.service.MemberService;

@Controller
@RequiredArgsConstructor
@RequestMapping
public class TestController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @GetMapping("/login")
    public String login(){
        return "loginForm";
    }

    @GetMapping("/join")
    public String joinForm() {
        return "joinForm";
    }

//    @PostMapping("/join")
//    public String join(MemberDto.Join memberJoinDto) {
//        Member member = memberMapper.joinToMember(memberJoinDto);
//        Member createdMember = memberService.createMember(member);
//        MemberDto.Response response = memberMapper.memberToResponse(createdMember);
//        return "redirect:/home";
//    }
}
