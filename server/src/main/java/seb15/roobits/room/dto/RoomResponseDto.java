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

//    private String weather;

    private Room.RoomTheme roomTheme;

    private long roobitAmount;

    private long viewCount;

    private String url;

    private long patchCount;

    private Room.RoomStatus roomStatus;

    public RoomResponseDto(long roomId, String roomName, LocalDate dDay, Room.RoomTheme roomTheme,
                           long roobitAmount, long restDay, String url, long patchCount) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.dDay = dDay;
        this.roomTheme = roomTheme;
        this.roobitAmount = roobitAmount;
        this.restDay = restDay;
        this.url = url;
        this.patchCount = patchCount;
    }

}
