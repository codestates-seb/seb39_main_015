package seb15.roobits.room.dto;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;
import java.util.Date;


@Builder
@Getter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private long dDay;

    private long restDay;

    private long roomTheme;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;
4
    private String url;

    public RoomResponseDto(long roomId, String roomName, Date dDay, long roomTheme, Object weather, long viewCount, long restDay, String url) {
    }
}
