package seb15.roobits.mail.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MailDto {
    private String username;
    private String email;
    private String title;
    private String message;
}
