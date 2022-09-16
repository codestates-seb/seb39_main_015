package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class RoomPatchDto {
    private long roomId;

    private String roomName;

    private Date dDay;

    private long roomTheme;

}
