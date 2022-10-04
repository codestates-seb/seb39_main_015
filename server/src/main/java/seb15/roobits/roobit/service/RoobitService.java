package seb15.roobits.roobit.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.room.service.RoomService;

import java.util.Optional;

@Service
@Transactional
public class RoobitService {
    private final RoomService roomService;
    private final RoobitRepository roobitRepository;

    public RoobitService(RoomService roomService,
                         RoobitRepository roobitRepository) {
        this.roomService = roomService;
        this.roobitRepository = roobitRepository;
    }

    public Roobit createRoobit(Roobit roobit) {
        verifyRoobit(roobit);
        Roobit savedRoobit = saveRoobit(roobit);
        return savedRoobit;
    }

    @Transactional(readOnly = true)
    public Roobit findRoobit(long roobitId) {
        return findVerifiedRoobit(roobitId);
    }

    public Page<Roobit> findRoobits(int page, int size) {
        return roobitRepository.findAll(PageRequest.of(page, size,
                Sort.by("roobitId").descending()));
    }

    public void deleteRoobit(long roobitId) {
        Roobit findRoobit = findVerifiedRoobit(roobitId);
        int step = findRoobit.getRoobitStatus().getStatusNumber();    // 소프트 딜리트
        findRoobit.setRoobitStatus(Roobit.RoobitStatus.ROOBIT_DELETED);
        roobitRepository.save(findRoobit);
    }

//    public void deleteRoobit(long roobitId) {   // 하드 딜리트
//        roobitRepository.deleteById(roobitId);
//    }


    public Roobit findVerifiedRoobit(long roobitId) {
        Optional<Roobit> optionalRoobit = roobitRepository.findById(roobitId);
        Roobit findRoobit =
                optionalRoobit.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ROOBIT_NOT_FOUND));
        return findRoobit;
    }

    private void verifyRoobit(Roobit roobit) {
        roomService.findRoom(roobit.getRoom().getRoomId());
    }   //내가 쓰던 findVerifiedRoom에서 findRoom으로 변경했음 (0929 YU)

    private Roobit saveRoobit(Roobit roobit) {
        return roobitRepository.save(roobit);
    }

}


