package seb15.roobits.room.service;

import lombok.Data;
import lombok.Getter;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.entity.RoomStatus;
import seb15.roobits.room.repository.RoomRepository;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

@Service
public class Validator {
    private final RoomRepository roomRepository;
    public Validator(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public void createUrl(Room room) {
        String url = "http://localhost:3000/rooms/" + room.getRoomId();
        room.setUrl(url);
    }

        public void verifyExistRoom(String roomName) {
        Optional<Room> rName = roomRepository.findByRoomName(roomName);

        if (rName.isPresent())
            throw new BusinessLogicException(ExceptionCode.ROOMNAME_ALREADY_EXISTS);
    }

    @Transactional
    public void updatePatchCount(Room room) {

        long patchCount = calculatePatchCount(room.getPatchCount(), 1);
        if (patchCount > 2)
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ROOM); // 수정 2회 초과 시 수정할 수 없음
        room.setPatchCount(patchCount);
    }


    public void dDayLimitation(Room room) {
        long restDay = calculateRestDay(room);

        if (restDay < 1 || restDay > 30) {
            throw new BusinessLogicException(ExceptionCode.DDAY_NOT_VALID); } // 1~30일 이내 날짜만 설정 가능
    }

    @Transactional
    public void updatedRoomStatus(Room room) {
        long restDay = calculateRestDay(room);

        if (restDay == 0) {
            room.setRoomStatus(RoomStatus.ROOM_OPENED);
        } else if (restDay < 0) {
            room.setRoomStatus(RoomStatus.ROOM_CLOSED); // 24시간 지난 룸은 닫힌 룸이라고 표시. (DB에서 없어지지 않음)
        }
    }

    @Transactional
    public void updateViewCount(Room room) {
        long viewCount = calculateViewCount(room.getViewCount(), 1);
        room.setViewCount(viewCount); // 조회수 카운트
        //중복아이피 회피 기능 추가
    }

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
