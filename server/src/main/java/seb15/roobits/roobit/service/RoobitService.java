package seb15.roobits.roobit.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb15.roobits.exception.BusinessLogicException;
import seb15.roobits.exception.ExceptionCode;
import seb15.roobits.roobit.dto.RoobitResponseDto;
import seb15.roobits.roobit.dto.RoobitsListResponseDto;
import seb15.roobits.roobit.entity.Roobit;
import seb15.roobits.roobit.repository.RoobitRepository;
import seb15.roobits.room.service.RoomService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class RoobitService {
    private final RoomService roomService;
    private final RoobitRepository roobitRepository;

    public RoobitService(RoomService roomService,
                         RoobitRepository roobitRepository) {
        this.roomService = roomService;
        this.roobitRepository = roobitRepository;
    }

    public Roobit createRoobit(Roobit roobit) {
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

    public void deleteRoobit(long roobitId) {  // 0927(YU)
        Roobit findRoobit = findVerifiedRoobit(roobitId);
        int step = findRoobit.getRoobitStatus().getStatusNumber();    // 소프트 딜리트
        findRoobit.setRoobitStatus(Roobit.RoobitStatus.ROOBIT_DELETED);
        roobitRepository.save(findRoobit);
    }

//    public void deleteRoobit(long roobitId) {   // 하드 딜리트 0927(YU)
//        roobitRepository.deleteById(roobitId);
//    }


    public Roobit findVerifiedRoobit(long roobitId) {
        Optional<Roobit> optionalRoobit = roobitRepository.findById(roobitId);
        Roobit findRoobit =
                optionalRoobit.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ROOBIT_NOT_FOUND));
        return findRoobit;
    }

    private Roobit saveRoobit(Roobit roobit) {
        return roobitRepository.save(roobit);
    }

    @Transactional(readOnly = true)      // 전체 글 조회 추가
    public List<RoobitResponseDto> findAllDesc(){
        return roobitRepository.findAllDesc().stream()
                .map(RoobitsListResponseDto::new)
                .collect(Collectors.toList());
    }


}
