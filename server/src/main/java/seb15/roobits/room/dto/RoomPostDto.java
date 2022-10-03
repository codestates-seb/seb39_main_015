package seb15.roobits.room.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;


import javax.validation.constraints.Future;

import java.time.LocalDate;

@Getter
public class RoomPostDto {

    private long memberId;

    @Length(min= 2, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Future(message = "오늘 후의 날짜여야 합니다.")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dDay;

    private String roomTheme;

    @Range(min= 1, max= 300,
            message = "최소 1부터 최대 300개의 루빗을 설정해야 합니다.")
    private long roobitAmount;
}
