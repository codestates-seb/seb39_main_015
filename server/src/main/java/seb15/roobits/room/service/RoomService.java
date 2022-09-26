package seb15.roobits.room.service;

import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;
import org.springframework.stereotype.Service;

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
        // 이미 있는 이름인지 검사
        verifyExistRoom(room.getRoomName());
        room.setRestDay(Calculator.calculateRestDay(room));
        dDayLimitation(room);

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

        updatePatchCount(roomRepository.save(findRoom));

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        updatedRoomStatus(findRoom);
        updateViewCount(findRoom);

        return findRoom;
    }

    public void deleteRoom(long roomId) {
        Room room = findRoom(roomId);
        roomRepository.delete(room);
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

    private void updatedRoomStatus(Room room) {
        long restDay = Calculator.calculateRestDay(room);

        if (restDay < 0) {
            room.setRoomStatus(Room.RoomStatus.ROOM_DELETED); // 24시간 지난 룸은 삭제된 룸이라고 DB에 표시
            throw new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND);
            // 룸을 찾을 수 없다는 에러
            // 치즈, 바나나, 파, 배추, 요거트, 팽이버섯, 순두부, 통오리, 부추, 꽃게, 논우렁살
        }
    }

    @Transactional
    private void updateViewCount(Room room) {
        long viewCount = Calculator.calculateViewCount(room.getViewCount(), 1);
        room.setViewCount(viewCount); // 조회수 카운트
    }

    // weather id를 CallWeather 클래스에서 받아서
    // 서비스단에서 String으로 변환해서 Room entity에 setWeather로 넣는다.
    // weather id 가 200, 300, 500번대면 rain
    // 600번대면 snow 700
    // 80x번대면 clouds
    // 800이면 clear


}
