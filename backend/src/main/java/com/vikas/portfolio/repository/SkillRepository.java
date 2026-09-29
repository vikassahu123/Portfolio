package com.vikas.portfolio.repository;

import com.vikas.portfolio.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findAllByOrderByDisplayOrderAsc();
    List<Skill> findByCategoryOrderByDisplayOrderAsc(String category);
}
