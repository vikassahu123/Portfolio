import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar-wrapper" [class.scrolled]="isScrolled">
      <!-- 2.5px Neon Teal-Cyan Scroll Progress Indicator -->
      <div 
        class="scroll-progress-bar" 
        [class.at-start]="scrollProgress < 0.5"
        [style.width.%]="scrollProgress"
        role="progressbar" 
        [attr.aria-valuenow]="scrollProgress.toFixed(0)" 
        aria-valuemin="0" 
        aria-valuemax="100"
        aria-label="Reading progress">
      </div>

      <div class="container nav-content">
        <!-- Brand Logo -->
        <a href="#" class="brand-logo">
          <span class="logo-box">VS</span>
          <div class="brand-text">
            <span class="brand-name">Vikas Sahu</span>
            <span class="brand-role">Software Engineer</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link highlight-pill">Experience</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#services" class="nav-link">Freelance</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <!-- Right Side: Availability & Contact CTA -->
        <div class="nav-actions">
          <div class="status-badge hidden-sm">
            <span class="status-indicator"></span>
            <span>Open for Hire</span>
          </div>
          <a href="#contact" class="btn-primary nav-cta">
            <span>Hire Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
            <svg *ngIf="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            <svg *ngIf="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div class="mobile-menu" [class.open]="mobileMenuOpen">
        <div class="container mobile-links">
          <a href="#about" class="mobile-link" (click)="closeMobileMenu()">About</a>
          <a href="#skills" class="mobile-link" (click)="closeMobileMenu()">Skills</a>
          <a href="#experience" class="mobile-link" (click)="closeMobileMenu()">Experience</a>
          <a href="#projects" class="mobile-link" (click)="closeMobileMenu()">Projects</a>
          <a href="#services" class="mobile-link" (click)="closeMobileMenu()">Freelance &amp; Services</a>
          <a href="#contact" class="mobile-link contact-mobile" (click)="closeMobileMenu()">Contact Me</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(3, 7, 18, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      transition: all 0.3s ease;
    }
    .navbar-wrapper.scrolled {
      background: rgba(3, 7, 18, 0.92);
      border-bottom-color: rgba(45, 212, 191, 0.2);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    }

    /* 2.5px Neon Teal-Cyan Scroll Progress Indicator */
    .scroll-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 2.5px;
      background: linear-gradient(90deg, #0d9488 0%, #14b8a6 25%, #2dd4bf 55%, #38bdf8 85%, #818cf8 100%);
      box-shadow: 0 0 10px rgba(45, 212, 191, 0.8), 0 0 18px rgba(56, 189, 248, 0.5);
      z-index: 1010;
      transition: width 0.08s ease-out;
      pointer-events: none;
    }
    .scroll-progress-bar::after {
      content: '';
      position: absolute;
      right: 0;
      top: -2px;
      width: 6.5px;
      height: 6.5px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 0 10px #2dd4bf, 0 0 16px #38bdf8;
      opacity: 1;
      transition: opacity 0.2s ease;
    }
    .scroll-progress-bar.at-start::after {
      opacity: 0;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    /* Brand Logo */
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }
    .logo-box {
      display: grid;
      place-items: center;
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: rgba(45, 212, 191, 0.12);
      border: 1px solid rgba(45, 212, 191, 0.4);
      color: #2dd4bf;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      font-weight: 700;
      transition: all 0.3s ease;
    }
    .brand-logo:hover .logo-box {
      border-color: #2dd4bf;
      box-shadow: 0 0 16px rgba(45, 212, 191, 0.4);
    }
    .brand-text {
      display: flex;
      flex-direction: column;
    }
    .brand-name {
      font-weight: 700;
      font-size: 1rem;
      color: #ffffff;
      line-height: 1.2;
    }
    .brand-role {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #94a3b8;
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    @media (max-width: 860px) {
      .desktop-nav {
        display: none;
      }
    }
    .nav-link {
      padding: 0.5rem 0.85rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #94a3b8;
      text-decoration: none;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .nav-link:hover {
      color: #2dd4bf;
      background: rgba(255, 255, 255, 0.04);
    }
    .highlight-pill {
      color: #2dd4bf;
      background: rgba(45, 212, 191, 0.08);
      border: 1px solid rgba(45, 212, 191, 0.25);
    }

    /* Actions */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #34d399;
    }
    @media (max-width: 1024px) {
      .hidden-sm {
        display: none;
      }
    }
    .status-indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
    }
    .nav-cta {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    @media (max-width: 640px) {
      .nav-cta {
        display: none;
      }
    }

    /* Mobile Toggle */
    .mobile-toggle {
      display: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      width: 38px;
      height: 38px;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    @media (max-width: 860px) {
      .mobile-toggle {
        display: inline-flex;
      }
    }

    /* Mobile Menu Drawer */
    .mobile-menu {
      max-height: 0;
      overflow: hidden;
      background: #070d1a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .mobile-menu.open {
      max-height: 360px;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      gap: 0.5rem;
    }
    .mobile-link {
      padding: 0.65rem 0.75rem;
      color: #cbd5e1;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .mobile-link:hover {
      background: rgba(45, 212, 191, 0.1);
      color: #2dd4bf;
    }
    .contact-mobile {
      color: #2dd4bf;
      font-weight: 600;
      border: 1px solid rgba(45, 212, 191, 0.3);
      text-align: center;
      margin-top: 0.5rem;
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;
  scrollProgress = 0;

  ngOnInit() {
    this.updateScrollMetrics();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll() {
    this.updateScrollMetrics();
  }

  private updateScrollMetrics() {
    if (typeof window === 'undefined') return;
    const docElem = document.documentElement;
    const body = document.body;
    const winScroll = docElem.scrollTop || body.scrollTop || 0;
    const height = (docElem.scrollHeight || body.scrollHeight) - docElem.clientHeight;

    this.scrollProgress = height > 0 ? Math.min(100, Math.max(0, (winScroll / height) * 100)) : 0;
    this.isScrolled = winScroll > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
