package seb15.roobits.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.apache.catalina.authenticator.SpnegoAuthenticator;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.security.provider.JwtTokenProvider;

import javax.servlet.FilterChain;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @SneakyThrows //학습필요
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response){
        //loginDto클래스의 객체를 역직렬화 하기 위해서 오브젝트 맵퍼 선언
        ObjectMapper objectMapper = new ObjectMapper();

        //오브젝트 맵퍼로 해당 객체의 데이터를 역직렬화시킴
        MemberDto.Login memberLoginDto= objectMapper.readValue(request.getInputStream(), MemberDto.Login.class);

        //역직렬화 시킨 데이터를 UsernamePasswordAuthenticationToken을 생성하여 해당 값을 넣어줌
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(memberLoginDto.getUsername(), memberLoginDto.getPassword());
        //그이후 값을 authenticationManager을 통해서 인증정보를 위임
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain filterChain,
                                            Authentication authentication) throws ServletException, IOException {
        Member member = (Member) authentication.getPrincipal(); //해당 authentication의 데이터를 이용하여 member객체를 받아옴

        String accessToken = delegateAccessToken(member); //(member객체의 정보를 이용해 accessToken을 생성)
        String refreshToken = delegateRefreshToken(member); //(member객체의 정보를 이용해 refreshToken을 생성)

        response.setHeader("Authorization", "Bearer "+accessToken);
        response.setHeader("Refresh", refreshToken);
    }// 해당 메서드는 클라이언트의 인증이 성공 할경우 호출됨

    private String delegateAccessToken(Member member) {  //엑세스 토큰 생성 메서드
        Map<String,Object> claims = new HashMap<>();
//        claims.put("memberId",member.getMemberId());
        claims.put("provider", member.getProvider());  //추가
        claims.put("username",member.getUsername());
        claims.put("roles",member.getRoles());

        String subject = "roobits";
        System.out.println(claims);
        Date expiration = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getAccessTokenExpirationMinutes());

        String base64EncodeSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());

        String accessToken = jwtTokenProvider.generateAccessToken(claims, subject, expiration, base64EncodeSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(Member member) { //리프레시토큰 생성 메서
        Map<String,Object> claims = new HashMap<>();
//        claims.put("memberId",member.getMemberId());
        claims.put("provider", member.getProvider());  //추가
        claims.put("username",member.getUsername());
        claims.put("roles",member.getRoles());

        String subject = member.getUsername();
        Date expiration = jwtTokenProvider.getTokenExpiration(jwtTokenProvider.getRefreshTokenExpirationMinutes());

        String base64EncodeSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());

        String refreshToken = jwtTokenProvider.generateRefreshToken(subject, expiration, base64EncodeSecretKey);

        return refreshToken;
    }


}
