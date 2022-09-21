package seb15.roobits.security.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;

@Service
public class PrincipalDetailsService implements UserDetailsService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findByUsername(username);
        System.out.println(member.getMemberStatus());
        if (member.getMemberStatus() == Member.MemberStatus.MEMBER_QUIT)
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        if(member != null){
            return new PrincipalDetails(member);
        }
        return null;
    }
}
