import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header reveal-box">
          <span class="section-tag">Technical Competencies</span>
          <h2 class="section-title">Production-tested tech stack.</h2>
          <p class="section-subtitle">
            Core technologies and architectures I use to build scalable enterprise microservices, modern frontends, and practical AI systems.
          </p>

          <!-- Interactive Category Filter Tabs -->
          <div class="filter-tabs">
            <button 
              type="button"
              class="filter-btn" 
              [class.active]="selectedCategory === 'ALL'"
              (click)="setCategory('ALL')">
              All Technologies ({{ skills.length }})
            </button>
            <button 
              type="button"
              class="filter-btn" 
              [class.active]="selectedCategory === 'BACKEND'"
              (click)="setCategory('BACKEND')">
              Backend &amp; Systems ({{ getCount('BACKEND') }})
            </button>
            <button 
              type="button"
              class="filter-btn" 
              [class.active]="selectedCategory === 'FRONTEND'"
              (click)="setCategory('FRONTEND')">
              Frontend &amp; Web ({{ getCount('FRONTEND') }})
            </button>
            <button 
              type="button"
              class="filter-btn" 
              [class.active]="selectedCategory === 'AI_AUTOMATION'"
              (click)="setCategory('AI_AUTOMATION')">
              AI &amp; Automation ({{ getCount('AI_AUTOMATION') }})
            </button>
          </div>
        </div>

        <!-- Skills Grid with Instant Feedback and Staggered Scroll Reveal -->
        <div class="grid-3 skills-grid">
          <div *ngFor="let skill of filteredSkills; let i = index" 
               class="glass-card skill-card animate-fade reveal-box"
               [ngClass]="'stagger-' + ((i % 3) + 1)">
            <div class="skill-card-top">
              <div class="skill-icon-badge" [ngClass]="getCategoryBadgeClass(skill.category)">
                <span class="skill-symbol">&lt;/&gt;</span>
              </div>
              <div class="skill-header-meta">
                <h3 class="skill-name">{{ skill.name }}</h3>
                <span class="skill-category-label">{{ getCategoryDisplayName(skill.category) }}</span>
              </div>
            </div>

            <p class="skill-description">
              {{ skill.description }}
            </p>

            <div class="skill-card-bottom">
              <span class="skill-status-tag" *ngIf="skill.featured">
                <span class="dot"></span> Core Expertise
              </span>
              <span class="skill-status-tag standard" *ngIf="!skill.featured">
                Standard Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background: var(--bg-base);
    }
    
    /* Filter Tabs */
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-top: 1.75rem;
    }
    .filter-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      font-weight: 500;
      padding: 0.6rem 1.15rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
    }
    .filter-btn:hover {
      color: #f8fafc;
      border-color: rgba(45, 212, 191, 0.3);
      background: rgba(255, 255, 255, 0.08);
    }
    .filter-btn.active {
      background: rgba(45, 212, 191, 0.15);
      border-color: #2dd4bf;
      color: #2dd4bf;
      box-shadow: 0 0 16px rgba(45, 212, 191, 0.25);
    }

    /* Skill Card */
    .skill-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s ease;
    }
    .animate-fade {
      animation: fadeIn 0.25s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .skill-card-top {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .skill-icon-badge {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      font-weight: bold;
      flex-shrink: 0;
    }
    .badge-backend {
      background: rgba(45, 212, 191, 0.12);
      border: 1px solid rgba(45, 212, 191, 0.35);
      color: #2dd4bf;
    }
    .badge-frontend {
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38bdf8;
    }
    .badge-ai {
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #f59e0b;
    }

    .skill-name {
      font-size: 1.125rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.25;
    }
    .skill-category-label {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: #64748b;
      display: block;
      margin-top: 0.2rem;
    }
    .skill-description {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }
    .skill-card-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .skill-status-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #2dd4bf;
    }
    .skill-status-tag.standard {
      color: #64748b;
    }
    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #2dd4bf;
    }
  `]
})
export class SkillsComponent implements OnInit, OnChanges {
  @Input() skills: Skill[] = [];

  selectedCategory = 'ALL';
  filteredSkills: Skill[] = [];

  ngOnInit(): void {
    this.applyFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skills']) {
      this.applyFilter();
    }
  }

  setCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilter();
  }

  getCount(category: string): number {
    if (!this.skills) return 0;
    return this.skills.filter(s => s.category?.toUpperCase() === category.toUpperCase()).length;
  }

  private applyFilter() {
    if (!this.skills || this.skills.length === 0) {
      this.filteredSkills = [];
      return;
    }
    if (this.selectedCategory === 'ALL') {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(
        s => s.category?.toUpperCase() === this.selectedCategory.toUpperCase()
      );
    }
  }

  getCategoryDisplayName(category: string): string {
    switch (category?.toUpperCase()) {
      case 'BACKEND': return 'Backend & Systems';
      case 'FRONTEND': return 'Frontend & Web UI';
      case 'AI_AUTOMATION': return 'AI & Automation';
      default: return category;
    }
  }

  getCategoryBadgeClass(category: string): string {
    switch (category?.toUpperCase()) {
      case 'BACKEND': return 'badge-backend';
      case 'FRONTEND': return 'badge-frontend';
      case 'AI_AUTOMATION': return 'badge-ai';
      default: return 'badge-backend';
    }
  }
}
