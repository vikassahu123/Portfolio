package com.vikas.portfolio.config;

import com.vikas.portfolio.entity.*;
import com.vikas.portfolio.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProfileRepository profileRepository;
    private final SkillRepository skillRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final FreelanceServiceRepository freelanceServiceRepository;

    public DataInitializer(ProfileRepository profileRepository,
                           SkillRepository skillRepository,
                           ProjectRepository projectRepository,
                           ExperienceRepository experienceRepository,
                           FreelanceServiceRepository freelanceServiceRepository) {
        this.profileRepository = profileRepository;
        this.skillRepository = skillRepository;
        this.projectRepository = projectRepository;
        this.experienceRepository = experienceRepository;
        this.freelanceServiceRepository = freelanceServiceRepository;
    }

    @Override
    public void run(String... args) {
        // Clear and re-sync to ensure updated user information is immediately reflected
        profileRepository.deleteAll();
        skillRepository.deleteAll();
        projectRepository.deleteAll();
        experienceRepository.deleteAll();
        freelanceServiceRepository.deleteAll();

        seedProfile();
        seedSkills();
        seedProjects();
        seedExperiences();
        seedFreelanceServices();
    }

    private void seedProfile() {
        Profile profile = new Profile(
                "Vikas Sahu",
                "Full Stack Software Engineer & AI / RAG Developer",
                "Software Engineer specializing in scalable enterprise backend platforms, microservices architecture, modern responsive frontends, and practical Generative AI workflows. Experienced in building robust Java and Spring Boot systems, Angular web applications, and LLM-powered autonomous automation with RAG and n8n.",
                "India (Available Worldwide & Remote)",
                "https://github.com/vikassahu123",
                "https://www.linkedin.com/in/vikas-sahu-364193244",
                "vikassahu54927@gmail.com",
                null,
                "Available for high-impact engineering & freelance collaborations",
                true
        );
        profileRepository.save(profile);
    }

    private void seedSkills() {
        List<Skill> skills = Arrays.asList(
                // BACKEND & SYSTEMS (Java & Spring Boot, Python & FastAPI, Microservices)
                new Skill("Java", "BACKEND", "java", "Enterprise OOP, multithreading, Streams, JVM performance tuning", 1, true),
                new Skill("Spring Boot", "BACKEND", "springboot", "Production-grade RESTful APIs, Spring Security, microservices architecture", 2, true),
                new Skill("Microservices Architecture", "BACKEND", "microservices", "Service decomposition, API gateways, decoupled domain boundaries", 3, true),
                new Skill("Spring Data JPA & Hibernate", "BACKEND", "hibernate", "Object-relational mapping, custom criteria queries, and transaction management", 4, true),
                new Skill("MySQL", "BACKEND", "mysql", "Relational schema design, ACID compliance, query indexing, and connection pooling", 5, true),
                new Skill("Python & FastAPI", "BACKEND", "python", "High-performance asynchronous REST APIs, Pydantic validation, AI pipeline bridges, and microservices", 6, true),
                new Skill("Docker", "BACKEND", "docker", "Containerization of microservices, Docker Compose, multi-stage builds", 7, true),
                new Skill("Maven & Gradle", "BACKEND", "maven", "Dependency management, build lifecycle automation, and packaging", 8, false),

                // FRONTEND & WEB
                new Skill("Angular", "FRONTEND", "angular", "Modern standalone architecture, signals, modular component design", 9, true),
                new Skill("TypeScript", "FRONTEND", "typescript", "Strict type safety, modern ESNext features, object-oriented design", 10, true),
                new Skill("RxJS", "FRONTEND", "rxjs", "Reactive event streams, operators, async state management", 11, true),
                new Skill("HTML5 & Responsive SCSS", "FRONTEND", "css", "Mobile-first layouts, modern CSS Grid/Flexbox, glassmorphic themes", 12, true),
                new Skill("REST API Integration", "FRONTEND", "api", "Typed HTTP client communication, error interceptors, loading states", 13, false),

                // AI & AUTOMATION (LangChain, RAG Pipeline, Gemini, OpenAI, n8n)
                new Skill("LangChain", "AI_AUTOMATION", "langchain", "Framework for building context-aware LLM agents, chains, document loaders, and vector stores", 14, true),
                new Skill("RAG Pipeline", "AI_AUTOMATION", "rag", "End-to-end Retrieval-Augmented Generation: semantic chunking, vector embeddings, context injection", 15, true),
                new Skill("LLM APIs (Gemini & OpenAI)", "AI_AUTOMATION", "llm", "Prompt engineering, function calling, streaming responses, structured JSON", 16, true),
                new Skill("n8n Agentic Automation", "AI_AUTOMATION", "n8n", "Visual orchestration of multi-step AI agents and webhook integrations", 17, true),
                new Skill("Autonomous Code Review Agents", "AI_AUTOMATION", "code-bot", "Automated GitHub pull request auditing, lint analysis, code feedback bots", 18, true),
                new Skill("Prompt Engineering", "AI_AUTOMATION", "prompt", "Few-shot prompting, system steering, reasoning chains, output validation", 19, false)
        );
        skillRepository.saveAll(skills);
    }

    private void seedProjects() {
        List<Project> projects = Arrays.asList(
                new Project(
                        "E-Shopping Zone Platform",
                        "Full-Stack E-Commerce & Microservices Solution",
                        "A complete enterprise-grade e-commerce application built with Spring Boot microservices and an Angular responsive interface. Features product catalog browsing, cart management, simulated secure checkout, and reliable MySQL persistence.",
                        "Spring Boot Microservices + Angular Standalone + MySQL + Docker + Clean Architecture",
                        "Java, Spring Boot, Angular, MySQL, Microservices, Docker, REST APIs",
                        "FULLSTACK",
                        "https://github.com/vikassahu123",
                        null,
                        "assets/images/project-ecommerce.svg",
                        1,
                        true
                ),
                new Project(
                        "AI Meeting Intelligence Platform",
                        "LLM-Driven Audio & Transcript Intelligence Platform",
                        "An advanced platform that processes meeting transcripts, extracts key decisions, synthesizes actionable summaries, and enables instant semantic search across meeting history using state-of-the-art LLMs.",
                        "Node.js / Express + LangChain LLM Orchestration + RAG Pipeline Context + Document Synthesis",
                        "JavaScript, LangChain, RAG Pipeline, LLMs, AI Pipelines, REST APIs",
                        "AI_SYSTEM",
                        "https://github.com/vikassahu123/Vikas-ai-meeting-intelligence",
                        null,
                        "assets/images/project-meeting-ai.svg",
                        2,
                        true
                ),
                new Project(
                        "AI Interview Coach",
                        "Real-Time Conversational AI Coaching & Evaluation System",
                        "Interactive interview coaching platform providing real-time evaluation of candidate responses, scenario-based questioning, and structured scoring on technical and communication skills.",
                        "Conversational AI + LangChain Dynamic Evaluation Framework + Scenario Engine",
                        "JavaScript, Generative AI, LangChain, RAG Pipeline, Conversational Agents",
                        "AI_SYSTEM",
                        "https://github.com/vikassahu123/Vikas-AI-Interview-Coach",
                        null,
                        "assets/images/project-interview-coach.svg",
                        3,
                        true
                ),
                new Project(
                        "Autonomous PR & Code Review Bot",
                        "n8n & Gemini AI Powered Automated GitHub Pull Request Auditor",
                        "An automated CI/CD code reviewing agent orchestrating n8n workflows and Google Gemini AI. Monitors pull requests, performs static code inspections, evaluates readability & security, and submits automated actionable review comments.",
                        "n8n Agentic Workflows + Google Gemini API + GitHub Webhooks + Event Triggers",
                        "n8n, Google Gemini AI, LangChain Concepts, GitHub Webhooks, CI/CD Automation",
                        "AUTOMATION",
                        "https://github.com/vikassahu123/n8nGithub_Code_reviewer",
                        null,
                        "assets/images/project-code-reviewer.svg",
                        4,
                        true
                )
        );
        projectRepository.saveAll(projects);
    }

    private void seedExperiences() {
        List<Experience> experiences = Arrays.asList(
                new Experience(
                        "Software Engineer",
                        "Enterprise Software Engineering",
                        "2025 - Present",
                        "Full-Time / Engineering Role",
                        "Developing scalable Java and Spring Boot microservices and modern responsive frontends for enterprise client engagements. Focused on decoupled services, clean architectural separation, and reliable MySQL data layers.",
                        "Developed scalable Java and Spring Boot microservices and RESTful APIs with clean layered architecture|Built modern, responsive Angular frontend components with TypeScript and reactive state management|Designed and optimized MySQL relational database schemas, query indexing, and automated connection pooling|Implemented secure API endpoints, input validation, and automated error handling across client workflows",
                        "Java, Spring Boot, Angular, MySQL, Microservices, Docker, Git",
                        1
                ),
                new Experience(
                        "Software Developer Intern",
                        "Software Engineering",
                        "May 2025 - Jun 2025",
                        "Internship",
                        "Assisted in developing backend services using Java, Spring Framework, and MySQL persistence while delivering modular Angular frontend templates for management systems.",
                        "Assisted in developing backend services using Java, Spring Framework, and MySQL database persistence|Designed reusable frontend templates using Angular, TypeScript, and responsive HTML5/CSS3|Implemented unit tests, database queries, and integrated REST API contracts for internal services|Collaborated on bug fixes, code documentation, and frontend UI optimization for mobile and desktop screens",
                        "Java, Spring Boot, Angular, TypeScript, MySQL, HTML5/CSS3, Git",
                        2
                )
        );
        experienceRepository.saveAll(experiences);
    }

    private void seedFreelanceServices() {
        List<FreelanceService> services = Arrays.asList(
                new FreelanceService(
                        "Full-Stack Web App Development",
                        "Most Popular",
                        "End-to-end development of custom, high-performance web applications with a robust Java 21 & Spring Boot backend and sleek, responsive Angular frontend.",
                        "Custom Angular UI (Mobile + Desktop Responsive)|Java 21 & Spring Boot REST API Architecture|MySQL Database Design & Schema Initialization|Authentication & Security Implementation|Production Build & Handover Support",
                        "2 - 4 Weeks",
                        "Startups, Businesses, & Product Teams needing a production-grade web application",
                        1,
                        true
                ),
                new FreelanceService(
                        "AI & RAG Integration / Automation Workflows",
                        "High Demand",
                        "Supercharge your business processes by integrating Large Language Models (Gemini/OpenAI), RAG retrieval over your company documents, and automated n8n workflows.",
                        "RAG System Implementation with Private Document Context|n8n Automated Workflow Pipelines & Webhooks|LLM API Integration (Gemini, OpenAI)|Autonomous Review & Data Extraction Agents|Complete Integration Documentation & Setup",
                        "1 - 3 Weeks",
                        "Companies seeking to automate repetitive tasks or build custom AI features",
                        2,
                        true
                ),
                new FreelanceService(
                        "Backend Microservices & REST API Engineering",
                        "Enterprise Grade",
                        "Design and implement clean, high-performance Spring Boot microservices, secure RESTful APIs, and optimized MySQL databases designed for reliable scale.",
                        "Clean Layered Microservices Architecture with Java 21|Optimized MySQL Schemas & Query Indexing|Swagger / OpenAPI Interactive Documentation|Secure JWT Authentication & Authorization|Unit & Integration Test Suite",
                        "1 - 3 Weeks",
                        "Teams needing scalable backend foundations or API integrations",
                        3,
                        true
                ),
                new FreelanceService(
                        "Architecture Review & Modernization",
                        "Consulting",
                        "Refactor legacy codebases, upgrade frontend/backend stacks to modern Angular and Java 21, and optimize system speed, security, and responsiveness.",
                        "Code Quality & Architecture Audit|Performance & Database Query Optimization|Mobile & Tablet Responsive Redesign|Modernization Migration Roadmap & Mentoring",
                        "3 - 7 Days",
                        "Projects facing technical debt or performance bottlenecks",
                        4,
                        true
                )
        );
        freelanceServiceRepository.saveAll(services);
    }
}
