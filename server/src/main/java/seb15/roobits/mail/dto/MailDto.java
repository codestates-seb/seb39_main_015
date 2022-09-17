package seb15.roobits.mail.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class MailDto {
    private String address;
    private String title;
    private String message;
}
