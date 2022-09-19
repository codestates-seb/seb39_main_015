package roobits.roobit.mapper;

import org.mapstruct.ReportingPolicy;

import roobits.roobit.dto.RoobitPostDto;
import roobits.roobit.dto.RoobitResponseDto;
import roobits.roobit.entity.Roobit;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoobitMapper {
    Roobit roobitPostDtoToRoobit(RoobitPostDto roobitDtoPost);
    RoobitResponseDto roobitToRoobitResponseDto(Roobit roobit);
    List<RoobitResponseDto> roobitsToRoobitResponsesDtos(List<Roobit> roobits);
}
