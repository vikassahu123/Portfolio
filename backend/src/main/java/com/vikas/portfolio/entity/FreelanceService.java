package com.vikas.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "freelance_services")
public class FreelanceService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String badge; // e.g., "Most Popular", "Enterprise Grade", "Rapid Delivery"

    @Column(length = 1000)
    private String summary;

    @Column(length = 2000)
    private String deliverables; // Pipe-delimited list of deliverables

    private String estimatedTimeline;
    private String idealFor;
    private int displayOrder;
    private boolean active;

    public FreelanceService() {
    }

    public FreelanceService(String title, String badge, String summary, String deliverables,
                            String estimatedTimeline, String idealFor, int displayOrder, boolean active) {
        this.title = title;
        this.badge = badge;
        this.summary = summary;
        this.deliverables = deliverables;
        this.estimatedTimeline = estimatedTimeline;
        this.idealFor = idealFor;
        this.displayOrder = displayOrder;
        this.active = active;
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

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getDeliverables() {
        return deliverables;
    }

    public void setDeliverables(String deliverables) {
        this.deliverables = deliverables;
    }

    public String getEstimatedTimeline() {
        return estimatedTimeline;
    }

    public void setEstimatedTimeline(String estimatedTimeline) {
        this.estimatedTimeline = estimatedTimeline;
    }

    public String getIdealFor() {
        return idealFor;
    }

    public void setIdealFor(String idealFor) {
        this.idealFor = idealFor;
    }

    public int getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(int displayOrder) {
        this.displayOrder = displayOrder;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
