package seb15.roobits.roobit.dto;

import lombok.Getter;

import java.util.List;


@Getter
public class RoomResponseDto<T> {

    private RoomData roomData;
    private List<T> roobits;

    public RoomResponseDto(RoomData roomData, List<T> roobits) {
        this.roomData = roomData;
        this.roobits = roobits;
    }
}
