package com.vikas.portfolio.repository;

import com.vikas.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByOrderByDisplayOrderAsc();
    List<Project> findByCategoryOrderByDisplayOrderAsc(String category);
    List<Project> findByFeaturedTrueOrderByDisplayOrderAsc();
}
