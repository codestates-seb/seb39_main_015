package seb15.roobits.room.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import seb15.roobits.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Room> findById(long boardId);

    Optional<Room> findByRoomName(String roomName);
}
