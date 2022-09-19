package roobits.roobit.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import roobits.roobit.entity.Roobit;
import roobits.room.entity.Room;

import java.time.LocalDateTime;

@Getter
@Setter
public class RoobitResponseDto {

    private long roobitId;

    private String nickname;
    private String body;
    private String email;
    private String reception;
    private String style;

    @CreatedDate
    private LocalDateTime createdAt;
    private Roobit.RoobitStatus roobitStatus;

    @Setter(AccessLevel.NONE)
    private long roomId;
    public void setRoomId(Room room) {
        this.roomId = room.getRoomId();
    }

}
