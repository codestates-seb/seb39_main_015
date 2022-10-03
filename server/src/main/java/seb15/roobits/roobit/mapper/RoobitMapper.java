package seb15.roobits.roobit.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import seb15.roobits.roobit.dto.RoobitIdResponseDto;
import seb15.roobits.roobit.dto.RoobitNullResponseDto;
import seb15.roobits.roobit.dto.RoobitPostDto;
import seb15.roobits.roobit.dto.RoobitResponseDto;
import seb15.roobits.roobit.entity.Roobit;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoobitMapper {
    Roobit roobitPostDtoToRoobit(RoobitPostDto roobitDtoPost);
    RoobitResponseDto roobitToRoobitResponseDto(Roobit roobit);  // body까지 전체 리턴
    RoobitNullResponseDto roobitToRoobitNullResponseDto(Roobit roobit); // body Null로 리턴
    RoobitIdResponseDto roobitToRoobitIdResponseDto(Roobit roobit);   // ID만 리턴

    List<RoobitResponseDto> roobitsToRoobitResponsesDtos(List<Roobit> roobits);  // body까지 전체 리턴을 리스트로
    List<RoobitNullResponseDto> roobitsToRoobitNullResponsesDtos(List<Roobit> roobits);  // body Null로 리턴하는 루빗들을 리스트로


}
