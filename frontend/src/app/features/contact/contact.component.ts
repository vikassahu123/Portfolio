import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { Profile, ContactRequest, ContactResponse, ContactMessage } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Direct Inquiry &amp; Booking</span>
          <h2 class="section-title">Let's build something exceptional.</h2>
          <p class="section-subtitle">
            Have a project in mind, an engineering role, or a freelance inquiry? Send a direct message below. I will get back to you promptly.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left Column: Direct Reach-out Channels -->
          <div class="glass-card contact-info-card reveal-box stagger-1">
            <h3 class="info-card-title">Direct Reach-Out</h3>
            <p class="info-card-desc">
              I am available for full-stack software engineering roles, web application development, and freelance project engagements.
            </p>

            <div class="channel-list">
              <!-- Instagram Direct -->
              <a [href]="getInstagramUrl()" target="_blank" rel="noopener noreferrer" class="channel-item instagram-channel">
                <div class="channel-icon insta-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Instagram Profile</span>
                  <span class="channel-value">&#64;vikasofftrack</span>
                </div>
              </a>

              <!-- Email Direct -->
              <a [href]="'mailto:' + (profile?.contactEmail || 'vikassahu54927@gmail.com')" class="channel-item email-channel">
                <div class="channel-icon email-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Direct Email</span>
                  <span class="channel-value">{{ profile?.contactEmail || 'vikassahu54927@gmail.com' }}</span>
                </div>
              </a>

              <!-- GitHub Direct -->
              <a [href]="profile?.githubUrl || 'https://github.com/vikassahu123'" target="_blank" rel="noopener noreferrer" class="channel-item github-channel">
                <div class="channel-icon github-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">GitHub Profile &amp; Repos</span>
                  <span class="channel-value">github.com/vikassahu123</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="glass-card contact-form-card reveal-box stagger-2">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
              <div class="form-row grid-2">
                <div class="form-group">
                  <label class="form-label" for="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name" 
                    required 
                    class="form-input" 
                    placeholder="e.g. Alex Mercer" />
                </div>

                <div class="form-group">
                  <label class="form-label" for="email">Your Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email" 
                    required 
                    email 
                    class="form-input" 
                    placeholder="alex@company.com" />
                </div>
              </div>

              <div class="form-row grid-2">
                <div class="form-group">
                  <label class="form-label" for="phone">Instagram Handle / Social (Optional)</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone" 
                    class="form-input" 
                    placeholder="@yourhandle or profile link" />
                </div>

                <div class="form-group">
                  <label class="form-label" for="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service" 
                    [(ngModel)]="formData.service" 
                    class="form-input form-select">
                    <option value="Full-Stack Web App Development">Full-Stack Web App Development</option>
                    <option value="AI & RAG Integration / Automation Workflows">AI &amp; RAG Integration / Automation Workflows</option>
                    <option value="Backend Microservices & REST API Engineering">Backend Microservices &amp; REST API Engineering</option>
                    <option value="Architecture Review & Modernization">Architecture Review &amp; Modernization</option>
                    <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject" 
                  class="form-input" 
                  placeholder="e.g. Building an e-commerce platform with microservices" />
              </div>

              <div class="form-group">
                <label class="form-label" for="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  [(ngModel)]="formData.message" 
                  required 
                  class="form-input form-textarea" 
                  placeholder="Tell me about your project goals, timelines, and technical requirements..."></textarea>
              </div>

              <!-- Submit Buttons Strip -->
              <div class="form-actions">
                <button 
                  type="submit" 
                  class="btn-primary submit-btn" 
                  [disabled]="isSubmitting || !contactForm.valid">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending Message...</span>
                  <svg *ngIf="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>

              <!-- Reassurance Note -->
              <div class="form-note">
                <span class="note-icon">✓</span>
                <span>Your message will be sent directly to Vikas Sahu. I will get back to you promptly.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Success & Quick Forward Modal -->
      <div class="modal-backdrop" *ngIf="lastSubmission">
        <div class="glass-card success-modal">
          <div class="modal-header">
            <div class="success-check-icon">✓</div>
            <h3 class="modal-title">Message Sent Successfully!</h3>
            <button class="close-modal-btn" (click)="lastSubmission = null">✕</button>
          </div>
          <p class="modal-message">{{ lastSubmission.confirmation }}</p>
          
          <div class="forward-actions">
            <p class="forward-lead">You can also forward this full message immediately:</p>
            <div class="forward-buttons">
              <a [href]="lastSubmission.directInstagramUrl || 'https://www.instagram.com/vikasofftrack'" target="_blank" class="btn-instagram">
                <span>Connect on Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a [href]="lastSubmission.directMailtoUrl" class="btn-secondary">
                <span>Send via Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Inquiries Viewer Modal (for Vikas to review received messages) -->
      <div class="modal-backdrop" *ngIf="inquiriesModalOpen">
        <div class="glass-card inquiries-modal">
          <div class="modal-header">
            <div>
              <h3 class="modal-title">Received Inquiries (MySQL Database)</h3>
              <span class="db-source-label">Table: contact_messages &bull; Total: {{ storedMessages.length }}</span>
            </div>
            <button class="close-modal-btn" (click)="inquiriesModalOpen = false">✕</button>
          </div>

          <div class="inquiries-list">
            <div *ngIf="storedMessages.length === 0" class="empty-inquiries">
              No inquiries received yet. Submit a message above to see it appear here!
            </div>

            <div *ngFor="let msg of storedMessages" class="inquiry-item">
              <div class="inquiry-item-header">
                <div>
                  <span class="inquiry-sender">{{ msg.senderName }}</span>
                  <span class="inquiry-email">(&lt;{{ msg.senderEmail }}&gt;)</span>
                </div>
                <span class="inquiry-time">{{ msg.createdAt | slice:0:16 }}</span>
              </div>
              <div class="inquiry-service-tag">
                <span>Service:</span> <strong>{{ msg.serviceInterested }}</strong>
              </div>
              <p class="inquiry-text">{{ msg.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: var(--bg-base);
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 0.85fr 1.15fr;
      gap: 2.5rem;
    }
    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Left Info Card */
    .contact-info-card {
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 640px) {
      .contact-info-card {
        padding: 1.5rem;
      }
    }
    .info-card-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    .info-card-desc {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .channel-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-grow: 1;
    }
    .channel-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .channel-item:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(45, 212, 191, 0.3);
      transform: translateX(4px);
    }
    .channel-icon {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      display: grid;
      place-items: center;
      flex-shrink: 0;
    }
    .wa-icon {
      background: rgba(37, 211, 102, 0.15);
      color: #25d366;
    }
    .insta-icon {
      background: rgba(225, 48, 108, 0.15);
      color: #e1306c;
    }
    .email-icon {
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
    }
    .github-icon {
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
    }
    .channel-details {
      display: flex;
      flex-direction: column;
    }
    .channel-label {
      font-size: 0.75rem;
      font-family: var(--font-mono);
      color: #64748b;
    }
    .channel-value {
      font-size: 0.9375rem;
      font-weight: 600;
      color: #ffffff;
    }

    /* Admin Inquiry Box */
    .admin-inquiry-box {
      margin-top: 2rem;
      padding: 1.25rem;
      background: rgba(3, 7, 18, 0.8);
      border: 1px solid rgba(45, 212, 191, 0.2);
      border-radius: 8px;
    }
    .inquiry-badge {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #2dd4bf;
      font-weight: 700;
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 0.25rem;
    }
    .inquiry-box-text p {
      font-size: 0.8125rem;
      color: #94a3b8;
      margin-bottom: 0.85rem;
    }
    .view-inquiries-btn {
      width: 100%;
      font-size: 0.8125rem;
      padding: 0.5rem;
    }

    /* Right Form Card */
    .contact-form-card {
      padding: 2.25rem;
    }
    @media (max-width: 640px) {
      .contact-form-card {
        padding: 1.5rem;
      }
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-label {
      font-size: 0.8125rem;
      font-weight: 600;
      color: #cbd5e1;
      font-family: var(--font-mono);
    }
    .form-input {
      background: #030712;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: #ffffff;
      font-family: var(--font-sans);
      font-size: 0.9375rem;
      transition: all 0.2s ease;
    }
    .form-input:focus {
      outline: none;
      border-color: #2dd4bf;
      box-shadow: 0 0 12px rgba(45, 212, 191, 0.25);
    }
    .form-select {
      appearance: none;
      cursor: pointer;
    }
    .form-textarea {
      resize: vertical;
      min-height: 110px;
    }

    .form-actions {
      margin-top: 0.5rem;
    }
    .submit-btn {
      width: 100%;
      padding: 0.85rem;
    }

    .form-note {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      color: #64748b;
      margin-top: 0.25rem;
    }
    .note-icon {
      font-size: 0.9375rem;
    }

    /* Modals */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      z-index: 10000;
      display: grid;
      place-items: center;
      padding: 1.5rem;
    }
    .success-modal {
      width: 100%;
      max-width: 520px;
      background: #0b1324;
      border: 1px solid #2dd4bf;
      padding: 2rem;
    }
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .success-check-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(45, 212, 191, 0.2);
      color: #2dd4bf;
      display: grid;
      place-items: center;
      font-weight: bold;
      font-size: 1.25rem;
    }
    .modal-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      flex-grow: 1;
      margin-left: 0.75rem;
    }
    .close-modal-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 1.2rem;
      cursor: pointer;
    }
    .modal-message {
      font-size: 0.9375rem;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .forward-lead {
      font-size: 0.875rem;
      font-weight: 600;
      color: #e2e8f0;
      margin-bottom: 0.75rem;
    }
    .forward-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }
    @media (max-width: 480px) {
      .forward-buttons {
        grid-template-columns: 1fr;
      }
    }

    /* Inquiries Modal */
    .inquiries-modal {
      width: 100%;
      max-width: 720px;
      max-height: 80vh;
      background: #0b1324;
      border: 1px solid rgba(45, 212, 191, 0.4);
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }
    .db-source-label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #2dd4bf;
      display: block;
      margin-top: 0.2rem;
    }
    .inquiries-list {
      overflow-y: auto;
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-right: 0.5rem;
    }
    .inquiry-item {
      background: #030712;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 1.25rem;
    }
    .inquiry-item-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      flex-wrap: wrap;
    }
    .inquiry-sender {
      font-weight: 700;
      color: #ffffff;
      margin-right: 0.35rem;
    }
    .inquiry-email {
      font-size: 0.8125rem;
      color: #94a3b8;
    }
    .inquiry-time {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #64748b;
    }
    .inquiry-service-tag {
      font-size: 0.8125rem;
      color: #2dd4bf;
      margin-bottom: 0.6rem;
    }
    .inquiry-text {
      font-size: 0.875rem;
      color: #cbd5e1;
      line-height: 1.55;
    }
    .empty-inquiries {
      text-align: center;
      padding: 2.5rem;
      color: #64748b;
      font-size: 0.9375rem;
    }
  `]
})
export class ContactComponent implements OnInit {
  @Input() profile: Profile | null = null;

  formData: ContactRequest = {
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web App Development',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  lastSubmission: ContactResponse | null = null;
  inquiriesModalOpen = false;
  storedMessages: ContactMessage[] = [];

  constructor(
    private apiService: ApiService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.refreshInquiries();
  }

  setService(serviceTitle: string) {
    this.formData.service = serviceTitle;
    this.formData.subject = `Inquiry for ${serviceTitle}`;
  }

  getInstagramUrl(): string {
    return 'https://www.instagram.com/vikasofftrack?utm_source=qr&stkn=MWxtbW5taG0yNXM2eA==';
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.apiService.submitContact(this.formData).subscribe({
      next: res => {
        this.isSubmitting = false;
        if (res && res.data) {
          this.lastSubmission = res.data;
          this.toastService.show(
            'Message Sent Successfully!',
            'Thank you! Your message has been sent. You can also reach out directly via Instagram (@vikasofftrack) or Email.'
          );
          // Refresh message viewer list
          this.refreshInquiries();
          // Reset form
          this.formData = {
            name: '',
            email: '',
            phone: '',
            service: 'Full-Stack Web App Development',
            subject: '',
            message: ''
          };
        }
      },
      error: () => {
        this.isSubmitting = false;
        this.toastService.show('Notice', 'Inquiry prepared. You can connect directly via Instagram (@vikasofftrack) or Email.', 'info');
      }
    });
  }

  refreshInquiries() {
    this.apiService.getReceivedMessages().subscribe(msgs => {
      this.storedMessages = msgs;
    });
  }

  openInquiriesModal() {
    this.refreshInquiries();
    this.inquiriesModalOpen = true;
  }
}
