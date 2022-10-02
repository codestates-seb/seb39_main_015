package seb15.roobits.mail.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.mail.dto.MailDto;
import seb15.roobits.mail.service.SendMailService;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.member.service.MemberService;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MailController {


    @Autowired
    private final SendMailService mailService;

    @PostMapping("/findpw/sendemail")
    public void findPassword(@RequestBody MailDto.SendPassword mailDto){
        MailDto.SendPassword sendMail = mailService.createMailAndChangePassword(mailDto);
        mailService.findPasswordMailSend(sendMail);
    }

    @PostMapping("/auth/sendemail")
    public ResponseEntity checkAuthEmail(@RequestBody MailDto.AuthEmail mailDto){
        MailDto.AuthEmail senMail = mailService.createMailAndAuthEmail(mailDto);
        mailService.authEmailMailSend(senMail);
        MailDto.Key response = new MailDto.Key();
        response.setCreateKey(senMail.getCreateKey());
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
