import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../core/models/portfolio.models';
import { TerminalWidgetComponent } from '../../shared/terminal-widget.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TerminalWidgetComponent],
  template: `
    <section 
      class="hero-section" 
      (mousemove)="onMouseMove($event)"
      [style.--mouse-x]="mouseX"
      [style.--mouse-y]="mouseY">
      
      <!-- Interactive Mouse Spotlight Glow (Clean developer backdrop without particle circles) -->
      <div class="mouse-spotlight"></div>

      <div class="container hero-container">
        <!-- Left Column: Headline, Typewriter, Identity, CTAs -->
        <div class="hero-text-content">
          <!-- Role & Live Availability Pill -->
          <div class="hero-tag">
            <span class="pulse-indicator"></span>
            <span>AVAILABLE FOR HIRE &bull; FULL STACK &amp; AI SYSTEMS</span>
          </div>

          <!-- Name Headline with Dual-Tone Gradient Text -->
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-name">{{ profile?.fullName || 'Vikas Sahu' }}</span>
          </h1>

          <!-- Dynamic Role Typewriter (Front page effect) -->
          <div class="typewriter-container">
            <span class="typewriter-prefix">&gt; </span>
            <span class="typewriter-text">{{ currentTypedText }}</span>
            <span class="typewriter-cursor">|</span>
          </div>

          <h2 class="hero-subtitle">
            Building enterprise-grade Java &amp; Spring Boot microservices, high-performance Angular web apps, and autonomous LangChain &amp; RAG pipelines.
          </h2>

          <p class="hero-description">
            {{ profile?.bio || 'Software Engineer specializing in scalable enterprise backend platforms, microservices architecture, modern responsive frontends, and practical Generative AI workflows with LangChain, RAG pipelines, and n8n.' }}
          </p>

          <!-- Core Highlights Badges: 100% Unified Colors and Typography -->
          <div class="hero-badges">
            <span class="badge badge-tech">Java</span>
            <span class="badge badge-tech">Spring Boot</span>
            <span class="badge badge-tech">Python &amp; FastAPI</span>
            <span class="badge badge-tech">Microservices</span>
            <span class="badge badge-tech">Angular</span>
            <span class="badge badge-tech">MySQL</span>
            <span class="badge badge-tech">LangChain</span>
            <span class="badge badge-tech">RAG Pipeline</span>
            <span class="badge badge-tech">n8n Automation</span>
          </div>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>

            <a href="#services" class="btn-secondary">
              <span>Freelance &amp; Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <!-- Social Direct Links (GitHub, LinkedIn, Email) -->
          <div class="social-strip">
            <span class="social-label">Connect directly:</span>
            <a [href]="profile?.githubUrl || 'https://github.com/vikassahu123'" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>

            <a [href]="profile?.linkedinUrl || 'https://www.linkedin.com/in/vikas-sahu-364193244'" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a [href]="'mailto:' + (profile?.contactEmail || 'vikassahu54927@gmail.com')" class="social-link" title="Direct Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive System Profile Terminal (Code Editor) -->
        <div class="hero-terminal-col">
          <div class="terminal-centerpiece">
            <app-terminal-widget></app-terminal-widget>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: calc(100vh - 72px);
      display: flex;
      align-items: center;
      padding-top: 5.5rem;
      padding-bottom: 4.5rem;
      /* Clean developer background: deep slate matching uday-deshmukh.space tokens */
      background-color: var(--bg-base);
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 36px 36px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      overflow: hidden;
    }

    /* Interactive Mouse Spotlight Overlay */
    .mouse-spotlight {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(
        650px circle at var(--mouse-x, 50%) var(--mouse-y, 40%),
        rgba(56, 189, 248, 0.09) 0%,
        rgba(168, 85, 247, 0.05) 35%,
        transparent 70%
      );
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    .hero-container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 3rem;
      align-items: center;
    }
    @media (max-width: 992px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    /* Left Text Column */
    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      font-weight: 600;
      color: #2dd4bf;
      background: rgba(45, 212, 191, 0.08);
      border: 1px solid rgba(45, 212, 191, 0.25);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      margin-bottom: 1.25rem;
      letter-spacing: 0.05em;
    }
    .pulse-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
      animation: pulseGlow 2s infinite;
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.12;
      letter-spacing: -0.03em;
    }
    @media (min-width: 768px) {
      .hero-title {
        font-size: 3.75rem;
      }
    }

    /* Signature Gradient Name (Cyan to Violet Shimmer) */
    .gradient-name {
      background: linear-gradient(135deg, #38bdf8 0%, #2dd4bf 45%, #c084fc 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
      position: relative;
    }

    /* Dynamic Typewriter Role */
    .typewriter-container {
      display: flex;
      align-items: center;
      margin-top: 0.75rem;
      font-family: var(--font-mono);
      font-size: 1.15rem;
      font-weight: 600;
      color: #38bdf8;
      min-height: 1.8rem;
    }
    .typewriter-prefix {
      color: #a855f7;
      margin-right: 0.35rem;
    }
    .typewriter-text {
      color: #e2e8f0;
      text-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
    }
    .typewriter-cursor {
      display: inline-block;
      margin-left: 2px;
      color: #38bdf8;
      font-weight: 700;
      animation: cursorBlink 0.9s infinite;
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero-subtitle {
      font-size: 1.125rem;
      font-weight: 500;
      color: #94a3b8;
      margin-top: 1rem;
      line-height: 1.55;
    }
    @media (min-width: 768px) {
      .hero-subtitle {
        font-size: 1.25rem;
      }
    }

    .hero-description {
      font-size: 0.9375rem;
      color: #64748b;
      margin-top: 0.85rem;
      line-height: 1.65;
      max-width: 600px;
    }

    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.4rem;
    }

    .badge-tech {
      background: rgba(45, 212, 191, 0.08);
      border: 1px solid rgba(45, 212, 191, 0.3);
      color: #2dd4bf;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      font-weight: 500;
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .badge-tech:hover {
      border-color: #2dd4bf;
      background: rgba(45, 212, 191, 0.16);
      transform: translateY(-1px);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      margin-top: 1.85rem;
    }

    .social-strip {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;
      margin-top: 1.75rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .social-label {
      font-size: 0.875rem;
      color: #64748b;
      font-family: var(--font-mono);
    }
    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .social-link:hover {
      color: #2dd4bf;
      transform: translateY(-1px);
    }

    /* Right Column: Code Editor Terminal Widget */
    .hero-terminal-col {
      width: 100%;
      position: relative;
    }
    .terminal-centerpiece {
      position: relative;
      width: 100%;
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() profile: Profile | null = null;

  mouseX = '50%';
  mouseY = '40%';

  // Dynamic Typewriter Roles
  private readonly roles = [
    'Full-Stack Software Engineer',
    'Java & Spring Boot Architect',
    'LangChain & RAG Pipeline Developer',
    'Angular & Modern UI Specialist'
  ];
  currentTypedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterTimer: any = null;

  ngOnInit() {
    this.startTypewriter();
  }

  ngOnDestroy() {
    if (this.typewriterTimer) {
      clearTimeout(this.typewriterTimer);
    }
  }

  onMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.mouseX = `${e.clientX - rect.left}px`;
    this.mouseY = `${e.clientY - rect.top}px`;
  }

  private startTypewriter() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.currentTypedText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentTypedText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 35 : 70;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      // Pause at full word
      typeSpeed = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 350;
    }

    this.typewriterTimer = setTimeout(() => this.startTypewriter(), typeSpeed);
  }
}


