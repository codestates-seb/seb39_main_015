package seb15.roobits.member.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import seb15.roobits.member.Auditable.Auditable;
import seb15.roobits.room.entity.Room;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
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

    @Column String roomPassword;


//    룸부분 결합후 작업
    @OneToMany(mappedBy = "Room")
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
