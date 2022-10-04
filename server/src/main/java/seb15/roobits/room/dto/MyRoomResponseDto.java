package seb15.roobits.room.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;


import java.time.LocalDate;

@Getter
@Setter
public class MyRoomResponseDto {
    private long roomId;
    private String roomName;
    private LocalDate dDay;
    private Long restDay;
    private String roomTheme;
    private String url;
}
