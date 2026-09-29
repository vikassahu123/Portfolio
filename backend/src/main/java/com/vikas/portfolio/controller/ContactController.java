package com.vikas.portfolio.controller;

import com.vikas.portfolio.dto.ApiResponse;
import com.vikas.portfolio.dto.ContactRequestDTO;
import com.vikas.portfolio.dto.ContactResponseDTO;
import com.vikas.portfolio.entity.ContactMessage;
import com.vikas.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ContactResponseDTO>> submitContact(@Valid @RequestBody ContactRequestDTO request) {
        ContactResponseDTO response = contactService.saveAndProcessContact(request);
        return ResponseEntity.ok(ApiResponse.ok(response, "Message received and stored successfully"));
    }

    @GetMapping("/messages")
    public ResponseEntity<ApiResponse<List<ContactMessage>>> getReceivedInquiries() {
        List<ContactMessage> messages = contactService.getAllMessages();
        return ResponseEntity.ok(ApiResponse.ok(messages, "Messages retrieved successfully"));
    }
}
