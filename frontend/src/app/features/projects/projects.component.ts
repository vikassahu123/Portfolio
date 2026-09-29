import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Engineering Showcase</span>
          <h2 class="section-title">Selected builds &amp; AI architectures.</h2>
          <p class="section-subtitle">
            Focused on scalable microservices platforms and practical Generative AI solutions with LangChain &amp; RAG pipelines. Each build highlights real architecture and system problem-solving.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div *ngFor="let project of projects; let i = index" 
               class="glass-card project-card reveal-box"
               [ngClass]="'stagger-' + ((i % 2) + 1)">
            <!-- Project Visual Graphic -->
            <div class="project-media-wrapper">
              <img [src]="project.imageUrl" [alt]="project.title" class="project-img" loading="lazy" (error)="onImageError($event)" />
              <div class="category-pill" [ngClass]="getCategoryBadgeClass(project.category)">
                {{ getCategoryLabel(project.category) }}
              </div>
            </div>

            <!-- Project Details -->
            <div class="project-info">
              <div class="project-meta-row">
                <span class="system-tag">CASE STUDY</span>
                <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="github-action-btn" title="View Source on GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Code</span>
                </a>
              </div>

              <h3 class="project-title">{{ project.title }}</h3>
              <h4 class="project-subtitle">{{ project.subtitle }}</h4>

              <p class="project-desc">
                {{ project.description }}
              </p>

              <!-- Architecture Lane -->
              <div class="arch-lane" *ngIf="project.architectureDetails">
                <span class="arch-label">ARCHITECTURE:</span>
                <span class="arch-text">{{ project.architectureDetails }}</span>
              </div>

              <!-- Tech Badges -->
              <div class="project-tech-stack">
                <span *ngFor="let tech of parseTech(project.technologies)" class="badge">
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
    .projects-section {
      background: var(--bg-base);
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
      width: 100%;
    }
    @media (max-width: 900px) {
      .projects-grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .project-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-lg);
      min-width: 0;
      width: 100%;
    }
    .project-card:hover {
      border-color: rgba(45, 212, 191, 0.4);
    }

    /* Media Header */
    .project-media-wrapper {
      position: relative;
      width: 100%;
      height: 220px;
      background: #070d19;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    @media (max-width: 640px) {
      .project-media-wrapper {
        height: 180px;
      }
    }
    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .project-card:hover .project-img {
      transform: scale(1.03);
    }
    .category-pill {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 700;
      padding: 0.3rem 0.7rem;
      border-radius: 9999px;
      backdrop-filter: blur(8px);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .cat-fullstack {
      background: rgba(45, 212, 191, 0.2);
      border: 1px solid #2dd4bf;
      color: #2dd4bf;
    }
    .cat-ai {
      background: rgba(56, 189, 248, 0.2);
      border: 1px solid #38bdf8;
      color: #38bdf8;
    }
    .cat-automation {
      background: rgba(245, 158, 11, 0.2);
      border: 1px solid #f59e0b;
      color: #f59e0b;
    }

    /* Info */
    .project-info {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    @media (max-width: 640px) {
      .project-info {
        padding: 1.25rem;
      }
    }
    .project-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }
    .system-tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #64748b;
      letter-spacing: 0.08em;
    }
    .github-action-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #94a3b8;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-decoration: none;
      padding: 0.25rem 0.65rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.2s ease;
    }
    .github-action-btn:hover {
      color: #2dd4bf;
      border-color: #2dd4bf;
      background: rgba(45, 212, 191, 0.1);
    }

    .project-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.25;
    }
    .project-subtitle {
      font-size: 0.875rem;
      font-weight: 500;
      color: #2dd4bf;
      margin-top: 0.25rem;
      margin-bottom: 0.85rem;
    }
    .project-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }

    /* Architecture Lane */
    .arch-lane {
      background: rgba(3, 7, 18, 0.75);
      border-left: 3px solid #f59e0b;
      padding: 0.75rem 1rem;
      border-radius: 0 6px 6px 0;
      margin-bottom: 1.25rem;
      font-size: 0.8125rem;
      line-height: 1.5;
    }
    .arch-label {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 700;
      color: #f59e0b;
      display: block;
      margin-bottom: 0.2rem;
    }
    .arch-text {
      color: #cbd5e1;
    }

    .project-tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 1rem;
    }
  `]
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && !target.src.includes('project-ecommerce.svg')) {
      target.src = 'assets/images/project-ecommerce.svg';
    }
  }

  parseTech(techStr: string): string[] {
    if (!techStr) return [];
    return techStr.split(',').map(s => s.trim()).filter(Boolean);
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'FULLSTACK': return 'Full-Stack Platform';
      case 'AI_SYSTEM': return 'GenAI System';
      case 'AUTOMATION': return 'Agentic Automation';
      default: return 'Engineered System';
    }
  }

  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'FULLSTACK': return 'cat-fullstack';
      case 'AI_SYSTEM': return 'cat-ai';
      case 'AUTOMATION': return 'cat-automation';
      default: return 'cat-fullstack';
    }
  }
}
