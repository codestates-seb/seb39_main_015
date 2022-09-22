package seb15.roobits.room.mapper;


import lombok.Getter;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;

import java.time.Duration;
import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;


@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);

    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);

    default RoomResponseDto roomToRoomResponseDto(Room room) {
        LocalDate currentDate = LocalDate.now();
        LocalDate dDay = room.getDDay();
        Period period = Period.between(currentDate, dDay);
        long restDay = period.getMonths() * 30 + period.getDays();
//        if (restDay > 30) {new BusinessLogicException()}


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
