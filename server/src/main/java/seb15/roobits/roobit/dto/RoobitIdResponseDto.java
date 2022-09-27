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
public class RoobitIdResponseDto {  // 0927(YU)

    private long roobitId;

}
