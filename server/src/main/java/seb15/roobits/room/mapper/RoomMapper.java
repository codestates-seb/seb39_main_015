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
}
