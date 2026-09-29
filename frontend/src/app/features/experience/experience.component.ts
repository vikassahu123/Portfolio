import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Career Milestones</span>
          <h2 class="section-title">Enterprise engineering track record.</h2>
          <p class="section-subtitle">
            Full-lifecycle software engineering combining scalable Java &amp; Spring Boot microservices, ACID-compliant MySQL architectures, and responsive Angular user interfaces built for deterministic performance and enterprise durability.
          </p>
        </div>

        <!-- Experience Timeline -->
        <div class="timeline-container">
          <div *ngFor="let exp of experiences; let i = index" class="timeline-item reveal-box" [ngClass]="'stagger-' + ((i % 2) + 1)">
            <!-- Timeline Marker -->
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line" *ngIf="i < experiences.length - 1"></div>
            </div>

            <!-- Experience Card -->
            <div class="glass-card experience-card">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">{{ exp.roleTitle }}</h3>
                  <div class="exp-org-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>{{ exp.organizationType }}</span>
                  </div>
                </div>

                <div class="exp-meta">
                  <span class="period-badge">{{ exp.period }}</span>
                  <span class="location-tag">{{ exp.locationType }}</span>
                </div>
              </div>

              <p class="exp-desc">
                {{ exp.description }}
              </p>

              <!-- Key Achievements List -->
              <div class="achievements-section" *ngIf="exp.keyAchievements">
                <h4 class="achievements-title">Key Architectural Highlights &amp; Impact:</h4>
                <ul class="achievements-list">
                  <li *ngFor="let ach of parseAchievements(exp.keyAchievements)" class="achievement-item">
                    <span class="check-icon">✓</span>
                    <span>{{ ach }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack Tags -->
              <div class="exp-tech-tags" *ngIf="exp.technologies">
                <span *ngFor="let tech of parseTech(exp.technologies)" class="badge">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      background: linear-gradient(180deg, var(--bg-base) 0%, #060b18 100%);
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .timeline-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 980px;
      margin-left: auto;
      margin-right: auto;
    }
    .timeline-item {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 640px) {
      .timeline-item {
        grid-template-columns: 24px 1fr;
        gap: 1rem;
      }
    }

    /* Marker */
    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .marker-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #030712;
      border: 3px solid #2dd4bf;
      box-shadow: 0 0 12px rgba(45, 212, 191, 0.6);
      margin-top: 1.5rem;
      z-index: 2;
    }
    .marker-line {
      width: 2px;
      flex-grow: 1;
      background: linear-gradient(180deg, #2dd4bf 0%, rgba(45, 212, 191, 0.1) 100%);
      margin-top: 0.5rem;
    }

    /* Card */
    .experience-card {
      padding: 2rem;
    }
    @media (max-width: 640px) {
      .experience-card {
        padding: 1.25rem;
      }
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .exp-role {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.3;
    }
    .exp-org-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.875rem;
      color: #2dd4bf;
      margin-top: 0.35rem;
      font-weight: 500;
    }
    .exp-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.35rem;
    }
    @media (max-width: 640px) {
      .exp-meta {
        align-items: flex-start;
      }
    }
    .period-badge {
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      background: rgba(45, 212, 191, 0.1);
      border: 1px solid rgba(45, 212, 191, 0.3);
      color: #2dd4bf;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      font-weight: 600;
    }
    .location-tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #64748b;
    }

    .exp-desc {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin-bottom: 1.25rem;
    }

    /* Achievements */
    .achievements-section {
      background: rgba(3, 7, 18, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      margin-bottom: 1.25rem;
    }
    .achievements-title {
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      color: #e2e8f0;
      margin-bottom: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .achievements-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .achievement-item {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #cbd5e1;
      line-height: 1.5;
    }
    .check-icon {
      color: #2dd4bf;
      font-weight: bold;
      flex-shrink: 0;
    }

    /* Tech Tags */
    .exp-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }
  `]
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];

  parseAchievements(achievements: string): string[] {
    if (!achievements) return [];
    return achievements.split('|').map(s => s.trim()).filter(Boolean);
  }

  parseTech(tech: string): string[] {
    if (!tech) return [];
    return tech.split(',').map(s => s.trim()).filter(Boolean);
  }
}
