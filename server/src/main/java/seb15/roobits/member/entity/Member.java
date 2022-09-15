package seb15.roobits.member.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import seb15.roobits.member.Auditable.Auditable;

import javax.persistence.*;
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
    @Column
    private String username;
    @Column
    private String password;

//    닉네임 삭제
//    @Column
//    private String nickname;
    @Column
    private String email;
    @Column
    private String roles;
    @Column
    private String provider;
    @Column
    private String providerId;

    public List<String> getRoleList(){
        if(this.roles != null){
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }
}
