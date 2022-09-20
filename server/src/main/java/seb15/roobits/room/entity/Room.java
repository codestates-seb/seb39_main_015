package seb15.roobits.room.entity;

import lombok.Getter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import lombok.Data;
import lombok.NoArgsConstructor;
import seb15.roobits.member.entity.Member;
import seb15.roobits.roobit.entity.Roobit;

import javax.persistence.Id;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roomId;

    @Column(unique = true)
//    @NotBlank(message = "룸 이름을 3~20자 이내로 적어야 합니다.")
//    @Range(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Column
    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @Column
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private String dDay;

    @Column
    @Enumerated(EnumType.STRING)
    public RoomTheme roomTheme = RoomTheme.THEME_BASIC;

    @Column
//    @Range(min= 1, max= 300)
    private long roobitAmount;

//    @Column(columnDefinition = "integer default 0", nullable = false)
//    private long viewCount;

    @Column
    private String weather;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long patchCount;


    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Roobit> roobits = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
    }

    public void addRoobit(Roobit roobit) {
        this.roobits.add(roobit);
//        if(roobit.getRoobit() != this) {
//            roobit.addRoobit(this);
//        }this
    }

    public enum RoomTheme {
            THEME_BASIC(1, "기본 테마");

            @Getter
            private int themeNumber;

            @Getter
            private String themeDescription;

            RoomTheme(int themeNumber, String themeDescription) {
                this.themeNumber = themeNumber;
                this.themeDescription = themeDescription;
            }
    }

}
