package com.board.board.room.entity;

import com.mainframe.mainframe.member.entity.Member;
import com.mainframe.mainframe.roobit.entity.Roobit;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
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

    @Column(length = 20, nullable = false)
    private String roomName;

    @Column
    private String password;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date dDay;

    @Column
    private long roomTheme;

    @Column
    private long roobitAmount;

    @Column
    private long viewCount;

    @Column
    private Object weather;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Roobit> roobits = new ArrayList<>();

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
