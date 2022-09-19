package seb15.roobits.room.repository;

import org.springframework.data.jpa.repository.Query;
import seb15.roobits.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

    Optional<Room> findById(long roomId);

    @Query("SELECT * FROM ROOM WHERE ROOM_NAME = :roomName")
    Optional<Room> findByRoomName(String roomName);
}
