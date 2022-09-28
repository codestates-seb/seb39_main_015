//package seb15.roobits.security.oauth;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
//import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
//import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.stereotype.Service;
//import seb15.roobits.member.entity.Member;
//import seb15.roobits.member.repository.MemberRepository;
//
//import java.util.Collections;
//
//@Service
//@RequiredArgsConstructor
//public class PrincipalOauth2UserService extends DefaultOAuth2UserService {
//
//    @Autowired
//    private final MemberRepository memberRepository;
//
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException{
//
//        OAuth2User oAuth2User = super.loadUser(userRequest);
//
//        String provider = userRequest.getClientRegistration().getClientId();
//        String providerId = oAuth2User.getAttribute("sub");
//        String username = oAuth2User.getAttribute("name");
//        String roles = "ROLE_HOST";
//
//        Member memberEntity = memberRepository.findByUsername(username);
//
//        if(memberEntity == null){
//            memberEntity = Member.builder()
//                    .username(username)
//                    .roles(Collections.singletonList(roles))
//                    .provider(provider)
//                    .providerId(providerId)
//                    .build();
//            memberRepository.save(memberEntity);
//        }
//        return new PrincipalDetails(memberEntity, oAuth2User.getAttributes());
//
//    }
//}
