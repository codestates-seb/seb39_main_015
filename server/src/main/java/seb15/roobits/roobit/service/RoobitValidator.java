package seb15.roobits.roobit.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.room.entity.Room;
import seb15.roobits.room.repository.RoomRepository;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

@Service
public class RoobitValidator {
    private final RoobitRepository roobitRepository;
    private final RoomRepository roomRepository;

    public RoobitValidator(RoobitRepository roobitRepository,
                           RoomRepository roomRepository) {
        this.roobitRepository = roobitRepository;
        this.roomRepository = roomRepository;
    }

    @Transactional
    public void updateRoobitStatus(Roobit roobit) {
        Optional<Room> optionalRoom = roomRepository.findById(roobit.getRoom().getRoomId());
        Room findRoom = optionalRoom.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOM_NOT_FOUND));
        LocalDate currentDate = LocalDate.now();
        LocalDate dDay = findRoom.getDDay();
        Period period = Period.between(currentDate, dDay);
        long restDay = period.getMonths() * 30 + period.getDays();
        if (dDay == currentDate) {
            roobit.setRoobitStatus(Roobit.RoobitStatus.ROOBIT_OPEN);
        } else if (restDay < 0) {
            roobit.setRoobitStatus(Roobit.RoobitStatus.ROOBIT_CLOSED);
        }
    }
}

