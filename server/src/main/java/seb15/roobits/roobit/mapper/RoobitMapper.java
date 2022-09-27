package seb15.roobits.roobit.mapper;

import org.mapstruct.ReportingPolicy;

import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.dto.RoobitResponseDto;
import seb15.roobits.roobit.entity.Roobit;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoobitMapper {
    Roobit roobitPostDtoToRoobit(RoobitPostDto roobitDtoPost);
    RoobitResponseDto roobitToRoobitResponseDto(Roobit roobit);
    List<RoobitResponseDto> roobitsToRoobitResponsesDtos(List<Roobit> roobits);
    RoobitIdResponseDto roobitToRoobitIdResponseDto(Roobit roobit);    // 0927(YU)
}
