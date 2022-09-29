package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import seb15.roobits.room.entity.RoomTheme;

import java.time.LocalDate;

@Getter
@Setter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private LocalDate dDay;

    private long restDay;

    private String weather;

    private RoomTheme roomTheme;

    private long roobitAmount;

    private long viewCount;

    private String url;

    private long patchCount;

    public RoomResponseDto(long roomId, String roomName, LocalDate dDay, RoomTheme roomTheme,
                           long viewCount, long roobitAmount, long restDay, String weather, String url, long patchCount) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.dDay = dDay;
        this.roomTheme = roomTheme;
        this.viewCount = viewCount;
        this.roobitAmount = roobitAmount;
        this.restDay = restDay;
        this.weather = weather;
        this.url = url;
        this.patchCount = patchCount;
    }
}
