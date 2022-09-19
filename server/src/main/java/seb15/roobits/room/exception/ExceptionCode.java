package seb15.roobits.room.exception;

import lombok.Getter;

public enum ExceptionCode {
    ROOM_NOT_FOUND(404, "Room not found"),
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
