package seb15.roobits.room.mapper;


import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;

import java.time.LocalDate;
import java.time.Period;


@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);
    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);
//    default Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto) {
//        Room room = new Room();
//        int patchCount = room.getPatchCount() + 1;
//
//        room = new Room(
//                roomPatchDto.getRoomId(),
//                roomPatchDto.getRoomName(),
//                roomPatchDto.getPassword(),
//                roomPatchDto.getDDay(),
//                patchCount
//        );
//
//        return room;
//    }
    default RoomResponseDto roomToRoomResponseDto(Room room) {
        LocalDate currentDate = LocalDate.now();
        LocalDate dDay = room.getDDay();
        Period period = Period.between(currentDate, dDay);
        long restDay = period.getMonths()*30 + period.getDays();

        String url = "http://localhost:8080/rooms/" + room.getRoomId();

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomId(),
                room.getRoomName(),
                room.getDDay(),
                room.getRoomTheme(),
//                room.getWeather(),
//                room.getViewCount(),
                room.getRoobitAmount(),
                restDay,
                url,
                room.getPatchCount()
        );

        return roomResponseDto;
    }
}
