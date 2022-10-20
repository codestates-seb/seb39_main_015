package seb15.roobits.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb15.roobits.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {

    public Member findByMemberId(Long memberId);
    public Member findByUsername(String username);
    public Member findByEmail(String email);
//서드 실행시 쿼리문으로 select * from user where username(메서드 인자값) = ?
}
