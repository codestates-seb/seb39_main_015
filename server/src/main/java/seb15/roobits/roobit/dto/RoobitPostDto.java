package seb15.roobits.roobit.dto;

import lombok.Getter;
import org.springframework.lang.Nullable;
import roobits.room.entity.Room;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class RoobitPostDto {

    @NotBlank(message = "닉네임을 입력해주세요.")
    private String nickname;

    @NotBlank(message = "루빗 내용을 입력해주세요.")
    private String body;

    @Nullable
    private String email;

    @NotBlank
    private String reception;

    @NotBlank
    private String style;

    @Positive
    private long roomId;

    public Room getRoom() {
        Room room = new Room();
        room.setRoomId(roomId);
        return room;
    }

//    public class roobitLength {
//        public void main(String[] args) {
//            JOptionPane jon = new JOptionPane(); //swing 패널
//            if(nickname.length()>10) { //닉네임 길이가 10이상일경우
//                jon.showMessageDialog(jon, "입력가능한 글자수(10)를 초과하였습니다.","오류",jon.ERROR_MESSAGE);
//            }
//            if(body.length()>140) { //닉네임 길이가 10이상일경우
//                jon.showMessageDialog(jon, "입력가능한 글자수(140)를 초과하였습니다.","오류",jon.ERROR_MESSAGE);
//            }
//        }
//    }
}
