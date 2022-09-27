package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import seb15.roobits.room.entity.Room;
import java.time.LocalDate;

@Getter
@Setter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private LocalDate dDay;

    private long restDay;

    private String weather;

    private Room.RoomTheme roomTheme;

    private Room.RoomStatus roomStatus;

    private long roobitAmount;

    private long viewCount;

    private String url;

    private long patchCount;

    public RoomResponseDto(long roomId, String roomName, LocalDate dDay, Room.RoomTheme roomTheme, Room.RoomStatus roomStatus,
                           long viewCount, long roobitAmount, long restDay, String weather, String url, long patchCount) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.dDay = dDay;
        this.roomTheme = roomTheme;
        this.roomStatus = roomStatus;
        this.viewCount = viewCount;
        this.roobitAmount = roobitAmount;
        this.restDay = restDay;
        this.weather = weather;
        this.url = url;
        this.patchCount = patchCount;
    }

}
