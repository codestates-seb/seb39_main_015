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

//    @Setter(AccessLevel.NONE)
//    private long memberId;
//    public void setMember(Member member) {
//        this.memberId = member.getMemberId();
//    }

    private String nickname;
    private String body;
    private String email;
    private String reception;
    private String style;

    @CreatedDate
    private LocalDateTime createdAt;
    private Roobit.RoobitStatus roobitStatus;



}
