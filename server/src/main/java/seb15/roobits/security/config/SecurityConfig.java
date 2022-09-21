package seb15.roobits.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;
import seb15.roobits.security.oauth.PrincipalOauth2UserService;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CorsFilter corsFilter;

    private final PrincipalOauth2UserService principalOauth2UserService;



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.apply(new CustomDsl());

        http.formLogin()
                .loginPage("/user/login")
                .defaultSuccessUrl("/user/rooms"); //프론트쪽에서 로그인 성공시 리디렉션;

        http.oauth2Login()
                .loginPage("/user/googleauth")
                .defaultSuccessUrl("/main")
                .userInfoEndpoint()
                .userService(principalOauth2UserService);

        http.logout()
                        .logoutUrl("/user/logout")
                                .logoutSuccessUrl("/user/login")
                                        .deleteCookies("JSESSIONID");

        http.authorizeRequests()
                .antMatchers("/sample/**").authenticated()
                .antMatchers("/room/**").access("hasRole('ROLE_HOST') or hasRole('ROLE_MANAGER')")
                .antMatchers("/manager/**").access("hasRole('ROLE_MANAGER')")
                .anyRequest().permitAll();

        return http.build();
    }

    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception{
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                    .addFilter(corsFilter);
//세션을 사용할 경우 아래 두 jwt토큰필터는 사용하지 않는다.
//                    .addFilter(new JwtAuthenticationFilter(authenticationManager))
//                    .addFilter(new JwtAuthorizationFilter(authenticationManager,memberRepository));
        }
    }


}
