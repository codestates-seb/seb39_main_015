package seb15.roobits.security.handler;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.security.utils.CustomAuthorityUtils;
import seb15.roobits.security.provider.JwtTokenProvider;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

//    public OAuth2MemberSuccessHandler(JwtTokenProvider jwtTokenProvider,
//                                      CustomAuthorityUtils customAuthorityUtils,
//                                      MemberService memberService){
//        this.jwtTokenProvider = jwtTokenProvider;
//        this.customAuthorityUtils =customAuthorityUtils;
//        this.memberService = memberService;
//    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException,SecurityException{
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Member member;
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        String username = String.valueOf(oAuth2User.getAttributes().get("name"));
        String provider = "google";
        String password = String.valueOf(oAuth2User.getAttributes().get("providerId"));
        List<String> authorities = customAuthorityUtils.createRoles(email);
        if(memberRepository.findByUsername(username) == null){
        saveMember(username,email,password,provider);}
        redirect(request,response,username,provider,authorities);
    }

    private void saveMember(String username,String email,String password,String provider) {
        Member member = new Member(username,email,password,provider);
        System.out.println(String.valueOf(password));
        memberService.createMember(member);
        member.setProvider("google");
        memberRepository.save(member);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response,String username,String provider, List<String> authorities)throws IOException{
        String accessToken = delegateAccessToken(username,provider, authorities);
        String refreshToken = delegateRefreshToken(username);
        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request,response,uri);
    }

    private String delegateAccessToken(String username,String provider, List<String> authorities){
        Map<String,Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);
        claims.put("provider",provider);

        String subject = username;
        System.out.println(claims);
        Date expriation = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getAccessTokenExpirationSeconds());
        String base64EncodedSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());
        String accessToken = jwtTokenProvider.generateAccessToken(claims,subject,expriation,base64EncodedSecretKey);
        return accessToken;
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getRefreshTokenExpirationSeconds());
        String base64EncodedSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());
        String refreshToken = jwtTokenProvider.generateRefreshToken(subject, expiration, base64EncodedSecretKey);
        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken){
        MultiValueMap<String,String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("roobits.com")
                .port(80)
//                .host("localhost")
//                .port(3000)
                .path("/token")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
// http://locathost:3000/token=? accesstoken = jweifjweoigjowjeggoiw.gweigjoweg.wegoiwjeogj --> Uri로 나타나는 이유
// http://locathost:3000/token -> 생성
// -> 로직 작성. accseetoken = ->
// -> refeshtoken 받아올수있는 로직 ->
