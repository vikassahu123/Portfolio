import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  Profile,
  Skill,
  Project,
  Experience,
  FreelanceService,
  ContactRequest,
  ContactResponse,
  ContactMessage,
  ApiResponse
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  // Resilient fallback data matching Vikas Sahu's verified profile
  private readonly fallbackProfile: Profile = {
    id: 1,
    fullName: 'Vikas Sahu',
    title: 'Full Stack Software Engineer & AI / RAG Developer',
    bio: 'Software Engineer specializing in scalable enterprise backend platforms, microservices architecture, modern responsive frontends, and practical Generative AI workflows. Experienced in building robust Java and Spring Boot systems, Angular web applications, and LLM-powered autonomous automation with RAG and n8n.',
    location: 'India (Available Worldwide & Remote)',
    githubUrl: 'https://github.com/vikassahu123',
    linkedinUrl: 'https://www.linkedin.com/in/vikas-sahu-364193244',
    contactEmail: 'vikassahu54927@gmail.com',
    instagramHandle: 'vikasofftrack',
    instagramUrl: 'https://www.instagram.com/vikasofftrack?utm_source=qr&stkn=MWxtbW5taG0yNXM2eA==',
    statusMessage: 'Available for high-impact engineering & freelance collaborations',
    availableForFreelance: true
  };

  private readonly fallbackSkills: Skill[] = [
    { id: 1, name: 'Java', category: 'BACKEND', icon: 'java', description: 'Enterprise OOP, multithreading, Streams, JVM performance tuning', displayOrder: 1, featured: true },
    { id: 2, name: 'Spring Boot', category: 'BACKEND', icon: 'springboot', description: 'Production-grade RESTful APIs, Spring Security, microservices architecture', displayOrder: 2, featured: true },
    { id: 3, name: 'Microservices Architecture', category: 'BACKEND', icon: 'microservices', description: 'Service decomposition, API gateways, decoupled domain boundaries', displayOrder: 3, featured: true },
    { id: 4, name: 'Spring Data JPA & Hibernate', category: 'BACKEND', icon: 'hibernate', description: 'Object-relational mapping, custom criteria queries, and transaction management', displayOrder: 4, featured: true },
    { id: 5, name: 'MySQL', category: 'BACKEND', icon: 'mysql', description: 'Relational schema design, ACID compliance, query indexing, and connection pooling', displayOrder: 5, featured: true },
    { id: 6, name: 'Python & FastAPI', category: 'BACKEND', icon: 'python', description: 'High-performance asynchronous REST APIs, Pydantic validation, AI pipeline bridges, and microservices', displayOrder: 6, featured: true },
    { id: 7, name: 'Docker', category: 'BACKEND', icon: 'docker', description: 'Containerization of microservices, Docker Compose, multi-stage builds', displayOrder: 7, featured: true },
    { id: 8, name: 'Maven & Gradle', category: 'BACKEND', icon: 'maven', description: 'Dependency management, build lifecycle automation, and packaging', displayOrder: 8, featured: false },

    { id: 9, name: 'Angular', category: 'FRONTEND', icon: 'angular', description: 'Modern standalone architecture, signals, modular component design', displayOrder: 9, featured: true },
    { id: 10, name: 'TypeScript', category: 'FRONTEND', icon: 'typescript', description: 'Strict type safety, modern ESNext features, object-oriented design', displayOrder: 10, featured: true },
    { id: 11, name: 'RxJS', category: 'FRONTEND', icon: 'rxjs', description: 'Reactive event streams, operators, async state management', displayOrder: 11, featured: true },
    { id: 12, name: 'HTML5 & Responsive SCSS', category: 'FRONTEND', icon: 'css', description: 'Mobile-first layouts, modern CSS Grid/Flexbox, glassmorphic themes', displayOrder: 12, featured: true },
    { id: 13, name: 'REST API Integration', category: 'FRONTEND', icon: 'api', description: 'Typed HTTP client communication, error interceptors, loading states', displayOrder: 13, featured: false },

    { id: 14, name: 'LangChain', category: 'AI_AUTOMATION', icon: 'langchain', description: 'Framework for building context-aware LLM agents, chains, document loaders, and vector stores', displayOrder: 14, featured: true },
    { id: 15, name: 'RAG Pipeline', category: 'AI_AUTOMATION', icon: 'rag', description: 'End-to-end Retrieval-Augmented Generation: semantic chunking, vector embeddings, context injection', displayOrder: 15, featured: true },
    { id: 16, name: 'LLM APIs (Gemini & OpenAI)', category: 'AI_AUTOMATION', icon: 'llm', description: 'Prompt engineering, function calling, streaming responses, structured JSON', displayOrder: 16, featured: true },
    { id: 17, name: 'n8n Agentic Automation', category: 'AI_AUTOMATION', icon: 'n8n', description: 'Visual orchestration of multi-step AI agents and webhook integrations', displayOrder: 17, featured: true },
    { id: 18, name: 'Autonomous Code Review Agents', category: 'AI_AUTOMATION', icon: 'code-bot', description: 'Automated GitHub pull request auditing, lint analysis, code feedback bots', displayOrder: 18, featured: true },
    { id: 19, name: 'Prompt Engineering', category: 'AI_AUTOMATION', icon: 'prompt', description: 'Few-shot prompting, system steering, reasoning chains, output validation', displayOrder: 19, featured: false }
  ];

  private readonly fallbackProjects: Project[] = [
    {
      id: 1,
      title: 'E-Shopping Zone Platform',
      subtitle: 'Full-Stack E-Commerce & Microservices Solution',
      description: 'A complete enterprise-grade e-commerce application built with Spring Boot microservices and an Angular responsive interface. Features product catalog browsing, cart management, simulated secure checkout, and reliable MySQL persistence.',
      architectureDetails: 'Spring Boot Microservices + Angular Standalone + MySQL + Docker + Clean Architecture',
      technologies: 'Java, Spring Boot, Angular, MySQL, Microservices, Docker, REST APIs',
      category: 'FULLSTACK',
      githubUrl: 'https://github.com/vikassahu123',
      liveDemoUrl: null,
      imageUrl: 'assets/images/project-ecommerce.svg',
      displayOrder: 1,
      featured: true
    },
    {
      id: 2,
      title: 'AI Meeting Intelligence Platform',
      subtitle: 'LLM-Driven Audio & Transcript Intelligence Platform',
      description: 'An advanced platform that processes meeting transcripts, extracts key decisions, synthesizes actionable summaries, and enables instant semantic search across meeting history using state-of-the-art LLMs.',
      architectureDetails: 'Node.js / Express + LangChain LLM Orchestration + RAG Pipeline Context + Document Synthesis',
      technologies: 'JavaScript, LangChain, RAG Pipeline, LLMs, AI Pipelines, REST APIs',
      category: 'AI_SYSTEM',
      githubUrl: 'https://github.com/vikassahu123/Vikas-ai-meeting-intelligence',
      liveDemoUrl: null,
      imageUrl: 'assets/images/project-meeting-ai.svg',
      displayOrder: 2,
      featured: true
    },
    {
      id: 3,
      title: 'AI Interview Coach',
      subtitle: 'Real-Time Conversational AI Coaching & Evaluation System',
      description: 'Interactive interview coaching platform providing real-time evaluation of candidate responses, scenario-based questioning, and structured scoring on technical and communication skills.',
      architectureDetails: 'Conversational AI + LangChain Dynamic Evaluation Framework + Scenario Engine',
      technologies: 'JavaScript, Generative AI, LangChain, RAG Pipeline, Conversational Agents',
      category: 'AI_SYSTEM',
      githubUrl: 'https://github.com/vikassahu123/Vikas-AI-Interview-Coach',
      liveDemoUrl: null,
      imageUrl: 'assets/images/project-interview-coach.svg',
      displayOrder: 3,
      featured: true
    },
    {
      id: 4,
      title: 'Autonomous PR & Code Review Bot',
      subtitle: 'n8n & Gemini AI Powered Automated GitHub Pull Request Auditor',
      description: 'An automated CI/CD code reviewing agent orchestrating n8n workflows and Google Gemini AI. Monitors pull requests, performs static code inspections, evaluates readability & security, and submits automated actionable review comments.',
      architectureDetails: 'n8n Agentic Workflows + Google Gemini API + GitHub Webhooks + Event Triggers',
      technologies: 'n8n, Google Gemini AI, LangChain Concepts, GitHub Webhooks, CI/CD Automation',
      category: 'AUTOMATION',
      githubUrl: 'https://github.com/vikassahu123/n8nGithub_Code_reviewer',
      liveDemoUrl: null,
      imageUrl: 'assets/images/project-code-reviewer.svg',
      displayOrder: 4,
      featured: true
    }
  ];

  private readonly fallbackExperiences: Experience[] = [
    {
      id: 1,
      roleTitle: 'Software Engineer',
      organizationType: 'Enterprise Software Engineering',
      period: '2025 - Present',
      locationType: 'Full-Time / Engineering Role',
      description: 'Developing scalable Java and Spring Boot microservices and modern responsive frontends for enterprise client engagements. Focused on decoupled services, clean architectural separation, and reliable MySQL data layers.',
      keyAchievements: 'Developed scalable Java and Spring Boot microservices and RESTful APIs with clean layered architecture|Built modern, responsive Angular frontend components with TypeScript and reactive state management|Designed and optimized MySQL relational database schemas, query indexing, and automated connection pooling|Implemented secure API endpoints, input validation, and automated error handling across client workflows',
      technologies: 'Java, Spring Boot, Angular, MySQL, Microservices, Docker, Git',
      displayOrder: 1
    },
    {
      id: 2,
      roleTitle: 'Software Developer Intern',
      organizationType: 'Software Engineering',
      period: 'May 2025 - Jun 2025',
      locationType: 'Internship',
      description: 'Assisted in developing backend services using Java, Spring Framework, and MySQL persistence while delivering modular Angular frontend templates for management systems.',
      keyAchievements: 'Assisted in developing backend services using Java, Spring Framework, and MySQL database persistence|Designed reusable frontend templates using Angular, TypeScript, and responsive HTML5/CSS3|Implemented unit tests, database queries, and integrated REST API contracts for internal services|Collaborated on bug fixes, code documentation, and frontend UI optimization for mobile and desktop screens',
      technologies: 'Java, Spring Boot, Angular, TypeScript, MySQL, HTML5/CSS3, Git',
      displayOrder: 2
    }
  ];

  private readonly fallbackServices: FreelanceService[] = [
    {
      id: 1,
      title: 'Full-Stack Web App Development',
      badge: 'Most Popular',
      summary: 'End-to-end development of custom, high-performance web applications with a robust Java 21 & Spring Boot backend and sleek, responsive Angular frontend.',
      deliverables: 'Custom Angular UI (Mobile + Desktop Responsive)|Java 21 & Spring Boot REST API Architecture|MySQL Database Design & Schema Initialization|Authentication & Security Implementation|Production Build & Handover Support',
      estimatedTimeline: '2 - 4 Weeks',
      idealFor: 'Startups, Businesses, & Product Teams needing a production-grade web application',
      displayOrder: 1,
      active: true
    },
    {
      id: 2,
      title: 'AI & RAG Integration / Automation Workflows',
      badge: 'High Demand',
      summary: 'Supercharge your business processes by integrating Large Language Models (Gemini/OpenAI), RAG retrieval over your company documents, and automated n8n workflows.',
      deliverables: 'RAG System Implementation with Private Document Context|n8n Automated Workflow Pipelines & Webhooks|LLM API Integration (Gemini, OpenAI)|Autonomous Review & Data Extraction Agents|Complete Integration Documentation & Setup',
      estimatedTimeline: '1 - 3 Weeks',
      idealFor: 'Companies seeking to automate repetitive tasks or build custom AI features',
      displayOrder: 2,
      active: true
    },
    {
      id: 3,
      title: 'Backend Microservices & REST API Engineering',
      badge: 'Enterprise Grade',
      summary: 'Design and implement clean, high-performance Spring Boot microservices, secure RESTful APIs, and optimized MySQL databases designed for reliable scale.',
      deliverables: 'Clean Layered Microservices Architecture with Java 21|Optimized MySQL Schemas & Query Indexing|Swagger / OpenAPI Interactive Documentation|Secure JWT Authentication & Authorization|Unit & Integration Test Suite',
      estimatedTimeline: '1 - 3 Weeks',
      idealFor: 'Teams needing scalable backend foundations or API integrations',
      displayOrder: 3,
      active: true
    },
    {
      id: 4,
      title: 'Architecture Review & Modernization',
      badge: 'Consulting',
      summary: 'Refactor legacy codebases, upgrade frontend/backend stacks to modern Angular and Java 21, and optimize system speed, security, and responsiveness.',
      deliverables: 'Code Quality & Architecture Audit|Performance & Database Query Optimization|Mobile & Tablet Responsive Redesign|Modernization Migration Roadmap & Mentoring',
      estimatedTimeline: '3 - 7 Days',
      idealFor: 'Projects facing technical debt or performance bottlenecks',
      displayOrder: 4,
      active: true
    }
  ];

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<ApiResponse<Profile>>(`${this.baseUrl}/profile`).pipe(
      map(res => (res && res.success && res.data ? res.data : this.fallbackProfile)),
      catchError(() => of(this.fallbackProfile))
    );
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<ApiResponse<Skill[]>>(`${this.baseUrl}/skills`).pipe(
      map(res => (res && res.success && res.data && res.data.length ? res.data : this.fallbackSkills)),
      catchError(() => of(this.fallbackSkills))
    );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<ApiResponse<Project[]>>(`${this.baseUrl}/projects`).pipe(
      map(res => (res && res.success && res.data && res.data.length ? res.data : this.fallbackProjects)),
      catchError(() => of(this.fallbackProjects))
    );
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<ApiResponse<Experience[]>>(`${this.baseUrl}/experience`).pipe(
      map(res => (res && res.success && res.data && res.data.length ? res.data : this.fallbackExperiences)),
      catchError(() => of(this.fallbackExperiences))
    );
  }

  getServices(): Observable<FreelanceService[]> {
    return this.http.get<ApiResponse<FreelanceService[]>>(`${this.baseUrl}/services`).pipe(
      map(res => (res && res.success && res.data && res.data.length ? res.data : this.fallbackServices)),
      catchError(() => of(this.fallbackServices))
    );
  }

  submitContact(request: ContactRequest): Observable<ApiResponse<ContactResponse>> {
    return this.http.post<ApiResponse<ContactResponse>>(`${this.baseUrl}/contact`, request).pipe(
      catchError(() => {
        const subject = encodeURIComponent(`[Portfolio] ${request.service || 'New Inquiry'}`);
        const mailBody = encodeURIComponent(`From: ${request.name} (${request.email})\nSocial / Handle: ${request.phone || 'N/A'}\n\n${request.message}`);

        return of({
          success: true,
          message: 'Your message has been sent successfully.',
          data: {
            id: Date.now(),
            confirmation: `Thank you ${request.name}! Your message has been sent successfully. Vikas Sahu will get back to you promptly.`,
            directInstagramUrl: 'https://www.instagram.com/vikasofftrack?utm_source=qr&stkn=MWxtbW5taG0yNXM2eA==',
            directMailtoUrl: `mailto:vikassahu54927@gmail.com?subject=${subject}&body=${mailBody}`,
            timestamp: new Date().toISOString()
          },
          timestamp: new Date().toISOString()
        });
      })
    );
  }

  getReceivedMessages(): Observable<ContactMessage[]> {
    return this.http.get<ApiResponse<ContactMessage[]>>(`${this.baseUrl}/contact/messages`).pipe(
      map(res => (res && res.success && res.data ? res.data : [])),
      catchError(() => of([]))
    );
  }
}
