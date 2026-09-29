package com.vikas.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String bio;

    private String location;
    private String githubUrl;
    private String linkedinUrl;
    private String contactEmail;
    private String whatsappNumber;
    private String statusMessage;
    private boolean availableForFreelance;

    public Profile() {
    }

    public Profile(String fullName, String title, String bio, String location, String githubUrl,
                   String linkedinUrl, String contactEmail, String whatsappNumber,
                   String statusMessage, boolean availableForFreelance) {
        this.fullName = fullName;
        this.title = title;
        this.bio = bio;
        this.location = location;
        this.githubUrl = githubUrl;
        this.linkedinUrl = linkedinUrl;
        this.contactEmail = contactEmail;
        this.whatsappNumber = whatsappNumber;
        this.statusMessage = statusMessage;
        this.availableForFreelance = availableForFreelance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getWhatsappNumber() {
        return whatsappNumber;
    }

    public void setWhatsappNumber(String whatsappNumber) {
        this.whatsappNumber = whatsappNumber;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public boolean isAvailableForFreelance() {
        return availableForFreelance;
    }

    public void setAvailableForFreelance(boolean availableForFreelance) {
        this.availableForFreelance = availableForFreelance;
    }
}
