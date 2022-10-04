package seb15.roobits.roobit.dto;//package seb15.roobits.roobit.dto;
//
//import lombok.Getter;
//import lombok.Setter;
//import org.hibernate.validator.constraints.Length;
//import org.hibernate.validator.constraints.Range;
//import org.springframework.data.annotation.CreatedDate;
//import org.springframework.format.annotation.DateTimeFormat;
//import seb15.roobits.roobit.entity.Roobit;
//import seb15.roobits.room.entity.Room;
//import seb15.roobits.room.entity.RoomStatus;
//import seb15.roobits.room.entity.RoomTheme;
//
//import javax.persistence.Column;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.validation.constraints.Future;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//
//@Getter
//@Setter
//public class RoomData {
//
//    @Setter
//    private long roomId;
//    private String roomName;
//    private String password;
//
//    private LocalDate dDay;
//
//    private long restDay;
//
//    public RoomTheme roomTheme;
//
//    private long roobitAmount;
//
//    private long viewCount;
//
//    private String weather;
//
//    private long patchCount;
//
//    private RoomStatus roomStatus;
//
//
//    public void setRoom(Room room) {
//        this.roomId = room.getRoomId();
//        this.roomName = room.getRoomName();
//        this.password = room.getPassword();
//        this.dDay = room.getDDay();
//        this.restDay = room.getRestDay();
//        this.roomTheme = room.getRoomTheme();
//        this.roobitAmount = room.getRoobitAmount();
//        this.viewCount = room.getViewCount();
//        this.weather = room.getWeather();
//        this.patchCount = room.getPatchCount();
//        this.roomStatus = room.getRoomStatus();
//    }
//
//
////    roomId : 1,
////    roomName:’room’,
////    dDay: ‘2022-09-15’,
////    restDay: 30,
////    roomTheme: {number: 1, description: ‘cats’},
////    viewCount: 55,
////    weather: (sun, rain, snow, cloud),
////    url : ‘http://localhost:8080/rooms/{roomId}’,
////    roobitAmount: 300
//
//
//
//}
