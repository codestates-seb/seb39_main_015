package seb15.roobits.room.mapper;


import seb15.roobits.room.dto.ResponseRoomStatus;
import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;
import seb15.roobits.room.entity.RoomTheme;


@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);

    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);

    default RoomResponseDto roomToRoomResponseDto(Room room) {

        String url = "http://localhost:8080/rooms/" + room.getRoomId();

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomId(),
                room.getRoomName(),
                room.getDDay(),
                room.getRoomTheme(),
                room.getViewCount(),
                room.getRoobitAmount(),
                room.getRestDay(),
                room.getWeather(),
                url,
                room.getPatchCount()
        );

        return roomResponseDto;
    }

    default ResponseRoomStatus roomToResponseRoomStatus(Room room) {

        ResponseRoomStatus responseRoomStatus = new ResponseRoomStatus(
                room.getRoomStatus()
        );

        return responseRoomStatus;
    }
}
