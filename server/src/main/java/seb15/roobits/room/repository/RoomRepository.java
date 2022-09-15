package com.board.board.room.repository;

import com.board.board.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Room> findById(long boardId);

    Optional<Room> findByRoomName(String roomName);

    Optional<Room> findByUrlName(String urlName);
}
