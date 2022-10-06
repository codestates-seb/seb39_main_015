package seb15.roobits.room.dto;

import lombok.Getter;

import lombok.Setter;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.entity.RoomStatus;

import java.time.LocalDate;

@Getter
@Setter
public class ResponseRoomStatus {

    private String roomName;
    private LocalDate dDay;
    private RoomStatus roomStatus;
    private long totalRoobitCount;
    private long viewCount;

}
