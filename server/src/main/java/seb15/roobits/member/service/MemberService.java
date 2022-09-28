package seb15.roobits.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.security.utils.CustomAuthorityUtils;
import seb15.roobits.security.provider.JwtTokenProvider;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    @Autowired
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    private final JwtTokenProvider jwtTokenProvider;
//    private final ApplicationEventPublisher publisher;
    private final CustomAuthorityUtils authorityUtils;



    //회원가입
    public Member createMember(Member member) {
        verifyExistsUsername(member.getUsername());
        verifyExistsEmail(member.getEmail());
        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
        List<String> roles = authorityUtils.createRoles(member.getUsername());
        member.setRoles(roles);
        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);
        Member savedMember = memberRepository.save(member);
//        publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));
        return savedMember;
    }

    //회원정보 수정
    public Member updateMember(Member member) {
        Member findMember = findVerifyMember(member.getUsername());
        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(encPassword));
//        닉네임 삭제
//        Optional.ofNullable(member.getNickname())
//                .ifPresent(nickname -> findMember.setNickname(nickname));
//        Optional.ofNullable(member.getEmail())
//                .ifPresent(email -> findMember.setEmail(email));
        return memberRepository.save(findMember);
    }

//    public Member checkUpdateMember(String username) {
//        Member findMember = findVerifyMember(username);
//        if (existMember != null) {
//            throw new BusinessLogicException(ExceptionCode.USERNAME_EXISTS);
//        }
//    }

    //회원탈퇴
    public void deleteMember(String username) {
        Member findMember = findVerifyMember(username);
        findMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
//        memberRepository.delete(findMember);
    }

    //특정회원 조회 (관리자)
    public Member findMember(String username) {
        System.out.println(username);
        return findVerifyMember(username);
    }

    //모든회원 조회 (관리자)
    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId")));
    }

    //존재하는 회원 인지 검증
//    public Member findVerifyMember(long memberId) {
//        Optional<Member> optinalMember = memberRepository.findById(memberId);
//        Member findMember = optinalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        return findMember;
//    }

    public Member findVerifyMember(String username) {
        Member optinalMember = memberRepository.findByUsername(username);
        if(optinalMember.getMemberStatus() == Member.MemberStatus.MEMBER_QUIT)
            throw  new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        return optinalMember;
    }

    //이미 존재하는 username인지 검증
    private void verifyExistsUsername(String username) {
        Member existMember = memberRepository.findByUsername(username);
        if (existMember != null) {
            throw new BusinessLogicException(ExceptionCode.USERNAME_EXISTS);
        }
    }

        public Boolean checkPassword(String username,String password) {
        Member findMember = memberRepository.findByUsername(username);
        String checkedMemberPassword = findMember.getPassword();
        if(!checkedMemberPassword.equals(password)) {
            return false;
        }else {return true;}
    }

    public Boolean checkUsername(String username) {
        Member checkMember = memberRepository.findByUsername(username);
        if (checkMember == null) {return true;} else {return false;}
    }

    private void verifyExistsEmail(String email) {
        Member existMember = memberRepository.findByEmail(email);
        if (existMember != null) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
    }

//    public boolean memberEmailCheck(String email, String username) {
//        Member member = memberRepository.findByEmail(email);
//        if (member != null && member.getUsername().equals(username)) {
//            return true;
//        } else {
//            return false;
//        }
//    }

    @Transactional
    public Member findUserId(Member member) {
        Member findUserMember = memberRepository.findByEmail(member.getEmail());
        if (findUserMember == null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        if (findUserMember.getMemberStatus() == Member.MemberStatus.MEMBER_QUIT)
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        return findUserMember;
    }

}
