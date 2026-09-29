package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.entity.FreelanceService;
import com.vikas.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class FreelanceServiceController {

    private final PortfolioService portfolioService;

    public FreelanceServiceController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<FreelanceService>>> getServices() {
        return ResponseEntity.ok(ApiResponse.ok(portfolioService.getActiveFreelanceServices(), "Services retrieved successfully"));
    }
}
