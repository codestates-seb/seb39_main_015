package seb15.roobits.room.service;

import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) { this.roomRepository = roomRepository; }

    public Room createRoom(Room room) {
        // 이미 있는 이름인지 검사
        verifyExistRoom(room.getRoomName());
        Room savedRoom =  roomRepository.save(room);

        return savedRoom;
    }

    public Room updateRoom(Room room) {
        Room findRoom = findRoom(room.getRoomId());
        if (room.getPatchCount() == 2)
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ROOM); // 수정 2회 초과 시 수정할 수 없음

        Optional.ofNullable(room.getRoomName())
                .ifPresent(roomName -> findRoom.setRoomName(roomName));
        Optional.ofNullable(room.getDDay())
                .ifPresent(dDay -> findRoom.setDDay(dDay));
        Optional.ofNullable(room.getRoomTheme())
                .ifPresent(roomTheme -> findRoom.setRoomTheme(roomTheme));

        Optional.of(room.getPatchCount())
                .ifPresent(patchCount -> findRoom.setPatchCount(patchCount + 1));  // 수정 횟수 카운트

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(()  ->
        new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));

        return findRoom;
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

        if(rName.isPresent())
            throw new BusinessLogicException(ExceptionCode.ROOMNAME_ALREADY_EXISTS);
    }

}
