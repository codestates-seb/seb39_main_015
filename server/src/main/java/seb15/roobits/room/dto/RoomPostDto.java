package seb15.roobits.room.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import seb15.roobits.room.entity.Room;

import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
public class RoomPostDto {
//    @Range(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @Future(message = "오늘 후의 날짜여야 합니다.")
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private Date dDay;

    private long roomTheme;

//    @Range(min= 1, max= 300)
    private long roobitAmount;
}
