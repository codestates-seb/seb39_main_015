package seb15.roobits.security.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {
//    @Value("${username}")
//    private String username;

    private final List<GrantedAuthority> MANAGER_ROLES = AuthorityUtils.createAuthorityList("ROLE_MANAGER", "ROLE_HOST");
    private final List<GrantedAuthority> HOST_ROLES = AuthorityUtils.createAuthorityList("ROLE_HOST");
    private final List<String> MANAGER_ROLES_STRING = List.of("MANAGER", "HOST");
    private final List<String> HOST_ROLES_STRING = List.of("HOST");

    // 메모리 상의 Role을 기반으로 권한 정보 생성.
//    public List<GrantedAuthority> createAuthorities(String uesername) {
//        if (username.equals(username)) {
//            return MANAGER_ROLES;
//        }
//        return HOST_ROLES;
//    }

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    // DB 저장 용
    public List<String> createRoles(String email) {
//        if (email.equals(email)) {
//            return MANAGER_ROLES_STRING;
//        }
        return HOST_ROLES_STRING;
    }
}

