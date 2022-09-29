package seb15.roobits.event;

import lombok.Getter;
import seb15.roobits.member.entity.Member;

@Getter
public class MemberRegistrationApplicationEvent {
    private Member member;
    public MemberRegistrationApplicationEvent(Member member) {
        this.member = member;
    }
}