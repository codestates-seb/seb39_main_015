package seb15.roobits.room.entity;

import lombok.Getter;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@Getter
public enum RoomStatus {
    ROOM_ONGOING(1, "룸 진행"), //D-day가 되기 전
    ROOM_OPENED(2, "룸 열림"), //D-day
    ROOM_CLOSED(3, "룸 닫힘"), //D-day가 지남. 사용자에게는 닫힌 룸으로 보이나 DB에 남아있음.
    ROOM_DELETED(4, "룸 삭제"); //사용자가 삭제함. 사용자에게는 삭제된 룸으로 보이나 DB에 남아있음.

    @Getter
    public int statusNumber;

    @Getter
    public String statusDescription;

    RoomStatus(int statusNumber, String statusDescription) {
        this.statusNumber = statusNumber;
        this.statusDescription = statusDescription;
    }
}
