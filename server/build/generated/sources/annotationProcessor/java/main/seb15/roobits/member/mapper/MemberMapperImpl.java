package seb15.roobits.member.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-20T12:45:04+0900",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member joinToMember(MemberDto.Join requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.username( requestBody.getUsername() );
        member.password( requestBody.getPassword() );
        member.email( requestBody.getEmail() );

        return member.build();
    }

    @Override
    public Member patchToMember(MemberDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.memberId( requestBody.getMemberId() );
        member.password( requestBody.getPassword() );

        return member.build();
    }

    @Override
    public Member findToMember(MemberDto.Find requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.email( requestBody.getEmail() );

        return member.build();
    }

    @Override
    public MemberDto.FindUsernameResponse memberToFindUsernameResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.FindUsernameResponse.FindUsernameResponseBuilder findUsernameResponse = MemberDto.FindUsernameResponse.builder();

        findUsernameResponse.username( member.getUsername() );

        return findUsernameResponse.build();
    }

    @Override
    public MemberDto.GetMyRoomResponse memberTogetMyRoomResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.GetMyRoomResponse.GetMyRoomResponseBuilder getMyRoomResponse = MemberDto.GetMyRoomResponse.builder();

        getMyRoomResponse.username( member.getUsername() );

        return getMyRoomResponse.build();
    }
}
