package seb15.roobits.roobit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seb15.roobits.roobit.entity.Roobit;

@Repository
public interface RoobitRepository extends JpaRepository<Roobit, Long> {

//    public static Page<Roobit> findByRoomId(long roomId, PageRequest roobitId){
//        return null;
//    }
//
//    public Roobit findRoobitByRoomId(long roomId);

//    @EntityGraph(attributePaths = {"roobits"})
//    List<Roobits> findAll();

//    @Query(value = "SELECT c FROM Roobit c WHERE c.roomId = :roomId")
//    Page<Roobit> findByRoomId(long roomId);

//    static Page<Roobit> findByRoomId(long roomId, Pageable pageable) {
//        return null;
//    }


    // 0929 Create @Query Find Instance Method 찾아보기 (JPA pallete)
    // 위 repository 작성법 찾아보기

}
