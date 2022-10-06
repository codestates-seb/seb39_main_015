package seb15.roobits.room.service;

import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;
import org.springframework.stereotype.Service;
import seb15.roobits.room.weather.CallWeather;

import java.util.Optional;

import static seb15.roobits.room.weather.CallWeather.getWeatherData;


@Service
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;
    private final CallWeather callWeather;
    private final Validator validator;

    public RoomService(RoomRepository roomRepository, CallWeather callWeather, Validator validator) {
        this.roomRepository = roomRepository;
        this.callWeather = callWeather;
        this.validator = validator;
    }

    public Room createRoom(Room room) {
        validator.verifyExistRoom(room.getRoomName());        // 이미 있는 이름인지 검사
        room.setRestDay(Validator.calculateRestDay(room)); // d-day 잔여일 계산
        validator.dDayLimitation(room); // 잔여일 30일 이내인지 검사
        roomRepository.save(room);
        validator.createUrl(room); // url String 생성(사용자에게 보여주기 위함)

        return roomRepository.save(room);
    }

    public Room updateRoom(Room room) {
        Room findRoom = findRoom(room.getRoomId());

        Optional.ofNullable(room.getRoomName())
                .ifPresent(roomName -> findRoom.setRoomName(roomName));
        Optional.ofNullable(room.getDDay())
                .ifPresent(dDay -> findRoom.setDDay(dDay));
        validator.dDayLimitation(room);
        Optional.ofNullable(room.getRoomTheme())
                .ifPresent(roomTheme -> findRoom.setRoomTheme(roomTheme));
        Optional.ofNullable(room.getDDay())
                .ifPresent(dDay -> findRoom.setRestDay(Validator.calculateRestDay(room)));

        validator.updatePatchCount(roomRepository.save(findRoom)); // 수정 횟수 카운터

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));
        Optional.ofNullable(findRoom.getDDay())
                .ifPresent(dDay -> findRoom.setRestDay(Validator.calculateRestDay(findRoom)));

        validator.updatedRoomStatus(findRoom); // 룸 상태 업데이터
        validator.updateViewCount(findRoom); // 조회수 카운터
        getWeatherData(findRoom); // 날씨 API 불러오기

        return findRoom;
    }

    public void deleteRoom(long roomId) {
        Room room = findRoom(roomId);
//        room.setRoomStatus(Room.RoomStatus.ROOM_DELETED); // 삭제된 룸이라고 사용자에게 표시. 추후 DB에 남겨야 할 경우 필요.
        roomRepository.delete(room); // DB에서 실제로 삭제
    }

}


//- 이모지를 위해 인코딩 방식 변경해보기