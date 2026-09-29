package com.vikas.portfolio.dto;

import java.time.LocalDateTime;

public class ContactResponseDTO {
    private Long id;
    private String confirmation;
    private String directWhatsAppUrl;
    private String directInstagramUrl;
    private String directMailtoUrl;
    private LocalDateTime timestamp;

    public ContactResponseDTO() {
    }

    public ContactResponseDTO(Long id, String confirmation, String directWhatsAppUrl,
                              String directInstagramUrl, String directMailtoUrl, LocalDateTime timestamp) {
        this.id = id;
        this.confirmation = confirmation;
        this.directWhatsAppUrl = directWhatsAppUrl;
        this.directInstagramUrl = directInstagramUrl;
        this.directMailtoUrl = directMailtoUrl;
        this.timestamp = timestamp;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConfirmation() {
        return confirmation;
    }

    public void setConfirmation(String confirmation) {
        this.confirmation = confirmation;
    }

    public String getDirectWhatsAppUrl() {
        return directWhatsAppUrl;
    }

    public void setDirectWhatsAppUrl(String directWhatsAppUrl) {
        this.directWhatsAppUrl = directWhatsAppUrl;
    }

    public String getDirectInstagramUrl() {
        return directInstagramUrl;
    }

    public void setDirectInstagramUrl(String directInstagramUrl) {
        this.directInstagramUrl = directInstagramUrl;
    }

    public String getDirectMailtoUrl() {
        return directMailtoUrl;
    }

    public void setDirectMailtoUrl(String directMailtoUrl) {
        this.directMailtoUrl = directMailtoUrl;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
