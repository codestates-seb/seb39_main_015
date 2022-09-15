package com.board.board.room.mapper;

import com.board.board.room.dto.RoomPatchDto;
import com.board.board.room.dto.RoomPostDto;
import com.board.board.room.dto.RoomPutDto;
import com.board.board.room.dto.RoomResponseDto;
import com.board.board.room.entity.Room;
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
        String restDayCal = String.valueOf((dDay.getTime() - currentDate.getTime())/(1000*24*60*60) + 1);
        String restDay = restDayCal + " - Day";
        if (restDayCal == "0") {
            restDayCal = "D";
        }

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomId(),
                room.getRoomName(),
                room.getRoomTheme(),
                room.getWeather(),
                room.getViewCount(),
                restDay
        );

        return roomResponseDto;
    }
    List<RoomResponseDto> roomsToRoomResponseDtos(List<Room> rooms);
}
