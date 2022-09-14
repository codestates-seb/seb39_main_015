package seb15.roobits.member.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.member.entity.Member;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    //회원가입
    public Member createMember(Member member){
        return null;
    }

    //회원정보 수정
    public Member updateMember(Member member){
        return null;
    }

    //특정회원 조회 (관리자)
    public Member findMember(){
        return null;
    }

    //모든회원 조회 (관리자)
    public Member findMembers(){
        return null;
    }

    //존재하는 회원 인지 검증
    public Member findVerifyMember(){
        return null;
    }

    //존재하는 username인지 검증
    private void verifyExistsUsername(){

    }


}
