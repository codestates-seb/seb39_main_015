package seb15.roobits.room.mapper;

import com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl;
import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);
    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);
    default RoomResponseDto roomToRoomResponseDto(Room room) throws ParseException {
//        String dDay = room.getDDay();
//        String currentDay = new SimpleDateFormat("yyyy-MM-dd").format(new Date (System.currentTimeMillis()));
//
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//
//        Date dDayDate = new Date(dateFormat.parse(dDay).getTime());
//        Date currentDate = new Date(dateFormat.parse(currentDay).getTime());

        long restDay = 1;
//                (dDayDate.getTime() - currentDate.getTime())/(1000*24*60*60) +1;

        String url = "http://localhost:8080/rooms/" + room.getRoomId(); //주소 형식 고쳐야 함

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomId(),
                room.getRoomName(),
                room.getDDay(),
                room.getRoomTheme(),
//                room.getWeather(),
//                room.getViewCount(),
                room.getRoobitAmount(),
                restDay,
                url);

        return roomResponseDto;
    }
    List<RoomResponseDto> roomsToRoomResponseDtos(List<Room> rooms);
}
