package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;
import seb15.roobits.room.entity.Room;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class RoomPatchDto {
    private long roomId;

    @NotBlank(message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    @Range(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @NotBlank
    @Future(message = "오늘 후의 날짜여야 합니다.")
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private Date dDay;

    @NotBlank(message = "룸 테마를 선택해야 합니다.")
    private Room.RoomTheme roomTheme;

}
