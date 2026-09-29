package com.vikas.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String subtitle;

    @Column(length = 2000)
    private String description;

    @Column(length = 2000)
    private String architectureDetails;

    private String technologies; // Comma-separated or tag string
    private String category;     // AI_SYSTEM, FULLSTACK, AUTOMATION
    private String githubUrl;
    private String liveDemoUrl;
    private String imageUrl;
    private int displayOrder;
    private boolean featured;

    public Project() {
    }

    public Project(String title, String subtitle, String description, String architectureDetails,
                   String technologies, String category, String githubUrl, String liveDemoUrl,
                   String imageUrl, int displayOrder, boolean featured) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.architectureDetails = architectureDetails;
        this.technologies = technologies;
        this.category = category;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.imageUrl = imageUrl;
        this.displayOrder = displayOrder;
        this.featured = featured;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getArchitectureDetails() {
        return architectureDetails;
    }

    public void setArchitectureDetails(String architectureDetails) {
        this.architectureDetails = architectureDetails;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLiveDemoUrl() {
        return liveDemoUrl;
    }

    public void setLiveDemoUrl(String liveDemoUrl) {
        this.liveDemoUrl = liveDemoUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(int displayOrder) {
        this.displayOrder = displayOrder;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }
}
