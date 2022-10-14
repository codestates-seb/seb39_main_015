package seb15.roobits.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityCorsConfig {

    @Bean
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://roobits.s3-website.ap-northeast-2.amazonaws.com"); //특정패턴의 origin만 허용
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*"); //특정 header만 허용
        config.addAllowedMethod("*"); //특정 메소드만 허용
        config.addExposedHeader("*"); //추가헤더,커스텀 헤더를 지정
        source.registerCorsConfiguration("/**", config); //corsConfiguration으로 등록

        return new CorsFilter(source);
    }
}
