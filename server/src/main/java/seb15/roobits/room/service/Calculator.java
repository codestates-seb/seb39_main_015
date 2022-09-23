package seb15.roobits.room.service;

import org.hibernate.validator.constraints.Range;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;

import java.time.LocalDate;
import java.time.Period;


public class Calculator {

    public static long calculatePatchCount(long patched, long count) {
        return patched + count;
    }

    public static long calculateViewCount(long viewed, long viewCount) {
        return viewed + viewCount;
    }

    protected static long calculateRestDay(Room room) {
        LocalDate currentDate = LocalDate.now();
        LocalDate dDay = room.getDDay();
        Period period = Period.between(currentDate, dDay);
        long restDay = period.getMonths() * 30 + period.getDays();

        return restDay;
    }
}
