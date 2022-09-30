package seb15.roobits.room.mapper;



import seb15.roobits.room.dto.*;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);

    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);

    RoomResponseDto roomToRoomResponseDto(Room room);

    ResponseRoomStatus roomToResponseRoomStatus(Room room);


    MyRoomResponseDto roomToMyRoomResponseDto(Room room);
}
