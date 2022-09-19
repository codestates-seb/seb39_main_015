package seb15.roobits.member.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member not found"),

    USERNAME_EXISTS(409, "Username already exists"),

    EMAIL_EXISTS(409,"Email already exists");

    @Getter
    private int code;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
