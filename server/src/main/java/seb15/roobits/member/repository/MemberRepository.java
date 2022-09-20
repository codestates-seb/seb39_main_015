package seb15.roobits.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb15.roobits.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {
    public Member findByUsername(String username);
    public Member findByEmail(String email);
    // JPA에서 제공하는 findBy규칙 ex) findByUsername메서드 실행시 쿼리문으로 select * from user where username(메서드 인자값) = ?
}
