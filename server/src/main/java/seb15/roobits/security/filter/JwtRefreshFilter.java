//package seb15.roobits.security.filter;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.Authentication;
//import seb15.roobits.member.entity.Member;
//import seb15.roobits.security.provider.JwtTokenProvider;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@RequiredArgsConstructor
//public class JwtRefreshFilter {
//
//    private final JwtTokenProvider jwtTokenProvider;
//
//    private fi
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request,
//                                            HttpServletResponse response,
//                                            FilterChain filterChain,
//                                            Authentication authentication) throws ServletException, IOException {
//        Member member = (Member) authentication.getPrincipal(); //해당 authentication의 데이터를 이용하여 member객체를 받아옴
//
//        String accessToken = delegateAccessToken(member); //(member객체의 정보를 이용해 accessToken을 생성)
//        String refreshToken = delegateRefreshToken(member); //(member객체의 정보를 이용해 refreshToken을 생성)
//
//        response.setHeader("Authorization", "Bearer "+accessToken);
//        response.setHeader("Refresh", refreshToken);
//    }// 해당 메서드는 클라이언트의 인증이 성공 할경우 호출됨
//}
