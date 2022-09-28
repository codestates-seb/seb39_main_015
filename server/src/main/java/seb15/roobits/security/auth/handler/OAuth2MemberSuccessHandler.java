package seb15.roobits.security.auth.handler;

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
import seb15.roobits.security.auth.utils.CustomAuthorityUtils;
import seb15.roobits.security.provider.JwtTokenProvider;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpResponse;
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
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        String username = String.valueOf(oAuth2User.getAttributes().get("name"));
        String password = "OauthLogin";
        List<String> authorities = customAuthorityUtils.createRoles(email);
        if(authentication.getPrincipal() == null){
        saveMember(username,email,password);}
        redirect(request,response,username,authorities);
    }

    private void saveMember(String username,String email,String password) {
        Member member = new Member(username,email,password);
        memberService.createMember(member);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response,String username, List<String> authorities)throws IOException{
        String accessToken = delegateAccessToken(username, authorities);
        String refreshToken = delegateRefreshToken(username);
        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request,response,uri);
    }

    private String delegateAccessToken(String username, List<String> authorities){
        System.out.println(username);
        Map<String,Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expriation = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());
        String accessToken = jwtTokenProvider.generateAccessToken(claims,subject,expriation,base64EncodedSecretKey);
        return accessToken;
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getRefreshTokenExpirationMinutes());
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
                .host("localhost")
                .port(3000)
                .path("/token")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
// http://locathost:3000/token
