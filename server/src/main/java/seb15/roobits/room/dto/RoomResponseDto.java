package seb15.roobits.room.dto;

import lombok.*;
import seb15.roobits.room.entity.Room;

import static seb15.roobits.room.entity.Room.*;

@Getter
@Setter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private String dDay;

    private long restDay;

//    private String weather;

    private RoomTheme roomTheme;

//    @Column(columnDefinition = "integer default 0", nullable = false)
//    private long viewCount;

    private long roobitAmount;

    private String url;

    public RoomResponseDto(long roomId, String roomName, String dDay, RoomTheme roomTheme, long roobitAmount, long restDay, String url) {
    }
}
