package seb15.roobits.room.entity;

import lombok.Builder;
import net.bytebuddy.implementation.bind.annotation.Default;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.springframework.boot.context.properties.bind.DefaultValue;
import seb15.roobits.member.entity.Member;
import seb15.roobits.roobit.entity.Roobit;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import seb15.roobits.room.dto.RestDay;

import javax.persistence.*;
import javax.persistence.OneToMany;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
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

    @Column
    @NotBlank(message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    @Range(min= 3, max= 20, message = "룸 이름을 3~20자 이내로 적어야 합니다.")
    private String roomName;

    @Column
    @Length(min= 6, max=20, message = "패스워드는 6~20자 이내여야 합니다.")
    private String password;

    @Column
    @NotBlank
    @Future(message = "오늘 후의 날짜여야 합니다.")
    @RestDay(max= 30, message= "30일 이내의 날짜만 선택 가능합니다.")
    private Date dDay;

    @Column
    @NotBlank(message = "룸 테마를 선택해야 합니다.")
    private long roomTheme;

    @Column
    @Range(min= 1, max= 300)
    private long roobitAmount;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    @Column
    private Object weather;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long patchCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Roobit> roobits = new ArrayList<>();

    public void addRoobit(Roobit roobit) {
        this.roobits.add(roobit);
        if(roobit.getRoobit() != this) {
            roobit.addRoobit(this);
        }
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
