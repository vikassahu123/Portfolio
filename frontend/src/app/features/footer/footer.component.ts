import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer-wrapper">
      <div class="container footer-content">
        <!-- Brand & Summary -->
        <div class="footer-top">
          <div class="footer-brand">
            <div class="brand-badge">VS</div>
            <div>
              <h3 class="brand-title">{{ profile?.fullName || 'Vikas Sahu' }}</h3>
              <p class="brand-tagline">Full Stack Software Engineer &bull; Cloud Systems &bull; AI / RAG</p>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div class="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#services">Freelance</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Bottom Row: Stack badges & Copyright -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} Vikas Sahu. Engineered with Java, Spring Boot, Angular &amp; MySQL.
          </p>

          <div class="footer-stack-badges">
            <span class="f-badge">Java</span>
            <span class="f-badge">Spring Boot</span>
            <span class="f-badge">Angular</span>
            <span class="f-badge">MySQL</span>
            <span class="f-badge">RAG with LLM</span>
            <span class="f-badge">n8n</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-wrapper {
      background: #02050e;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 4rem 0 2.5rem 0;
    }
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .brand-badge {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(45, 212, 191, 0.12);
      border: 1px solid rgba(45, 212, 191, 0.35);
      color: #2dd4bf;
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 1.1rem;
      display: grid;
      place-items: center;
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
    }
    .brand-tagline {
      font-size: 0.8125rem;
      color: #94a3b8;
      margin-top: 0.15rem;
    }

    .footer-nav {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .footer-nav a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    .footer-nav a:hover {
      color: #2dd4bf;
    }

    .footer-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.05);
      margin: 2rem 0;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .copyright {
      font-size: 0.8125rem;
      color: #64748b;
    }
    .footer-stack-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .f-badge {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
    }
  `]
})
export class FooterComponent {
  @Input() profile: Profile | null = null;
  currentYear = new Date().getFullYear();
}
