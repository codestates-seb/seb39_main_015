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
    private long memberId;
    @NotBlank(message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    @Range(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @NotBlank
    @Future(message = "오늘 후의 날짜여야 합니다.")
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private Date dDay;

//    @NotBlank(message = "룸 테마를 선택해야 합니다.")
//    private long roomTheme;

    @NotBlank
    @Range(min= 1, max= 300,
            message = "최대 몇 개의 루빗을 작성할 수 있는지 정해야 합니다.")
    private long roobitAmount;
}
