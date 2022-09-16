package seb15.roobits.member.mapper;

import org.mapstruct.Mapper;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;

import javax.persistence.ManyToOne;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member joinToMember(MemberDto.Join requestBody);

//    Member loginToMember(MemberDto.Login requestBody);

    Member patchToMember(MemberDto.Patch requestBody);

    MemberDto.GetMyRoomResponse memberTogetMyRoomResponse(Member member);
}
