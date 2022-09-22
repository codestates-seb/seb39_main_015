package seb15.roobits.room.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import lombok.Data;
import lombok.NoArgsConstructor;
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
//    @Future(message = "오늘 후의 날짜여야 합니다.")
//    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private LocalDate dDay;

    @Column
    @Enumerated(EnumType.STRING)
    public RoomTheme roomTheme = RoomTheme.THEME_BASIC;

    @Column
    private long roobitAmount;

//    @Column(columnDefinition = "integer default 0", nullable = false)
//    private long viewCount;

//    @Column
//    private String weather;

    @Column
    private long patchCount;

    @Column
    @Enumerated(EnumType.STRING)
    private RoomStatus roomStatus = RoomStatus.ROOM_ONGOING;

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
//        }
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

    public enum RoomStatus {
        ROOM_ONGOING(1, "룸 진행"),
        ROOM_OPENED(2, "룸 열림"),
        ROOM_DELETED(3, "룸 삭제");

        @Getter
        private int statusNumber;

        @Getter
        private String statusDescription;

        RoomStatus(int statusNumber, String statusDescription) {
            this.statusNumber = statusNumber;
            this.statusDescription = statusDescription;
        }
    }

    public Room(long roomId, String roomName, String password, LocalDate dDay) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.password = password;
        this.dDay = dDay;
    }
}
