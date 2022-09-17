package seb15.roobits.member.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


//유효성 검증 적용 필요
public class MemberDto {

    @Getter
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

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        @NotBlank(message = "패스워드는 공백이 아니여야 합니다.")
        @Pattern(regexp = "^[a-zA-Z0-9!@#$%^&*()]*$",message = "비밀번호는 영문 대소문자와 키패드 1~0까지의 특수문자만 가능합니다.")
        @Size(min = 8, max = 20, message = "비밀번호는 8~20자 사이여야 합니다.")
        private String password;
//        @Email(message = "올바른 이메일이 아닙니다.")
//        @NotBlank(message = "이메일은 공백이 아니여야 합니다.")
//        private String email;
        public void setMemberId(long memberId) {this.memberId = memberId;}
    }

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Find{

        @Email(message = "올바른 이메일이 아닙니다.")
        @NotBlank(message = "이메일은 공백이 아니여야 합니다.")
        private String email;
    }
//    @Getter
//    @Builder
//    @AllArgsConstructor
//    public static class Login{
//        private String username;
//        private String password;
//    }


    @Getter
    @Builder
    @AllArgsConstructor
    public static class FindUsernameResponse{

        private String username;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class GetMyRoomResponse{
        private Long memberId;
        private String username;

//        private Room rooms;
//
//        public Room getRoom(){
//            return null; // 룸부분 구현후에 작업
//        }
    }


}
