package seb15.roobits.member.entity;


import lombok.*;
import seb15.roobits.auditable.Auditable;
import seb15.roobits.room.entity.Room;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


//유효성 검증 필요
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(length = 15,nullable = false, updatable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, updatable = false)
    @Email(message = "올바른 이메일이 아닙니다.")
    @NotBlank(message = "이메일은 공백이 아니여야 합니다.")
    private String email;
    @Column
    private String roles;
    @Column
    private String provider;
    @Column
    private String providerId;

    @Column
    private String roomName;

    @Column
    private String roomPassword;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;


    public enum MemberStatus{

        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
        }




//    룸부분 결합후 작업
    @OneToMany(mappedBy = "member")
    private List<Room> rooms = new ArrayList<>();

    public void setRoom(Room room){
        rooms.add(room);
//        if(room.getRoom() != this){
//            room.setRoom(this);
//        }
    }


    public List<String> getRoleList(){
        if(this.roles != null){
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }
}
