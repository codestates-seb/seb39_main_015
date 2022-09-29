package seb15.roobits.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.member.dto.MemberDto;
import seb15.roobits.member.entity.Member;
import seb15.roobits.member.mapper.MemberMapper;
import seb15.roobits.member.service.MemberService;
import seb15.roobits.room.repository.RoomRepository;
import seb15.roobits.security.auth.MemberDetailsService;

import javax.net.ssl.HttpsURLConnection;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

    private final MemberDetailsService memberDetailsService;

    private final RoomRepository roomRepository;



    @PostMapping("/join")  //회원가입
    public ResponseEntity joinMember(@RequestBody @Valid MemberDto.Join memberJoinDto){
        Member member = memberMapper.joinToMember(memberJoinDto);
//        Member createdMember =
        memberService.createMember(member);
//        MemberDto.Response response = memberMapper.memberToResponse(createdMember);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/patch") //회원정보 수정
    public ResponseEntity patchMember(@AuthenticationPrincipal Member auth,
                                      @RequestBody @Valid MemberDto.Patch memberPatchDto){

        if(auth == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);// exception으로 날려줘야함.
        }
        memberPatchDto.setUsername(auth.getUsername());
        Member member = memberMapper.patchToMember(memberPatchDto);
//        Member editMember =
        memberService.updateMember(member);
//        MemberDto.Response response = memberMapper.memberToResponse(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete") //회원탈퇴
    public ResponseEntity deleteMember(@AuthenticationPrincipal Member auth){

        if(auth == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND); // exception으로 날려줘야함.
        }
        Member member = memberService.findMember(auth.getUsername());
        System.out.println(auth.getMemberId());
        memberService.deleteMember(member.getUsername());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/myroom")
    public ResponseEntity getMyRoom(@AuthenticationPrincipal Member auth){
        if(auth == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        System.out.println(auth.getUsername());
        Member getMemberRoom =
                memberService.findMember(auth.getUsername());
        MemberDto.GetMyRoomResponse response = memberMapper.memberTogetMyRoomResponse(getMemberRoom);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    //findall을 통해서 진행한다.?


    @PostMapping("/finduser")
    public ResponseEntity findUsername(@AuthenticationPrincipal Member auth,
                                       @RequestBody MemberDto.Find memberFindDto){
        if(auth.getProvider() == "google"){
            Member member = memberMapper.findToMember(memberFindDto);
            Member findUsername = memberService.findUserId(member);
            MemberDto.FindUsernameResponse response = memberMapper.memberToFindUsernameResponse(findUsername);
            response.setUsername("일치하는 회원정보가 없습니다");
            return new ResponseEntity(response,HttpStatus.NOT_FOUND);
        }
        Member member = memberMapper.findToMember(memberFindDto);
        Member findUsername = memberService.findUserId(member);
        MemberDto.FindUsernameResponse response = memberMapper.memberToFindUsernameResponse(findUsername);
        return new ResponseEntity(response,HttpStatus.OK);
    }

    //유저네임 중복체크
    @PostMapping("/usernamecheck")
    public ResponseEntity checkUsername(@RequestBody MemberDto.CheckUsername checkUsernameDto){
        Member username = memberMapper.checkUsernameToMember(checkUsernameDto);
        Boolean checkedUsername = memberService.checkUsername(username.getUsername());
        MemberDto.CheckUsernameResponse response = memberMapper.memberToCheckUsernameResponse(username);
        if(checkedUsername == true){response.setCheck(true);
        } else {response.setCheck(false);}
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping("/useremailcheck")
    public ResponseEntity checkUserEmail(@RequestBody MemberDto.CheckEmail checkUserEmailDto){
        Member memberEmail = memberMapper.checkUserEmailToMember(checkUserEmailDto);
        Boolean checkedUserEmail = memberService.checkUserEmail(memberEmail.getEmail());
        MemberDto.CheckEmailResponse response = memberMapper.memberToCheckEmailResponse(memberEmail);
        if(checkedUserEmail == true){response.setCheck(true);
        } else {response.setCheck(false);}
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping("/checkpw")
    public ResponseEntity checkPassword(@AuthenticationPrincipal Member auth,
                                        @RequestBody MemberDto.CheckPassword checkPasswordDto){
        Member originMember = memberService.findMember(auth.getUsername());
        Member checkPasswordMember = memberMapper.checkPasswordToMember(checkPasswordDto);
        Boolean checkedPassword = memberService.checkPassword(originMember.getUsername(),checkPasswordMember.getPassword());
        MemberDto.CheckPasswordResponse response = memberMapper.memberToCheckPasswordResponse(checkPasswordMember);
        if(checkedPassword == true){response.setCheck(true);
        } else {response.setCheck(false);}
        return new ResponseEntity<>(response,HttpStatus.OK);
    }


    //프론트쪽 Auth확인
    @GetMapping("/auth")
    public ResponseEntity checkAuth(@AuthenticationPrincipal Member auth){
        Member checkAuth = memberService.findMember(auth.getUsername());
        if (checkAuth == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);}
        checkAuth.setProvider(auth.getProvider());
        MemberDto.CheckAuthResponse response = memberMapper.memberToCheckAuthResponse(checkAuth);
        return new ResponseEntity<>(response, HttpStatus.OK);
        }


    @GetMapping("/rooms")
    public ResponseEntity host(@AuthenticationPrincipal Member auth) {
        if (auth == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);}
        Member getMemberRoom = memberService.findMember(auth.getUsername());
        String response = "room";
        return new ResponseEntity(response,HttpStatus.OK);
    }


    //    api 통신테스트를 위한 컨트롤러 메서드 생성
    @GetMapping("/home")
    public String home() {
        return "<h1>home</h1>";
    }
}
