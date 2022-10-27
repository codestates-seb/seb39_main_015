package seb15.roobits.mail.dto;

import lombok.*;


public class MailDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SendPassword{
        private String username;
        private String email;
        private String title;
        private String message;

    }
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AuthEmail{
        private String email;
        private String title;
        private String message;
        private String createKey;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class checkEmail{
        private String email;
        private String createKey;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class checkedKey{
        private boolean checkedKey;
    }
}