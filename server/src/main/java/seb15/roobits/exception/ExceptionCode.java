package seb15.roobits.exception;

import lombok.Getter;

public enum ExceptionCode {
    USERNAME_EXISTS(409, "Username already exists"),
    INVALID_USERNAME_OR_PASSWORD(422 , "Invalid username or password"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    INVALID_MEMBER_STATUS(400, "Invalid member status"),
    CANNOT_CHANGE_ROOM(403, "Room can not change"),
    ROOM_NOT_FOUND(404, "Room not found"),
    ROOMNAME_ALREADY_EXISTS(409, "Room already exists"),
    ROOBIT_CODE_EXISTS(409, "Roobit Code exists"),
    ROOBIT_NOT_FOUND(404, "Roobit not found"),
    DDAY_NOT_VALID(400, "D-day has to be within 30 days from today"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    EMAIL_EXISTS(409,"Email already exists"),
    INVALID_TOKEN(500 , "Invalid token");
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
