package seb15.roobits.roobit.dto;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import roobits.roobit.entity.Roobit;

import java.time.LocalDateTime;

@Getter
public class RoobitsListResponseDto {

    private long roobitId;

    private String nickname;
    private String body;
    private String email;
    private String reception;
    private String style;

    @CreatedDate
    private LocalDateTime createdAt;
    private Roobit.RoobitStatus roobitStatus;

    public RoobitsListResponseDto(Roobit entity){
        this.roobitId = entity.getRoobitId();
        this.nickname = entity.getNickname();
        this.body = entity.getBody();
        this.email = entity.getEmail();
        this.reception = entity.getReception();
        this.style = entity.getStyle();
        this.reception = entity.getReception();
        this.createdAt = entity.getCreatedAt();
        this.roobitStatus = entity.getRoobitStatus();
    }

}






