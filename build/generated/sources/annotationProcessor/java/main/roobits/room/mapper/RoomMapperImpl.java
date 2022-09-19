package roobits.room.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import roobits.room.dto.RoomPostDto;
import roobits.room.dto.RoomResponseDto;
import roobits.room.entity.Room;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-19T10:41:40+0900",
    comments = "version: 1.5.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class RoomMapperImpl implements RoomMapper {

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

    @Override
    public Room roomPostDtoToRoom(RoomPostDto roomDtoPost) {
        if ( roomDtoPost == null ) {
            return null;
        }

        Room room = new Room();

        room.setMember( roomDtoPost.getMember() );
        room.setTitle( roomDtoPost.getTitle() );
        room.setContent( roomDtoPost.getContent() );

        return room;
    }

    @Override
    public RoomResponseDto roomToRoomResponseDto(Room room) {
        if ( room == null ) {
            return null;
        }

        RoomResponseDto roomResponseDto = new RoomResponseDto();

        roomResponseDto.setMember( room.getMember() );
        roomResponseDto.setRoomId( room.getRoomId() );
        roomResponseDto.setTitle( room.getTitle() );
        roomResponseDto.setContent( room.getContent() );
        roomResponseDto.setRoomStatus( room.getRoomStatus() );
        roomResponseDto.setCreatedAt( room.getCreatedAt() );

        return roomResponseDto;
    }
}
