package seb15.roobits.room.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import seb15.roobits.room.entity.RoomTheme;

import java.time.LocalDate;

@Getter
@Setter
public class MyRoomResponseDto {
    private long roomId;
    private String roomName;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dDay;

    private Long restDay;

    private RoomTheme roomTheme;

    private long viewCount;

    private String url;
}
