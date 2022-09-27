package seb15.roobits.room.service;

import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;
import org.springframework.stereotype.Service;
import seb15.roobits.room.weather.CallWeather;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;


@Service
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public Room createRoom(Room room) {
        verifyExistRoom(room.getRoomName());        // 이미 있는 이름인지 검사
        room.setRestDay(Calculator.calculateRestDay(room)); // d-day 잔여일 계산
        dDayLimitation(room); // 잔여일 30일 이내인지 검사

        return roomRepository.save(room);
    }

    public Room updateRoom(Room room) {
        Room findRoom = findRoom(room.getRoomId());

        Optional.ofNullable(room.getRoomName())
                .ifPresent(roomName -> findRoom.setRoomName(roomName));
        Optional.ofNullable(room.getDDay())
                .ifPresent(dDay -> findRoom.setDDay(dDay));
        dDayLimitation(room);
        Optional.ofNullable(room.getRoomTheme())
                .ifPresent(roomTheme -> findRoom.setRoomTheme(roomTheme));
        Optional.ofNullable(room.getDDay())
                        .ifPresent(dDay -> findRoom.setRestDay(Calculator.calculateRestDay(room)));

        updatePatchCount(roomRepository.save(findRoom)); // 수정 횟수 카운터

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        updatedRoomStatus(findRoom); // 룸 상태 업데이터
        updateViewCount(findRoom); // 조회수 카운터
        CallWeather.getWeatherData(findRoom); // 날씨 API 불러오기

        return findRoom;
    }

    public void deleteRoom(long roomId) {
        Room room = findRoom(roomId);
//        room.setRoomStatus(Room.RoomStatus.ROOM_DELETED); // 삭제된 룸이라고 사용자에게 표시. 추후 DB에 남겨야 할 경우 필요.
        roomRepository.delete(room); // DB에서 실제로 삭제
    }

    private void verifyExistRoom(String roomName) {
        Optional<Room> rName = roomRepository.findByRoomName(roomName);

        if (rName.isPresent())
            throw new BusinessLogicException(ExceptionCode.ROOMNAME_ALREADY_EXISTS);
    }

    @Transactional
    private void updatePatchCount(Room room) {

        long patchCount = Calculator.calculatePatchCount(room.getPatchCount(), 1);
        if (patchCount > 2)
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ROOM); // 수정 2회 초과 시 수정할 수 없음
        room.setPatchCount(patchCount);
    }


    private void dDayLimitation(Room room) {
        long restDay = Calculator.calculateRestDay(room);

        if (restDay < 1 || restDay > 30) {
            throw new BusinessLogicException(ExceptionCode.DDAY_NOT_VALID); } // 1~30일 이내 날짜만 설정 가능
    }

    @Transactional
    private void updatedRoomStatus(Room room) {
        long restDay = Calculator.calculateRestDay(room);

        if (restDay == 0) {
            room.setRoomStatus(Room.RoomStatus.ROOM_OPENED);
        } else if (restDay < 0) {
            room.setRoomStatus(Room.RoomStatus.ROOM_CLOSED); // 24시간 지난 룸은 닫힌 룸이라고 표시. (DB에서 없어지지 않음)
        }
    }


    @Transactional
    private void updateViewCount(Room room) {
        long viewCount = Calculator.calculateViewCount(room.getViewCount(), 1);
        room.setViewCount(viewCount); // 조회수 카운트
    }

}


//- 이모지를 위해 인코딩 방식 변경해보기
