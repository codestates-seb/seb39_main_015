package seb15.roobits.room.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import seb15.roobits.room.entity.Room;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Optional;


@Getter
@Setter
public class RoomResponseDto {
    private long roomId;

    private String roomName;

    private Date dDay;

    private long restDay;

    private String weather;

    private Room.RoomTheme roomTheme;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    private String url;

    public RoomResponseDto(long roomId, String roomName, Date dDay, Room.RoomTheme roomTheme, Object weather, long viewCount, long restDay, String url) {
    }
}
