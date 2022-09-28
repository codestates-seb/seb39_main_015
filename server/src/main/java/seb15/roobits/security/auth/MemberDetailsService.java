package seb15.roobits.security.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.security.utils.CustomAuthorityUtils;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findByUsername(username);
        if (member.getMemberStatus() == Member.MemberStatus.MEMBER_QUIT)
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        if(member != null){
            return new MemberDetails(member);
        }
        return null;
    }


    public final class MemberDetails extends Member implements UserDetails{


        MemberDetails(Member member){
            setMemberId(member.getMemberId());
            setUsername(member.getUsername());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
            setProvider(member.getProvider());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return customAuthorityUtils.createAuthorities(this.getRoles());
        }


        @Override
        public String getUsername(){
            return  super.getUsername();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
