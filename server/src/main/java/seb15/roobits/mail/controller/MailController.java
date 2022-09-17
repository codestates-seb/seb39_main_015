package seb15.roobits.mail.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.mail.dto.MailDto;
import seb15.roobits.mail.service.SendMailService;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.member.service.MemberService;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping
@RequiredArgsConstructor
public class MailController {

    @Autowired
    private final MemberService memberService;
    @Autowired
    private final SendMailService mailService;
    @Autowired
    private final MemberRepository memberRepository;

    @GetMapping("/user/findpw")
    public @ResponseBody Map<String,Boolean> pwFind(String email, String username){
        Map<String,Boolean> userCheck = new HashMap<>();
        boolean pwFindCheck = memberService.memberEmailCheck(email,username);
        userCheck.put("check",pwFindCheck);
        return userCheck;
    }

    @PostMapping("/sendEmail")
    public void sendEmail(String email){
        MailDto dto = mailService.createMailAndChangePassword(email);
        mailService.mailSend(dto);
    }
}
