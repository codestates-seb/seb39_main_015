package seb15.roobits.security.provider;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;

import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;

@Component
public class JwtTokenProvider {

    @Getter
    @Value(("${security.jwt.token.secret-key}"))
    private String secretKey; //시크릿키

    @Getter
    @Value("${security.jwt.token.access-token-expire-second}")
    private int accessTokenExpirationSeconds; //엑세스토큰 기간

    @Getter
    @Value("${security.jwt.token.refresh-token-expire-second}")
    private int refreshTokenExpirationSeconds; //리프레시토큰 기간

    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }//시크릿키를 base64로 인코딩 해야함.


    //엑세스 토큰 생성
    public String generateAccessToken(Map<String, Object> claims, //클레임 (엔티티의 값을 주입)
                                      String subject,      //토큰의 제목지정
                                      Date expriation,  //유효기간
                                      String base64EncodedSecretKey) {  //base64로 인코딩된 시크릿 키값
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()   //엑세스 토큰을 생성 jwt토큰으로 생성함 claim,subject,data,유효기간,키값으로
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expriation)
                .signWith(key)
                .compact();
    }

    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) { //리프레시 토큰 발급
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    // 토큰을 검증후 해독 하여 claim요소들을 반환 (디코딩으로 생각하면됨)
    public Jws<Claims> getClaim(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)  //암호화 했던 시크릿키를 가져와서
                .build()  //디코딩 후
                .parseClaimsJws(jws);  //클레임으로 변환
        return claims;
    }

//    public void verifySignature(String jws, String base64EncodedSecretKey) {
//        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
//
//        Jws<Claims> claims = Jwts.parserBuilder()
//                .setSigningKey(key)  //암호화 했던 시크릿키를 가져와서
//                .build()  //디코딩 후
//                .parseClaimsJws(jws);  //클레임으로 변환
//    }

    public Date getTokenExpiration(int expirationSeconds) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.SECOND, expirationSeconds);
        Date expiration = calendar.getTime();

        return expiration;
    }

    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }
}



//    public String createToken(Long memberId, String username){
//
//        Claims claims = Jwts.claims().setSubject(username);
//        claims.put("memberId",memberId);
//
//
//        Date now = new Date();
//        Date validity = new Date(now.getTime() + validityInMilliseconds);
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setIssuedAt(now)
//                .setExpiration(validity)
//                .signWith(key,SignatureAlgorithm.ES256)
//                .compact();
//    }
//
//    public Authentication getAuthentication(String token) {
//        String username = getUsername(token);
//        Long memberId = getClaim(token).get("memberId", Long.class);
//        return new UsernamePasswordAuthenticationToken(principalDetails, "", principalDetails.getAuthorities());
//    }
//
//    public String getUsername(String token) {
//        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
//    }
//
//    public Claims getClaim(String token){
//        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
//    }
//
//    public String resolveToken(HttpServletRequest req){
//        String bearerToken = req.getHeader("Authorization");
//        if(bearerToken != null && bearerToken.startsWith("Bearer ")){
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//    public boolean validateToken(String token){
//        try{
//            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
//            return true;
//        } catch (JwtException | IllegalArgumentException e){
//            throw new BusinessLogicException(ExceptionCode.INVALID_TOKEN);
//        }
//    }
//
//}
