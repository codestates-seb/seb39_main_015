package seb15.roobits.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

public class MemberDto {

    @Data
    @Builder
    @AllArgsConstructor
    public static class Join{
        private String username;
        private String password;
        private String nickname;
        private String email;
    }

    @Data
    @Builder
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        private String password;
        private String nickname;
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
