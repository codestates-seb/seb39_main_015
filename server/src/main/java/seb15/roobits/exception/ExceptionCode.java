package seb15.roobits.exception;

import lombok.Getter;

public enum ExceptionCode {

    DDAY_NOT_VALID(400, "D-day has to be within 30 days from today"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    USERNAME_EXISTS(409, "Username already exists"),
//    MEMBER_EXISTS(409, "Member exists"),
    EMAIL_EXISTS(409,"Email already exists"),
    INVALID_TOKEN(500 , "Invalid token"),

    INVALID_USERNAME_OR_PASSWORD(422 , "Invalid username or password"),
    ROOBIT_NOT_FOUND(404, "Roobit not found"),



    ROOBIT_CODE_EXISTS(409, "Roobit Code exists"),

    ROOM_NOT_FOUND(404, "Room not found"),

    NOT_IMPLEMENTATION(501, "Not Implementation"),

    INVALID_MEMBER_STATUS(400, "Invalid member status"),

    ROOMNAME_ALREADY_EXISTS(409, "Room already exists"),

    CANNOT_CHANGE_ROOM(403, "Room can not be changed more than twice");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
