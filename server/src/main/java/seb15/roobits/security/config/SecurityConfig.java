package seb15.roobits.security.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;
import seb15.roobits.member.repository.MemberRepository;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.security.handler.MemberAuthenticationFailureHandler;
import seb15.roobits.security.handler.MemberAuthenticationSuccessHandler;
import seb15.roobits.security.handler.OAuth2MemberSuccessHandler;
import seb15.roobits.security.utils.CustomAuthorityUtils;
import seb15.roobits.security.filter.JwtAuthenticationFilter;
import seb15.roobits.security.filter.JwtVerificationFilter;
import seb15.roobits.security.provider.JwtTokenProvider;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {

    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;

    private final CorsFilter corsFilter;
    private final JwtTokenProvider jwtTokenProvider;

    private final CustomAuthorityUtils customAuthorityUtils;

    private final MemberService memberService;
    private final MemberRepository memberRepository;



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin().disable()
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

//                        .exceptionHandling(new MemberAuthenticationEntryPoint())
//                                .accessDeniedHandler(new MemberAccessDeniedHandler())

//        http.authorizeHttpRequests(authorize -> authorize
////                .antMatchers(HttpMethod.POST, "/*/members").permitAll()         // (1) 추가
////                .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")  // (2) 추가
////                .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")     // (3) 추가
////                .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")  // (4) 추가
////                .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")  // (5) 추가
//                .anyRequest().authenticated());//참고용
        http.oauth2Login(oauth2 -> oauth2
                .successHandler(new OAuth2MemberSuccessHandler(jwtTokenProvider, customAuthorityUtils, memberService,memberRepository)));


        http.authorizeRequests()
                .antMatchers("/sample.yml/**").authenticated()
//                .antMatchers("/rooms/**").access("hasRole('ROLE_HOST') or hasRole('ROLE_MANAGER')")
                .antMatchers("/manager/**").access("hasRole('ROLE_MANAGER')")
                .anyRequest().permitAll();

        return http.build();
    }

//    @Bean
//    public ClientRegistrationRepository clientRegistrationRepository(){
//        ClientRegistration clientRegistration = clientRegistration();
//
//        return new InMemoryClientRegistrationRepository(clientRegistration);
//    }
//
//    private ClientRegistration clientRegistration(){
//        return CommonOAuth2Provider
//                .GOOGLE
//                .getBuilder("google")
//                .clientId(clientId)
//                .clientSecret(clientSecret)
//                .build();
//    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception{
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager,jwtTokenProvider);
            jwtAuthenticationFilter.setFilterProcessesUrl("/user/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenProvider, customAuthorityUtils);

            builder
                    .addFilter(corsFilter)
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
                    .addFilterAfter(jwtVerificationFilter,  OAuth2LoginAuthenticationFilter.class);
        }


    }



}