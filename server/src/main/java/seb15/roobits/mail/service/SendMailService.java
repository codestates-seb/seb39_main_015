package seb15.roobits.mail.service;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import seb15.roobits.mail.dto.MailDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;

@Service
@RequiredArgsConstructor
public class SendMailService {

    @Autowired
    private final MemberRepository memberRepository;
    @Autowired
    private final JavaMailSender mailSender;
    @Autowired
    private final BCryptPasswordEncoder passwordEncoder;

    private static final String FROM_ADDRESS = "gusghk115@gmail.com";

    public MailDto createMailAndChangePassword(MailDto mailDto) {
        String str = getTempPassword();
        MailDto createMail = new MailDto();
        createMail.setAddress(mailDto.getAddress());
        createMail.setTitle("루빗츠 임시 비밀번호 안내 이메일 입니다.");
        createMail.setMessage("안녕하세요 루빗츠 입니다." + "회원님의 임시 비밀번호는" + str + " 입니다.");
        updatePassword(str, mailDto);
        return createMail;
    }


    public void updatePassword(String str, MailDto mailDto) {
        Member member = memberRepository.findByEmail(mailDto.getAddress());
        String rawPassword = str;
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
//
//        Optional.ofNullable(member.getPassword())
//                .ifPresent(password -> member.setPassword(encPassword));
        memberRepository.save(member);
    }

    public String getTempPassword() {
        char[] charSet = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

        String str = "";

        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
    }

    public void mailSend(MailDto mailDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getAddress());
        message.setFrom(SendMailService.FROM_ADDRESS);
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        mailSender.send(message);
    }
}
