package seb15.roobits.room.dto;

import lombok.Getter;
import lombok.Setter;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.room.entity.Room;

import java.util.List;

@Getter
@Setter
public class ResponseRoomStatus {
    private Room.RoomStatus roomStatus;
    private String roomData = null;
    private String roobits = null;

    public ResponseRoomStatus(Room.RoomStatus roomStatus, String roomData, String roobits) {
        this.roomStatus = roomStatus;
        this.roomData = roomData;
        this.roobits = roobits;
    }
}
