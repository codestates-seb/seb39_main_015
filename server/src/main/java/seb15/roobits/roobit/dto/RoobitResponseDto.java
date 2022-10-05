package seb15.roobits.roobit.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.room.entity.Room;

import java.time.LocalDateTime;

@Getter
@Setter
public class RoobitResponseDto {

    private long roobitId;

    @Setter
    private long roomId;
    public void setRoom(Room room) {
        this.roomId = room.getRoomId();
    }

    private String nickname;
    private String body;
    private String email;
    private String ToReception;  // 1005YU
    private String style;

    @CreatedDate
    private LocalDateTime createdAt;
    private Roobit.RoobitStatus roobitStatus;



}
