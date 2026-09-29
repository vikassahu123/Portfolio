package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.entity.Project;
import com.vikas.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final PortfolioService portfolioService;

    public ProjectController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Project>>> getAllProjects(@RequestParam(required = false) Boolean featured) {
        List<Project> projects = (featured != null && featured)
                ? portfolioService.getFeaturedProjects()
                : portfolioService.getAllProjects();
        return ResponseEntity.ok(ApiResponse.ok(projects, "Projects retrieved successfully"));
    }
}
