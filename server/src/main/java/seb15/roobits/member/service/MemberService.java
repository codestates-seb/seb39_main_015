package seb15.roobits.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;


    private final BCryptPasswordEncoder passwordEncoder;

    //회원가입
    public Member createMember(Member member) {
        verifyExistsUsername(member.getUsername());
        verifyExistsEmail(member.getEmail());
        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        member.setPassword(encPassword);
        member.setRoles("ROLE_HOST");
        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    //회원정보 수정
    public Member updateMember(Member member) {
        Member findMember = findVerifyMember(member.getMemberId());
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

    //회원탈퇴
    public void deleteMember(long memberId) {
        Member findMember = findVerifyMember(memberId);
        memberRepository.delete(findMember);
    }

    //특정회원 조회 (관리자)
    public Member findMember(long memberId) {
        return findVerifyMember(memberId);
    }

    //모든회원 조회 (관리자)
    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId")));
    }

    //존재하는 회원 인지 검증
    public Member findVerifyMember(long memberId) {
        Optional<Member> optinalMember = memberRepository.findById(memberId);
        Member findMember = optinalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    //이미 존재하는 username인지 검증
    private void verifyExistsUsername(String username) {
        Member existMember = memberRepository.findByUsername(username);
        if (existMember != null) {
            throw new BusinessLogicException(ExceptionCode.USERNAME_EXISTS);
        }
    }

    private void verifyExistsEmail(String email) {
        Member existMember = memberRepository.findByEmail(email);
        if (existMember != null) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
    }

    public boolean memberEmailCheck(String email, String username) {
        Member member = memberRepository.findByEmail(email);
        if (member != null && member.getUsername().equals(username)) {
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    public Member findUserId(Member member) {
        Member findUserMember = memberRepository.findByEmail(member.getEmail());
        if (findUserMember == null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        return findUserMember;
    }
}
