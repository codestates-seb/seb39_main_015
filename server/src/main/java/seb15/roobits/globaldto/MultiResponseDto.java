package seb15.roobits.globaldto;

import lombok.Getter;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.room.dto.RoomResponseDto;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private RoomResponseDto roomData;
    private List<T> roobits;

    public MultiResponseDto(RoomResponseDto roomData, List<T> roobits) {
        this.roomData = roomData;
        this.roobits = roobits;
    }
}


