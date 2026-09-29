import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './core/services/api.service';
import { ToastService, ToastMessage } from './core/services/toast.service';
import { Profile, Skill, Project, Experience, FreelanceService } from './core/models/portfolio.models';

import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FreelanceComponent } from './features/freelance/freelance.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    FreelanceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ContactComponent) contactComponent!: ContactComponent;

  profile: Profile | null = null;
  skills: Skill[] = [];
  projects: Project[] = [];
  experiences: Experience[] = [];
  services: FreelanceService[] = [];
  toasts: ToastMessage[] = [];

  private scrollObserver: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    // Listen to toasts
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });

    // Fetch live data from Spring Boot REST API
    this.apiService.getProfile().subscribe(p => (this.profile = p));
    this.apiService.getSkills().subscribe(s => {
      this.skills = s;
      setTimeout(() => this.scanAndObserve(), 100);
    });
    this.apiService.getProjects().subscribe(p => {
      this.projects = p;
      setTimeout(() => this.scanAndObserve(), 100);
    });
    this.apiService.getExperiences().subscribe(e => {
      this.experiences = e;
      setTimeout(() => this.scanAndObserve(), 100);
    });
    this.apiService.getServices().subscribe(s => {
      this.services = s;
      setTimeout(() => this.scanAndObserve(), 100);
    });
  }

  ngAfterViewInit() {
    this.setupScrollObserver();
  }

  ngOnDestroy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  private setupScrollObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        } else {
          // Dynamic In/Out: If element is below the viewport, reset is-revealed so it pops up again when scrolled into view
          const rect = entry.boundingClientRect;
          if (rect.top > 80) {
            entry.target.classList.remove('is-revealed');
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    this.scanAndObserve();

    // Re-scan when child elements render
    this.mutationObserver = new MutationObserver(() => {
      this.scanAndObserve();
    });

    this.mutationObserver.observe(this.elRef.nativeElement, {
      childList: true,
      subtree: true
    });
  }

  private scanAndObserve() {
    if (!this.scrollObserver) return;
    const elements = this.elRef.nativeElement.querySelectorAll('.reveal-box:not([data-observed="true"])');
    elements.forEach((el: Element) => {
      el.setAttribute('data-observed', 'true');
      this.scrollObserver?.observe(el);
    });
  }

  handleServiceSelected(serviceTitle: string) {
    if (this.contactComponent) {
      this.contactComponent.setService(serviceTitle);
    }
  }

  getInstagramUrl(): string {
    return 'https://www.instagram.com/vikasofftrack?utm_source=qr&stkn=MWxtbW5taG0yNXM2eA==';
  }

  dismissToast(id: string) {
    this.toastService.remove(id);
  }
}
