package seb15.roobits.room.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import org.springframework.format.annotation.DateTimeFormat;
import seb15.roobits.member.entity.Member;
import seb15.roobits.roobit.entity.Roobit;

import javax.persistence.Id;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Getter
@Setter
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roomId;

    @Column(unique = true)
    @Length(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Column
    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Future(message = "오늘 후의 날짜여야 합니다.")
    private LocalDate dDay;

    @Column
    private long restDay;

    @Column
    @Enumerated(EnumType.STRING)
    public RoomTheme roomTheme = RoomTheme.THEME_BASIC;

    @Column
    @Range(min= 1, max= 300)
    private long roobitAmount;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    @Column
    private String weather;

    @Column
    private long patchCount;

    @Column
    @Enumerated(EnumType.STRING)
    private RoomStatus roomStatus = RoomStatus.ROOM_ONGOING;

    @Column
    private String url;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Roobit> roobits = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
    }

    public void setRoobit(Roobit roobit) {
        this.roobits.add(roobit);
//        if(roobit.getRoobit() != thi8s) {
//            roobit.addRoobit(this);9
//        }
    }


//    public Room(long roomId, String roomName, String password, LocalDate dDay) {
//        this.roomId = roomId;
//        this.roomName = roomName;
//        this.password = password;
//        this.dDay = dDay;
//    }

}
