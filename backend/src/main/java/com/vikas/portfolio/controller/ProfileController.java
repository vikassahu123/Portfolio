package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.entity.Profile;
import com.vikas.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class ProfileController {

    private final PortfolioService portfolioService;

    public ProfileController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Profile>> getProfile() {
        return portfolioService.getProfile()
                .map(p -> ResponseEntity.ok(ApiResponse.ok(p, "Profile retrieved successfully")))
                .orElseGet(() -> ResponseEntity.ok(ApiResponse.error("Profile not initialized yet")));
    }
}
