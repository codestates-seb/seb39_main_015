package seb15.roobits.room.service;

import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.dto.RoomResponseDto;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

import static seb15.roobits.room.entity.Room.RoomStatus.ROOM_DELETED;

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

        return roomRepository.save(room);
    }

    public Room updateRoom(Room room) {
        Room findRoom = findRoom(room.getRoomId());

        Optional.ofNullable(room.getRoomName())
                .ifPresent(roomName -> findRoom.setRoomName(roomName));
        Optional.ofNullable(room.getDDay())
                .ifPresent(dDay -> findRoom.setDDay(dDay));
        Optional.ofNullable(room.getRoomTheme())
                .ifPresent(roomTheme -> findRoom.setRoomTheme(roomTheme));

        updatePatchCount(roomRepository.save(findRoom));

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        updatedRoomStatus(findRoom);

        return findRoom;
    }

    private void updatedRoomStatus(Room room) {
        LocalDate currentDate = LocalDate.now();
        LocalDate dDay = room.getDDay();
        Period period = Period.between(currentDate, dDay);
        long restDay = period.getMonths() * 30 + period.getDays();
        if (restDay < 0) {
            room.setRoomStatus(Room.RoomStatus.ROOM_DELETED); // 24시간 지난 룸은 삭제된 룸이라고 DB에 표시

            throw new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND);
            // 룸을 찾을 수 없다는 에러코드
        }
    }

    public Page<Room> findRooms(int page, int size) {
        return roomRepository.findAll(PageRequest.of(page, size,
                Sort.by("roomId").descending()));
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

    private void updatePatchCount(Room room) {

        long patchCount = Calculator.calculatePatchCount(room.getPatchCount(), 1);
        if (patchCount > 2)
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ROOM); // 수정 2회 초과 시 수정할 수 없음
        room.setPatchCount(patchCount);
    }

}
