package seb15.roobits.roobit.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.room.entity.Room;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class RoobitNullResponseDto {  // 디데이 아닐 땐 body는 Null

    private long roobitId;

    @Setter
    private long roomId;
    @Setter
    private LocalDate dDay;
    public void setRoom(Room room) {
        this.roomId = room.getRoomId();
        this.dDay = room.getDDay();
    }

    private String nickname;
//    private String body;
    private String email;
    private String reception;
    private String style;

    @CreatedDate
    private LocalDateTime createdAt;
    private Roobit.RoobitStatus roobitStatus;


}
