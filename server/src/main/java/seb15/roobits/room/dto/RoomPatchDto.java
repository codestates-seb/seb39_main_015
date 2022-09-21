package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;
import seb15.roobits.room.entity.Room;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
public class RoomPatchDto {
    private long roomId;

    @Length(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @Future(message = "오늘 후의 날짜여야 합니다.")
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dDay;

}
