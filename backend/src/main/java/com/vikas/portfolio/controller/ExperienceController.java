package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.entity.Experience;
import com.vikas.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
@CrossOrigin(origins = "*")
public class ExperienceController {

    private final PortfolioService portfolioService;

    public ExperienceController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Experience>>> getExperiences() {
        return ResponseEntity.ok(ApiResponse.ok(portfolioService.getAllExperiences(), "Experiences retrieved successfully"));
    }
}
