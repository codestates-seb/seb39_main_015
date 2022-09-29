package seb15.roobits.room.mapper;


import lombok.NoArgsConstructor;
import seb15.roobits.room.dto.*;
import seb15.roobits.room.entity.Room;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface RoomMapper {
    Room roomPostDtoToRoom(RoomPostDto roomPostDto);

    Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto);

    RoomResponseDto roomToRoomResponseDto(Room room);

    ResponseRoomStatus roomToResponseRoomStatus(Room room);

    MyRoomResponseDto roomToMyRoomResponseDto(Room room);
}
