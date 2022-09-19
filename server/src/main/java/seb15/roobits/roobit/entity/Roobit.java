package seb15.roobits.roobit.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb15.roobits.roobit.audit.Auditable;
import seb15.roobits.room.entity.Room;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity (name = "ROOBITS")
@EntityListeners(AuditingEntityListener.class)
public class Roobit extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roobitId;

    @Column(length = 10, nullable = false)
    private String nickname;

    @Column(columnDefinition = "TEXT", length = 140, nullable = false)
    private String body;

    @Column(length = 20, nullable = true)
    private String email;

    @Column(length = 10, nullable = false)
    private String reception;

    @Column(length = 2, nullable = false)
    private String style;

    @Column(name = "createdAt") @CreatedDate
    private LocalDateTime createdAt;
    @PrePersist
    public void onPrePersist(){
        this.createdAt =  LocalDateTime.now();
    }

    @Enumerated(EnumType.STRING)
    private RoobitStatus roobitStatus = RoobitStatus.ROOBIT_HIDDEN;

    @ManyToOne
    @JoinColumn(name = "ROOM_ID")
    private Room room;

    public void setRoom(Room room) {
        this.room = room;
    }

    public enum RoobitStatus{

        ROOBIT_HIDDEN(1, "공개 전 루빗"),
        ROOBIT_OPEN(2, "공개 중인 루빗(디데이)"),
        ROOBIT_CLOSED(3, "공개 종료된 루빗(디데이 후)"),
        ROOBIT_DELETED(4, "삭제된 루빗");

        @Getter
        private int statusNumber;

        @Getter
        private String statusDescription;

        RoobitStatus(int statusNumber, String statusDescription){
            this.statusNumber = statusNumber;
            this.statusDescription = statusDescription;
        }
    }
}
