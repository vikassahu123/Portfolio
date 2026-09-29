package com.vikas.portfolio.service;

import com.vikas.portfolio.dto.ContactRequestDTO;
import com.vikas.portfolio.dto.ContactResponseDTO;
import com.vikas.portfolio.entity.ContactMessage;
import com.vikas.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Value("${portfolio.contact.recipient-email:vikassahu54927@gmail.com}")
    private String recipientEmail;

    @Value("${portfolio.contact.instagram-url:https://www.instagram.com/vikasofftrack?utm_source=qr&stkn=MWxtbW5taG0yNXM2eA==}")
    private String recipientInstagram;

    public ContactService(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    public ContactResponseDTO saveAndProcessContact(ContactRequestDTO request) {
        // 1. Save message to MySQL
        ContactMessage contactMessage = new ContactMessage(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getService() != null ? request.getService() : "General Inquiry",
                request.getSubject() != null ? request.getSubject() : "Portfolio Contact",
                request.getMessage(),
                request.getPreferredChannel() != null ? request.getPreferredChannel() : "EMAIL"
        );
        ContactMessage saved = contactMessageRepository.save(contactMessage);

        // 2. Format pre-populated Mailto URL & Instagram connection
        String rawMailText = String.format(
                "Hello Vikas! New Portfolio Inquiry:\n\n" +
                "👤 From: %s\n" +
                "📧 Email: %s\n" +
                "📸 Social / Handle: %s\n" +
                "💼 Service: %s\n" +
                "📝 Message:\n%s",
                request.getName(),
                request.getEmail(),
                request.getPhone() != null ? request.getPhone() : "N/A",
                request.getService() != null ? request.getService() : "Direct Project Inquiry",
                request.getMessage()
        );

        String mailSubject = URLEncoder.encode("[Portfolio Inquiry] " + (request.getSubject() != null ? request.getSubject() : request.getService()), StandardCharsets.UTF_8);
        String mailBody = URLEncoder.encode(rawMailText, StandardCharsets.UTF_8);
        String directMailtoUrl = "mailto:" + recipientEmail + "?subject=" + mailSubject + "&body=" + mailBody;
        String directInstagramUrl = recipientInstagram;

        String confirmation = "Thank you " + request.getName() + "! Your message has been sent successfully. Vikas Sahu will get back to you promptly.";

        return new ContactResponseDTO(
                saved.getId(),
                confirmation,
                null,
                directInstagramUrl,
                directMailtoUrl,
                saved.getCreatedAt()
        );
    }

    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAllByOrderByCreatedAtDesc();
    }
}
