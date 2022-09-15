package com.board.board.room.service;

import com.board.board.room.entity.Room;
import com.board.board.room.repository.RoomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) { this.roomRepository = roomRepository; }

    public Room createRoom(Room room) {
        String roomName = new String();

        // 이미 있는 이름인지 검사
        verifyExistRoom(roomName);
        room.setRoomName(roomName);

        return roomRepository.save(room);
    }

    public Room updateRoom(Room room) {
        Room findRoom = findRoom(room.getRoomId());

        Optional.ofNullable(room.getRoomName())
                .ifPresent(boardName -> findRoom.setRoomName(roomName));
        Optional.ofNullable(room.getDDay())
                .ifPresent(DDay -> findRoom.setDDay(dDay));
        Optional.ofNullable(room.getRoomTheme())
                .ifPresent(roomTheme -> findRoom.setRoomTheme(roomTheme));
        Optional.ofNullable(room.getRoomStatus())
                .ifPresent(roomStatus -> findRoom.setRoomStatus(roomStatus));

        return roomRepository.save(findRoom);
    }

    public Room findRoom(long roomId) {
        Optional<Room> optionalRoom = roomRepository.findById(roomId);
        Room findRoom = optionalRoom.orElseThrow(()  ->
        new BusinessLogicException(ExceptionCode.ROOMNAME_ALREADY_EXISTS)); // 여기도 예외코드 나중에 enum 정리해서..

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

    private void verifyExistRoom(String roomName, String urlName) {
        Optional<Room> rName = roomRepository.findByRoomName(roomName);
        Optional<Room> uName = roomRepository.findByUrlName(urlName);

        if(rName.isPresent())
            throw new BusinessLogicException(ExceptionCode.ROOMNAME_ALREADY_EXISTS); // 나중에 Enum으로 코드들 한번에 작성해야 함
        if(uName.isPresent())
            throw new BusinessLogicException(ExceptionCode.URLNAME_ALREADY_EXISTS);
    }

}
