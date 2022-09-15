package com.board.board.room.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class RoomPatchDto {
    private long roomId;

    private String roomName;

    private Date dDay;

    private long roomTheme;

    private String roomStatus;

    private LocalDateTime createdAt;
}
