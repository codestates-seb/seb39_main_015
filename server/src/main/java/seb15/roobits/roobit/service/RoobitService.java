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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static java.lang.Math.min;

@Service
@Transactional
public class RoobitService {
    private final RoomService roomService;
    private final RoobitRepository roobitRepository;
    private final RoobitValidator roobitValidator;
    public RoobitService(RoomService roomService,
                         RoobitRepository roobitRepository,
                         RoobitValidator roobitValidator) {
        this.roomService = roomService;
        this.roobitRepository = roobitRepository;
        this.roobitValidator = roobitValidator;
    }

    public Roobit createRoobit(Roobit roobit) {
        Roobit savedRoobit = roobitRepository.save(roobit);;
        return savedRoobit;
    }

    @Transactional(readOnly = true)
    public Roobit findRoobit(long roobitId){  //  1003 YU 루빗 딱 한개
        Optional<Roobit> optionalRoobit = roobitRepository.findById(roobitId);
        Roobit findRoobit = optionalRoobit.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ROOBIT_NOT_FOUND));
        roobitValidator.updateRoobitStatus(findRoobit);
        return findRoobit;
    }

    @Transactional(readOnly = true)
    public List<Roobit> findRoobitsByRoomId(long roomId) {  // roomId에 해당하는 모든 루빗
        int page = 1;
        int size = 300;
        Page<Roobit> pageRoobits = findRoobits(page - 1, 300);
        List<Roobit> roobits = pageRoobits.getContent();
        List<Roobit> roobitsById = new ArrayList<>();

        for (int i = 0; i < roobits.size(); i++) {
            roobits.get(i);
            long roomNum;
            roomNum = roobits.get(i).getRoom().getRoomId();
            if (roomNum == roomId) {
                // System.out.println(roobits.get(i));
                roobitsById.add(roobits.get(i));
            }
        }
        return roobitsById;
    }

    @Transactional(readOnly = true) // 읽기 전용으로 조회하면 메모리를 절약 가능
    public List<List<Roobit>> findRoobitsFloorByRoomId(long roomId) {  // 조회 - roomId에 해당하는 모든 루빗
        List<Roobit> roobitsById = findRoobitsByRoomId(roomId);
        int limit = 10;
        List<List<Roobit>> roobitsFloor = new ArrayList<>();
        for(int j = 0; j < roobitsById.size(); j += limit){
            List<Roobit> floor =  new ArrayList<>(roobitsById.subList(j, min(j + limit, roobitsById.size())));
            roobitsFloor.add(floor) ;
        }
        return roobitsFloor;
    }

    public Page<Roobit> findRoobits(int page, int size) {  // 룸 id 상관없이 모든 루빗 다 가져올 때
        return roobitRepository.findAll(PageRequest.of(page, size,
                Sort.by("roobitId").descending()));
    }

    public void deleteRoobit(long roobitId) {
        Roobit findRoobit = findRoobit(roobitId);
        int step = findRoobit.getRoobitStatus().getStatusNumber();
        findRoobit.setRoobitStatus(Roobit.RoobitStatus.ROOBIT_DELETED);
        roobitRepository.save(findRoobit);
    }

}