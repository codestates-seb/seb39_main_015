package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import seb15.roobits.room.entity.Room;

import java.time.LocalDate;
import java.util.Date;


@Getter
@Setter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private LocalDate dDay;

//    private long restDay;

//    private String weather;

    private Room.RoomTheme roomTheme;

    private long roobitAmount;

//    private long viewCount;

//    private String url;

}
