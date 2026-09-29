package com.vikas.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "contact_messages")
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String senderName;

    @Column(nullable = false)
    private String senderEmail;

    private String senderPhone;
    private String serviceInterested;
    private String subject;

    @Column(length = 3000, nullable = false)
    private String message;

    private String contactChannelPreference; // WHATSAPP, EMAIL, CALL
    private LocalDateTime createdAt;
    private String status; // NEW, READ, REPLIED

    public ContactMessage() {
        this.createdAt = LocalDateTime.now();
        this.status = "NEW";
    }

    public ContactMessage(String senderName, String senderEmail, String senderPhone,
                          String serviceInterested, String subject, String message,
                          String contactChannelPreference) {
        this();
        this.senderName = senderName;
        this.senderEmail = senderEmail;
        this.senderPhone = senderPhone;
        this.serviceInterested = serviceInterested;
        this.subject = subject;
        this.message = message;
        this.contactChannelPreference = contactChannelPreference;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getSenderPhone() {
        return senderPhone;
    }

    public void setSenderPhone(String senderPhone) {
        this.senderPhone = senderPhone;
    }

    public String getServiceInterested() {
        return serviceInterested;
    }

    public void setServiceInterested(String serviceInterested) {
        this.serviceInterested = serviceInterested;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getContactChannelPreference() {
        return contactChannelPreference;
    }

    public void setContactChannelPreference(String contactChannelPreference) {
        this.contactChannelPreference = contactChannelPreference;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
