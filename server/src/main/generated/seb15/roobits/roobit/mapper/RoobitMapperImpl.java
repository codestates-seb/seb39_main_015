package seb15.roobits.roobit.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.dto.RoobitResponseDto;
import seb15.roobits.roobit.entity.Roobit;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-19T14:40:42+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class RoobitMapperImpl implements RoobitMapper {

    @Override
    public Roobit roobitPostDtoToRoobit(RoobitPostDto roobitDtoPost) {
        if ( roobitDtoPost == null ) {
            return null;
        }

        Roobit roobit = new Roobit();

        roobit.setRoom( roobitDtoPost.getRoom() );
        roobit.setNickname( roobitDtoPost.getNickname() );
        roobit.setBody( roobitDtoPost.getBody() );
        roobit.setEmail( roobitDtoPost.getEmail() );
        roobit.setReception( roobitDtoPost.getReception() );
        roobit.setStyle( roobitDtoPost.getStyle() );

        return roobit;
    }

    @Override
    public RoobitResponseDto roobitToRoobitResponseDto(Roobit roobit) {
        if ( roobit == null ) {
            return null;
        }

        RoobitResponseDto roobitResponseDto = new RoobitResponseDto();

        roobitResponseDto.setRoobitId( roobit.getRoobitId() );
        roobitResponseDto.setNickname( roobit.getNickname() );
        roobitResponseDto.setBody( roobit.getBody() );
        roobitResponseDto.setEmail( roobit.getEmail() );
        roobitResponseDto.setReception( roobit.getReception() );
        roobitResponseDto.setStyle( roobit.getStyle() );
        roobitResponseDto.setCreatedAt( roobit.getCreatedAt() );
        roobitResponseDto.setRoobitStatus( roobit.getRoobitStatus() );

        return roobitResponseDto;
    }

    @Override
    public List<RoobitResponseDto> roobitsToRoobitResponsesDtos(List<Roobit> roobits) {
        if ( roobits == null ) {
            return null;
        }

        List<RoobitResponseDto> list = new ArrayList<RoobitResponseDto>( roobits.size() );
        for ( Roobit roobit : roobits ) {
            list.add( roobitToRoobitResponseDto( roobit ) );
        }

        return list;
    }
}
