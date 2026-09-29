import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelanceService } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="section freelance-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Services &amp; Engagement</span>
          <h2 class="section-title">Freelancing &amp; consulting services.</h2>
          <p class="section-subtitle">
            Need an enterprise full-stack application, an autonomous AI workflow, or backend microservices? I partner directly with founders, teams, and enterprises to build production-grade solutions.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid-2 services-grid">
          <div *ngFor="let service of services; let i = index" 
               class="glass-card service-card reveal-box"
               [ngClass]="'stagger-' + ((i % 2) + 1)">
            <!-- Top Banner -->
            <div class="service-card-top">
              <span class="service-badge" [ngClass]="getBadgeClass(service.badge)">
                {{ service.badge }}
              </span>
              <span class="timeline-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{{ service.estimatedTimeline }}</span>
              </span>
            </div>

            <!-- Service Title & Summary -->
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-summary">{{ service.summary }}</p>

            <!-- Deliverables -->
            <div class="deliverables-box">
              <h4 class="deliverables-heading">WHAT'S INCLUDED:</h4>
              <ul class="deliverables-list">
                <li *ngFor="let item of parseDeliverables(service.deliverables)">
                  <span class="d-check">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Bottom: Target & Booking CTA -->
            <div class="service-footer">
              <div class="ideal-target">
                <span class="ideal-label">Best for:</span>
                <span class="ideal-text">{{ service.idealFor }}</span>
              </div>

              <button class="btn-primary book-btn" (click)="onSelectService(service.title)">
                <span>Book This Service</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Custom Engagement Banner -->
        <div class="glass-card custom-banner">
          <div class="custom-content">
            <div class="custom-text">
              <h3 class="custom-title">Have a custom architectural challenge or unique requirement?</h3>
              <p class="custom-subtitle">
                Whether you need specialized RAG pipelines, microservice refactoring, or advisory consulting, we can tailor a roadmap to your specific goals.
              </p>
            </div>
            <a href="#contact" class="btn-secondary custom-cta" (click)="onSelectService('Custom Architecture / Special Inquiry')">
              Discuss Custom Engagement
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .freelance-section {
      background: linear-gradient(180deg, var(--bg-base) 0%, #050b18 100%);
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .service-card {
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    @media (max-width: 640px) {
      .service-card {
        padding: 1.5rem;
      }
    }
    .service-card:hover {
      border-color: rgba(45, 212, 191, 0.4);
    }

    .service-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }
    .service-badge {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 700;
      padding: 0.3rem 0.65rem;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-popular {
      background: rgba(45, 212, 191, 0.15);
      border: 1px solid #2dd4bf;
      color: #2dd4bf;
    }
    .badge-demand {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid #f59e0b;
      color: #f59e0b;
    }
    .badge-enterprise {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid #38bdf8;
      color: #38bdf8;
    }
    .badge-consulting {
      background: rgba(168, 85, 247, 0.15);
      border: 1px solid #a855f7;
      color: #a855f7;
    }

    .timeline-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #94a3b8;
    }

    .service-title {
      font-size: 1.45rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.3;
      margin-bottom: 0.75rem;
    }
    .service-summary {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    /* Deliverables */
    .deliverables-box {
      background: rgba(3, 7, 18, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 1.25rem;
      margin-bottom: 1.75rem;
      flex-grow: 1;
    }
    .deliverables-heading {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 700;
      color: #2dd4bf;
      letter-spacing: 0.08em;
      margin-bottom: 0.85rem;
    }
    .deliverables-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .deliverables-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #cbd5e1;
      line-height: 1.5;
    }
    .d-check {
      color: #2dd4bf;
      font-weight: bold;
      flex-shrink: 0;
    }

    /* Footer */
    .service-footer {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 1.25rem;
    }
    .ideal-target {
      font-size: 0.8125rem;
      line-height: 1.4;
    }
    .ideal-label {
      color: #64748b;
      margin-right: 0.35rem;
      font-family: var(--font-mono);
    }
    .ideal-text {
      color: #94a3b8;
    }
    .book-btn {
      width: 100%;
    }

    /* Custom Banner */
    .custom-banner {
      margin-top: 3rem;
      padding: 2rem 2.5rem;
      background: rgba(7, 13, 26, 0.9);
      border-color: rgba(245, 158, 11, 0.3);
    }
    .custom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .custom-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.4rem;
    }
    .custom-subtitle {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      max-width: 680px;
    }
    .custom-cta {
      white-space: nowrap;
    }
  `]
})
export class FreelanceComponent {
  @Input() services: FreelanceService[] = [];
  @Output() serviceSelected = new EventEmitter<string>();

  parseDeliverables(str: string): string[] {
    if (!str) return [];
    return str.split('|').map(s => s.trim()).filter(Boolean);
  }

  getBadgeClass(badge: string): string {
    switch (badge?.toLowerCase()) {
      case 'most popular': return 'badge-popular';
      case 'high demand': return 'badge-demand';
      case 'enterprise grade': return 'badge-enterprise';
      case 'consulting': return 'badge-consulting';
      default: return 'badge-popular';
    }
  }

  onSelectService(serviceTitle: string) {
    this.serviceSelected.emit(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
