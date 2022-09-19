package roobits.roobit.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    ROOBIT_NOT_FOUND(404, "Roobit not found"),
    ROOBIT_CODE_EXISTS(409, "Roobit Code exists"),
    ROOM_NOT_FOUND(404, "Room not found"),
    CANNOT_CHANGE_ROOM(403, "Room can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
