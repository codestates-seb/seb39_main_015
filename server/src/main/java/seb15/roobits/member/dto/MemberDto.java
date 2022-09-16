package seb15.roobits.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


//유효성 검증 적용 필요
public class MemberDto {

    @Data
    @Builder
    @AllArgsConstructor

    public static class Join{
        @NotBlank(message = "아이디는 공백이 아니여야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9]*$",message = "아이디는 영문 대소문자와 숫자만 가능합니다.")
        @Size(min = 4, max = 15,message = "아이디는 4~15자 사이여야 합니다.")
        private String username;
        @NotBlank(message = "패스워드는 공백이 아니여야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9!@#$%^&*()]*$",message = "비밀번호는 영문 대소문자와 키패드 1~0까지의 특수문자만 가능합니다.")
        @Size(min = 8, max = 20, message = "비밀번호는 8~20자 사이여야 합니다.")
        private String password;
        @Email(message = "올바른 이메일이 아닙니다.")
        @NotBlank(message = "이메일은 공백이 아니여야 합니다.")
        private String email;
    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        @NotBlank(message = "패스워드는 공백이 아니여야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9!@#$%^&*()]*$",message = "비밀번호는 영문 대소문자와 키패드 1~0까지의 특수문자만 가능합니다.")
        @Size(min = 8, max = 20, message = "비밀번호는 8~20자 사이여야 합니다.")
        private String password;
        @Email(message = "올바른 이메일이 아닙니다.")
        @NotBlank(message = "이메일은 공백이 아니여야 합니다.")
        private String email;
    }
    @Data
    @Builder
    @AllArgsConstructor
    public static class Login{
        private String username;
        private String password;
    }
    @Data
    @Builder
    @AllArgsConstructor
    public static class Response{
        private Long memberId;
    }// 리스폰스 데이터는 미정 추후 개선 예정


}
