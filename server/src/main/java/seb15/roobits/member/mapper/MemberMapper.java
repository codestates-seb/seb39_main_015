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

    Member findToMember(MemberDto.Find requestBody);

    Member checkUsernameToMember(MemberDto.CheckUsername requestBody);

    MemberDto.CheckUsernameResponse memberToCheckUsernameResponse(Member member);

    MemberDto.FindUsernameResponse memberToFindUsernameResponse(Member member);

    MemberDto.GetMyRoomResponse memberTogetMyRoomResponse(Member member);

    MemberDto.CheckAuthResponse memberToCheckAuthResponse(Member member);
}
