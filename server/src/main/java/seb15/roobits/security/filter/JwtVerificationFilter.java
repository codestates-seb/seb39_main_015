package seb15.roobits.security.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.entity.Member;
import seb15.roobits.security.utils.CustomAuthorityUtils;
import seb15.roobits.security.provider.JwtTokenProvider;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            logger.error("Token Expired");
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }  //예외처리
        filterChain.doFilter(request, response);
    }
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request)throws ServletException{
        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String,Object> verifyJws(HttpServletRequest request){
        String jws = request.getHeader("Authorization").replace("Bearer ","");
        String base64EncodedSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());
        Map<String,Object> claims = jwtTokenProvider.getClaim(jws, base64EncodedSecretKey).getBody();
        System.out.println(claims);
        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims){
//        Long memberId = (Long) claims.get("memberId");
        String provider = (String) claims.get("provider");
//        if(provider == null){provider = "roobits";}  //추가
        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = customAuthorityUtils.createAuthorities((List)claims.get("roles"));
        List<String> roles = new ArrayList<>();
        authorities.forEach(s->roles.add(s.getAuthority()));
        Member member = Member.builder()
//                .memberId(memberId)
                .provider(provider)
                .username(username)
                .roles(roles).build();
        System.out.println("1");
        Authentication authentication = new UsernamePasswordAuthenticationToken(member, null,authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

//    private Map<String, Object> refresh(Map<String, Object> refreshToken){
//
//    }
//
//    private Map<String,Object> verifyRefreshJws(HttpServletRequest request){
//        String jws = request.getHeader("Refresh");
//        String base64EncodedSecretKey = jwtTokenProvider.encodeBase64SecretKey(jwtTokenProvider.getSecretKey());
//        Map<String,Object> claims = jwtTokenProvider.getClaim(jws, base64EncodedSecretKey).getBody();
//        System.out.println(claims);
//        return claims;
//    }
}