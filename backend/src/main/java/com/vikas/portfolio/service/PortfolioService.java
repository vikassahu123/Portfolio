package com.vikas.portfolio.service;

import com.vikas.portfolio.entity.*;
import com.vikas.portfolio.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PortfolioService {

    private final ProfileRepository profileRepository;
    private final SkillRepository skillRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final FreelanceServiceRepository freelanceServiceRepository;

    public PortfolioService(ProfileRepository profileRepository,
                            SkillRepository skillRepository,
                            ProjectRepository projectRepository,
                            ExperienceRepository experienceRepository,
                            FreelanceServiceRepository freelanceServiceRepository) {
        this.profileRepository = profileRepository;
        this.skillRepository = skillRepository;
        this.projectRepository = projectRepository;
        this.experienceRepository = experienceRepository;
        this.freelanceServiceRepository = freelanceServiceRepository;
    }

    public Optional<Profile> getProfile() {
        return profileRepository.findFirstByOrderByIdAsc();
    }

    public List<Skill> getAllSkills() {
        return skillRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Skill> getSkillsByCategory(String category) {
        return skillRepository.findByCategoryOrderByDisplayOrderAsc(category);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Project> getFeaturedProjects() {
        return projectRepository.findByFeaturedTrueOrderByDisplayOrderAsc();
    }

    public List<Experience> getAllExperiences() {
        return experienceRepository.findAllByOrderByDisplayOrderAsc();
    }

    public List<FreelanceService> getActiveFreelanceServices() {
        return freelanceServiceRepository.findByActiveTrueOrderByDisplayOrderAsc();
    }
}
