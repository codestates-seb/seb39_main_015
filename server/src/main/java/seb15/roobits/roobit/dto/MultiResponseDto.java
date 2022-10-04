package seb15.roobits.roobit.dto;

import lombok.Getter;

import java.util.List;


@Getter
public class MultiResponseDto<T> {

    private List<T> roobits;

    public MultiResponseDto(List<T> roobits) {
        this.roobits = roobits; }

//    private RoomData roomData;
//    private List<T> roobits;
//
//    public MultiResponseDto(RoomData roomData, List<T> roobits) {
//        this.roomData = roomData;
//        this.roobits = roobits; }

}
