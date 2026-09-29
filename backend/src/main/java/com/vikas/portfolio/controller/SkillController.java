package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.entity.Skill;
import com.vikas.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = "*")
public class SkillController {

    private final PortfolioService portfolioService;

    public SkillController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Skill>>> getAllSkills(@RequestParam(required = false) String category) {
        List<Skill> skills = (category != null && !category.isBlank())
                ? portfolioService.getSkillsByCategory(category.toUpperCase())
                : portfolioService.getAllSkills();
        return ResponseEntity.ok(ApiResponse.ok(skills, "Skills retrieved successfully"));
    }
}
