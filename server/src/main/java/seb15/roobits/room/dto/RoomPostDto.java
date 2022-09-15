package com.board.board.room.dto;

import lombok.Getter;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.time.DurationMax;
import org.hibernate.validator.constraints.time.DurationMin;
import org.springframework.boot.convert.DurationFormat;

import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
public class RoomPostDto {
    @NotBlank(message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    @Range(min= 3, max= 20,
            message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    private String password;

    @NotBlank
    @Future(message = "오늘 후의 날짜여야 합니다.")
    @RestDay(max= 30,
            message= "30일 이내의 날짜만 선택 가능합니다.")
    private Date dDay;

    @NotBlank(message = "룸 테마를 선택해야 합니다.")
    private long roomTheme;

    @NotBlank
    @Max(300)
    private long roobitAmount;
}
