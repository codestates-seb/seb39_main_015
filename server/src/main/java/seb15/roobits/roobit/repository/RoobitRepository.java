package seb15.roobits.roobit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seb15.roobits.roobit.entity.Roobit;

@Repository
public interface RoobitRepository extends JpaRepository<Roobit, Long> {


}
