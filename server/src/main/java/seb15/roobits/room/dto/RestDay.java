package seb15.roobits.room.dto;

import javax.validation.constraints.Max;
import java.util.Date;

@Max(30)
public @interface RestDay {
    long max();

    Date currentDate = new Date (System.currentTimeMillis());
    Date dDay = room.getDDay();
    long restDay = (dDay.getTime() - currentDate.getTime())/(1000*24*60*60) + 1;

        if (restDay > 30) {max() = null;}
    String message();
}
