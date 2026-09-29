package com.vikas.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "experiences")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String roleTitle;

    @Column(nullable = false)
    private String organizationType; // e.g. "Tier-1 Global Technology Consulting Enterprise"

    private String period;
    private String locationType; // e.g. "Hybrid / Enterprise Scale"

    @Column(length = 2000)
    private String description;

    @Column(length = 2000)
    private String keyAchievements; // bullet points separated by '|'

    private String technologies;
    private int displayOrder;

    public Experience() {
    }

    public Experience(String roleTitle, String organizationType, String period, String locationType,
                      String description, String keyAchievements, String technologies, int displayOrder) {
        this.roleTitle = roleTitle;
        this.organizationType = organizationType;
        this.period = period;
        this.locationType = locationType;
        this.description = description;
        this.keyAchievements = keyAchievements;
        this.technologies = technologies;
        this.displayOrder = displayOrder;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleTitle() {
        return roleTitle;
    }

    public void setRoleTitle(String roleTitle) {
        this.roleTitle = roleTitle;
    }

    public String getOrganizationType() {
        return organizationType;
    }

    public void setOrganizationType(String organizationType) {
        this.organizationType = organizationType;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeyAchievements() {
        return keyAchievements;
    }

    public void setKeyAchievements(String keyAchievements) {
        this.keyAchievements = keyAchievements;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public int getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(int displayOrder) {
        this.displayOrder = displayOrder;
    }
}
