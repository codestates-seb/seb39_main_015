package roobits.roobit.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import roobits.roobit.dto.RoobitPostDto;
import roobits.roobit.dto.RoobitResponseDto;
import roobits.roobit.entity.Roobit;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-13T13:27:18+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class RoobitMapperImpl implements RoobitMapper {

    @Override
    public Roobit roobitPostDtoToRoobit(RoobitPostDto roobitDtoPost) {
        if ( roobitDtoPost == null ) {
            return null;
        }

        Roobit roobit = new Roobit();

        roobit.setNickname( roobitDtoPost.getNickname() );
        roobit.setBody( roobitDtoPost.getBody() );

        return roobit;
    }

    @Override
    public RoobitResponseDto roobitToRoobitResponseDto(Roobit roobit) {
        if ( roobit == null ) {
            return null;
        }

        RoobitResponseDto.RoobitResponseDtoBuilder roobitResponseDto = RoobitResponseDto.builder();

        roobitResponseDto.roobitId( roobit.getRoobitId() );
        roobitResponseDto.nickname( roobit.getNickname() );
        roobitResponseDto.body( roobit.getBody() );
        roobitResponseDto.createdAt( roobit.getCreatedAt() );
        roobitResponseDto.roobitStatus( roobit.getRoobitStatus() );

        return roobitResponseDto.build();
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
