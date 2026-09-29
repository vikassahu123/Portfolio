import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Engineering Mindset</span>
          <h2 class="section-title">Architecting calm into complex systems.</h2>
          <p class="section-subtitle">
            I work across backend platforms, responsive user interfaces, and generative AI pipelines — with a relentless focus on maintainable, scalable, and deterministic software.
          </p>
        </div>

        <!-- 4 Core Pillars Grid -->
        <div class="grid-4 about-pillars">
          <!-- Pillar 1: Backend Microservices -->
          <div class="glass-card pillar-card reveal-box stagger-1">
            <div class="pillar-icon teal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="pillar-title">Java &amp; Spring Boot</h3>
            <p class="pillar-desc">
              Production-grade RESTful microservices, Spring Data JPA, clean domain boundaries, and multi-tenant transactional workflows.
            </p>
            <div class="pillar-tags">
              <span class="badge">Java</span>
              <span class="badge">Spring Boot</span>
              <span class="badge">REST APIs</span>
            </div>
          </div>

          <!-- Pillar 2: Frontend Engineering -->
          <div class="glass-card pillar-card reveal-box stagger-2">
            <div class="pillar-icon cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 class="pillar-title">Angular &amp; Modern UI</h3>
            <p class="pillar-desc">
              Component-driven web applications with modern standalone APIs, RxJS state streams, and fluid responsive design for all devices.
            </p>
            <div class="pillar-tags">
              <span class="badge">Angular</span>
              <span class="badge">TypeScript</span>
              <span class="badge">SCSS</span>
            </div>
          </div>

          <!-- Pillar 3: AI & RAG Automation -->
          <div class="glass-card pillar-card reveal-box stagger-3">
            <div class="pillar-icon amber">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 class="pillar-title">LangChain &amp; RAG Pipeline</h3>
            <p class="pillar-desc">
              Context-aware LLM agents, vector database retrieval, semantic document chunking, prompt chains, and automated GitHub code auditing.
            </p>
            <div class="pillar-tags">
              <span class="badge">LangChain</span>
              <span class="badge">RAG Pipeline</span>
              <span class="badge">Gemini / OpenAI</span>
              <span class="badge">n8n</span>
            </div>
          </div>

          <!-- Pillar 4: MySQL & Data Reliability -->
          <div class="glass-card pillar-card reveal-box stagger-4">
            <div class="pillar-icon emerald">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 class="pillar-title">MySQL &amp; Persistence</h3>
            <p class="pillar-desc">
              ACID compliant database schemas, query optimization, connection pooling, and automated schema migrations for high durability.
            </p>
            <div class="pillar-tags">
              <span class="badge">MySQL</span>
              <span class="badge">Hibernate</span>
              <span class="badge">ACID</span>
            </div>
          </div>
        </div>

        <!-- Systems Strategy Callout -->
        <div class="glass-card systems-callout reveal-box stagger-1">
          <div class="callout-grid">
            <div>
              <span class="callout-label">PHILOSOPHY</span>
              <h4 class="callout-heading">Deterministic backend logic &bull; Fluid user interfaces</h4>
              <p class="callout-text">
                I prioritize architectures that don't become brittle as scale increases. By treating backend correctness, database integrity, responsive UX, and AI automations as parts of a unified system, I build solutions that deliver long-term value.
              </p>
            </div>
            <div class="callout-stats">
              <div class="stat-box">
                <span class="stat-number">100%</span>
                <span class="stat-label">Device Responsive</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">&lt;50ms</span>
                <span class="stat-label">API Latency Target</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">REST</span>
                <span class="stat-label">Decoupled Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background: linear-gradient(180deg, var(--bg-base) 0%, #050a17 100%);
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .pillar-card {
      padding: 1.75rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .pillar-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      margin-bottom: 1.25rem;
    }
    .pillar-icon.teal {
      background: rgba(45, 212, 191, 0.12);
      color: #2dd4bf;
      border: 1px solid rgba(45, 212, 191, 0.3);
    }
    .pillar-icon.cyan {
      background: rgba(56, 189, 248, 0.12);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }
    .pillar-icon.amber {
      background: rgba(245, 158, 11, 0.12);
      color: #f59e0b;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
    .pillar-icon.emerald {
      background: rgba(16, 185, 129, 0.12);
      color: #10b981;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    .pillar-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.6rem;
    }
    .pillar-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
      flex-grow: 1;
      margin-bottom: 1.25rem;
    }
    .pillar-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    /* Systems Callout */
    .systems-callout {
      margin-top: 3rem;
      padding: 2.25rem 2.5rem;
      background: rgba(7, 13, 26, 0.85);
      border-color: rgba(45, 212, 191, 0.25);
      width: 100%;
      max-width: 100%;
    }
    @media (max-width: 640px) {
      .systems-callout {
        padding: 1.5rem 1rem;
      }
    }
    .callout-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
      gap: 2.5rem;
      align-items: center;
      width: 100%;
    }
    @media (max-width: 860px) {
      .callout-grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 2rem;
      }
    }
    .callout-label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent-teal);
      letter-spacing: 0.1em;
    }
    .callout-heading {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
      margin-top: 0.4rem;
      margin-bottom: 0.75rem;
    }
    .callout-text {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.65;
    }
    .callout-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    @media (max-width: 560px) {
      .callout-stats {
        grid-template-columns: 1fr;
      }
    }
    .stat-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 1.25rem 1rem;
      border-radius: 8px;
      text-align: center;
    }
    .stat-number {
      display: block;
      font-family: var(--font-mono);
      font-size: 1.4rem;
      font-weight: 700;
      color: #2dd4bf;
    }
    .stat-label {
      font-size: 0.75rem;
      color: #94a3b8;
      margin-top: 0.35rem;
      display: block;
    }
  `]
})
export class AboutComponent {
  @Input() profile: Profile | null = null;
}
