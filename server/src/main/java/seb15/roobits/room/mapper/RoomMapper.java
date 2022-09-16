package seb15.roobits.room.mapper;

import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);
    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);
    default RoomResponseDto roomToRoomResponseDto(Room room) {
        Date currentDate = new Date (System.currentTimeMillis());
        Date dDay = room.getDDay();
        long restDay = (dDay.getTime() - currentDate.getTime())/(1000*24*60*60) + 1;

        String url = "www.asdf.com/rooms/" + room.getRoomId(); //주소 형식 고쳐야 함

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomId(),
                room.getRoomName(),
                room.getDDay(),
                room.getRoomTheme(),
                room.getWeather(),
                room.getViewCount(),
                restDay,
                url
        );

        return roomResponseDto;
    }
    List<RoomResponseDto> roomsToRoomResponseDtos(List<Room> rooms);
}
