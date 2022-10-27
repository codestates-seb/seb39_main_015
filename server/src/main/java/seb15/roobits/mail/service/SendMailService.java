package seb15.roobits.mail.service;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.mail.dto.MailDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.redis.RedisService;

@Service
@RequiredArgsConstructor
public class SendMailService {

    @Autowired
    private final MemberRepository memberRepository;
    @Autowired
    private final JavaMailSender mailSender;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private final RedisService redisService;
    private static final String FROM_ADDRESS = "gusghk115@gmail.com";


    public MailDto.SendPassword createMailAndChangePassword(MailDto.SendPassword mailDto) {
        if(!mailDto.getEmail().equals(memberRepository.findByUsername(mailDto.getUsername()).getEmail()))
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        String str = getTempPassword();
        MailDto.SendPassword createMail = new MailDto.SendPassword();
        createMail.setUsername(mailDto.getUsername());
        createMail.setEmail(mailDto.getEmail());
        createMail.setTitle("루빗츠 임시 비밀번호 안내 이메일 입니다.");
        createMail.setMessage("안녕하세요 루빗츠 입니다." + "회원님의 임시 비밀번호는" + str + " 입니다.");
        updatePassword(str, mailDto);
        return createMail;
    }
    public void updatePassword(String str, MailDto.SendPassword mailDto) {
        Member member = memberRepository.findByEmail(mailDto.getEmail());
        String rawPassword = str;
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
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
    public void findPasswordMailSend(MailDto.SendPassword mailDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getEmail());
        message.setFrom(SendMailService.FROM_ADDRESS);
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        mailSender.send(message);
    }

    public void authEmailMailSend(MailDto.AuthEmail mailDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getEmail());
        message.setFrom(SendMailService.FROM_ADDRESS);
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        mailSender.send(message);
    }


    public MailDto.AuthEmail createMailAndAuthEmail(MailDto.AuthEmail mailDto) {
        String createKey = getCreateKey();
        MailDto.AuthEmail createMail = new MailDto.AuthEmail();
        createMail.setEmail(mailDto.getEmail());
        createMail.setTitle("루빗츠 회원가입 이메일 인증번호입니다.");
        createMail.setMessage("안녕하세요 루빗츠 입니다." + "이메일 인증번호는" + createKey + " 입니다.");
        createMail.setCreateKey(createKey);
        redisService.setValues(mailDto.getEmail(),createKey);
        return createMail;
    }

    public boolean checkKey(MailDto.AuthEmail mailDto){
        String storigeKey = redisService.getValues(mailDto.getEmail());
        if(mailDto.getCreateKey().equals(storigeKey)){
            return true;
        } else return false;
    }

    public String getCreateKey() {
        char[] charSet = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        String createKey = "";
        int idx = 0;
        for (int i = 0; i < 6; i++) {
            idx = (int) (charSet.length * Math.random());
            createKey += charSet[idx];
        }
        return createKey;
    }

}