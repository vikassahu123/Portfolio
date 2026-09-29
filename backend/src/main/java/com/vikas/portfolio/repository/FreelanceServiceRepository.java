package com.vikas.portfolio.repository;

import com.vikas.portfolio.entity.FreelanceService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FreelanceServiceRepository extends JpaRepository<FreelanceService, Long> {
    List<FreelanceService> findByActiveTrueOrderByDisplayOrderAsc();
}
