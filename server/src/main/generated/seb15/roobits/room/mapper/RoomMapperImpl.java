package seb15.roobits.room.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb15.roobits.room.dto.RoomPatchDto;
import seb15.roobits.room.dto.RoomPostDto;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-20T14:14:53+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class RoomMapperImpl implements RoomMapper {

    @Override
    public Room roomPostDtoToRoom(RoomPostDto roomPostDto) {
        if ( roomPostDto == null ) {
            return null;
        }

        Room room = new Room();

        room.setRoomName( roomPostDto.getRoomName() );
        room.setPassword( roomPostDto.getPassword() );
        room.setDDay( roomPostDto.getDDay() );
        room.setRoomTheme( roomPostDto.getRoomTheme() );
        room.setRoobitAmount( roomPostDto.getRoobitAmount() );

        return room;
    }

    @Override
    public Room roomPatchDtoToRoom(RoomPatchDto roomPatchDto) {
        if ( roomPatchDto == null ) {
            return null;
        }

        Room room = new Room();

        room.setRoomId( roomPatchDto.getRoomId() );
        room.setRoomName( roomPatchDto.getRoomName() );
        room.setDDay( roomPatchDto.getDDay() );
        room.setRoomTheme( roomPatchDto.getRoomTheme() );

        return room;
    }

    @Override
    public List<RoomResponseDto> roomsToRoomResponseDtos(List<Room> rooms) {
        if ( rooms == null ) {
            return null;
        }

        List<RoomResponseDto> list = new ArrayList<RoomResponseDto>( rooms.size() );
        for ( Room room : rooms ) {
            list.add( roomToRoomResponseDto( room ) );
        }

        return list;
    }
}
