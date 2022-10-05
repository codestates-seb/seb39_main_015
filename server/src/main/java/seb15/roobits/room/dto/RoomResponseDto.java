package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import seb15.roobits.roobit.entity.Roobit;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter

public class RoomResponseDto {
    private long roomId;
    private String roomName;
    private LocalDate dDay;
    private long restDay;
    private String weather;
    private String roomTheme;
    private long roobitAmount;
    private long viewCount;
    private String url;
}
