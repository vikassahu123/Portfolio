-- ==============================================================
-- Database Initialization Script for Vikas Sahu Portfolio
-- Compatible with MySQL 8.0+
-- Database: portfolio_db
-- ==============================================================

CREATE DATABASE IF NOT EXISTS `portfolio_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `portfolio_db`;

-- Drop existing tables in reverse dependency order if recreating manually
DROP TABLE IF EXISTS `contact_messages`;
DROP TABLE IF EXISTS `freelance_services`;
DROP TABLE IF EXISTS `experiences`;
DROP TABLE IF EXISTS `projects`;
DROP TABLE IF EXISTS `skills`;
DROP TABLE IF EXISTS `profile`;

-- 1. Profile Table
CREATE TABLE `profile` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `bio` TEXT,
    `location` VARCHAR(255),
    `github_url` VARCHAR(255),
    `linkedin_url` VARCHAR(255),
    `contact_email` VARCHAR(255),
    `whatsapp_number` VARCHAR(50),
    `status_message` VARCHAR(255),
    `available_for_freelance` BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Skills Table
CREATE TABLE `skills` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `category` VARCHAR(50) NOT NULL, -- BACKEND, FRONTEND, AI_AUTOMATION
    `icon` VARCHAR(100),
    `description` VARCHAR(500),
    `display_order` INT DEFAULT 0,
    `featured` BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Projects Table
CREATE TABLE `projects` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `subtitle` VARCHAR(255),
    `description` TEXT,
    `architecture_details` TEXT,
    `technologies` VARCHAR(500),
    `category` VARCHAR(50),
    `github_url` VARCHAR(255),
    `live_demo_url` VARCHAR(255),
    `image_url` VARCHAR(255),
    `display_order` INT DEFAULT 0,
    `featured` BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Experiences Table
CREATE TABLE `experiences` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `role_title` VARCHAR(255) NOT NULL,
    `organization_type` VARCHAR(255) NOT NULL,
    `period` VARCHAR(100),
    `location_type` VARCHAR(100),
    `description` TEXT,
    `key_achievements` TEXT,
    `technologies` VARCHAR(500),
    `display_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Freelance Services Table
CREATE TABLE `freelance_services` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `badge` VARCHAR(100),
    `summary` TEXT,
    `deliverables` TEXT,
    `estimated_timeline` VARCHAR(100),
    `ideal_for` VARCHAR(255),
    `display_order` INT DEFAULT 0,
    `active` BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Contact Messages Table
CREATE TABLE `contact_messages` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `sender_name` VARCHAR(255) NOT NULL,
    `sender_email` VARCHAR(255) NOT NULL,
    `sender_phone` VARCHAR(50),
    `service_interested` VARCHAR(255),
    `subject` VARCHAR(255),
    `message` TEXT NOT NULL,
    `contact_channel_preference` VARCHAR(50),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `status` VARCHAR(50) DEFAULT 'NEW'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Profile Seed Data
INSERT INTO `profile` (`full_name`, `title`, `bio`, `location`, `github_url`, `linkedin_url`, `contact_email`, `whatsapp_number`, `status_message`, `available_for_freelance`)
VALUES (
    'Vikas Sahu',
    'Full Stack Software Engineer & AI / RAG Developer',
    'Software Engineer specializing in scalable enterprise backend platforms, microservices architecture, modern responsive frontends, and practical Generative AI workflows. Experienced in building robust Java and Spring Boot systems, Angular web applications, and LLM-powered autonomous automation with RAG and n8n.',
    'India (Available Worldwide & Remote)',
    'https://github.com/vikassahu123',
    'https://www.linkedin.com/in/vikas-sahu-364193244',
    'vikassahu54927@gmail.com',
    NULL,
    'Available for high-impact engineering & freelance collaborations',
    TRUE
);

-- Skills Seed Data (Categorized, NO percentages, NO Kafka, RAG with LLM included, H2 Database)
INSERT INTO `skills` (`name`, `category`, `icon`, `description`, `display_order`, `featured`) VALUES
('Java', 'BACKEND', 'java', 'Enterprise OOP, multithreading, Streams, JVM performance tuning', 1, TRUE),
('Spring Boot', 'BACKEND', 'springboot', 'Production-grade RESTful APIs, Spring Security, microservices architecture', 2, TRUE),
('Microservices Architecture', 'BACKEND', 'microservices', 'Service decomposition, API gateways, decoupled domain boundaries', 3, TRUE),
('Spring Data JPA & Hibernate', 'BACKEND', 'hibernate', 'Object-relational mapping, custom criteria queries, and transaction management', 4, TRUE),
('MySQL', 'BACKEND', 'mysql', 'Relational schema design, ACID compliance, query indexing, and connection pooling', 5, TRUE),
('Python & FastAPI', 'BACKEND', 'python', 'High-performance asynchronous REST APIs, Pydantic validation, AI pipeline bridges, and microservices', 6, TRUE),
('Docker', 'BACKEND', 'docker', 'Containerization of microservices, Docker Compose, multi-stage builds', 7, TRUE),
('Maven & Gradle', 'BACKEND', 'maven', 'Dependency management, build lifecycle automation, and packaging', 8, FALSE),

('Angular', 'FRONTEND', 'angular', 'Modern standalone architecture, signals, modular component design', 9, TRUE),
('TypeScript', 'FRONTEND', 'typescript', 'Strict type safety, modern ESNext features, object-oriented design', 10, TRUE),
('RxJS', 'FRONTEND', 'rxjs', 'Reactive event streams, operators, async state management', 11, TRUE),
('HTML5 & Responsive SCSS', 'FRONTEND', 'css', 'Mobile-first layouts, modern CSS Grid/Flexbox, glassmorphic themes', 12, TRUE),
('REST API Integration', 'FRONTEND', 'api', 'Typed HTTP client communication, error interceptors, loading states', 13, FALSE),

('LangChain', 'AI_AUTOMATION', 'langchain', 'Framework for building context-aware LLM agents, chains, document loaders, and vector stores', 14, TRUE),
('RAG Pipeline', 'AI_AUTOMATION', 'rag', 'End-to-end Retrieval-Augmented Generation: semantic chunking, vector embeddings, context injection', 15, TRUE),
('LLM APIs (Gemini & OpenAI)', 'AI_AUTOMATION', 'llm', 'Prompt engineering, function calling, streaming responses, structured JSON', 16, TRUE),
('n8n Agentic Automation', 'AI_AUTOMATION', 'n8n', 'Visual orchestration of multi-step AI agents and webhook integrations', 17, TRUE),
('Autonomous Code Review Agents', 'AI_AUTOMATION', 'code-bot', 'Automated GitHub pull request auditing, lint analysis, code feedback bots', 18, TRUE),
('Prompt Engineering', 'AI_AUTOMATION', 'prompt', 'Few-shot prompting, system steering, reasoning chains, output validation', 19, FALSE);

-- Featured Projects Seed Data
INSERT INTO `projects` (`title`, `subtitle`, `description`, `architecture_details`, `technologies`, `category`, `github_url`, `live_demo_url`, `image_url`, `display_order`, `featured`) VALUES
(
    'E-Shopping Zone Platform',
    'Full-Stack E-Commerce & Microservices Solution',
    'A complete enterprise-grade e-commerce application built with Spring Boot microservices and an Angular responsive interface. Features product catalog browsing, cart management, simulated secure checkout, and reliable MySQL persistence.',
    'Spring Boot Microservices + Angular Standalone + MySQL + Docker + Clean Architecture',
    'Java, Spring Boot, Angular, MySQL, Microservices, Docker, REST APIs',
    'FULLSTACK',
    'https://github.com/vikassahu123',
    NULL,
    'assets/images/project-ecommerce.svg',
    1,
    TRUE
),
(
    'AI Meeting Intelligence Platform',
    'LLM-Driven Audio & Transcript Intelligence Platform',
    'An advanced platform that processes meeting transcripts, extracts key decisions, synthesizes actionable summaries, and enables instant semantic search across meeting history using state-of-the-art LLMs.',
    'Node.js / Express + LangChain LLM Orchestration + RAG Pipeline Context + Document Synthesis',
    'JavaScript, LangChain, RAG Pipeline, LLMs, AI Pipelines, REST APIs',
    'AI_SYSTEM',
    'https://github.com/vikassahu123/Vikas-ai-meeting-intelligence',
    NULL,
    'assets/images/project-meeting-ai.svg',
    2,
    TRUE
),
(
    'AI Interview Coach',
    'Real-Time Conversational AI Coaching & Evaluation System',
    'Interactive interview coaching platform providing real-time evaluation of candidate responses, scenario-based questioning, and structured scoring on technical and communication skills.',
    'Conversational AI + LangChain Dynamic Evaluation Framework + Scenario Engine',
    'JavaScript, Generative AI, LangChain, RAG Pipeline, Conversational Agents',
    'AI_SYSTEM',
    'https://github.com/vikassahu123/Vikas-AI-Interview-Coach',
    NULL,
    'assets/images/project-interview-coach.svg',
    3,
    TRUE
),
(
    'Autonomous PR & Code Review Bot',
    'n8n & Gemini AI Powered Automated GitHub Pull Request Auditor',
    'An automated CI/CD code reviewing agent orchestrating n8n workflows and Google Gemini AI. Monitors pull requests, performs static code inspections, evaluates readability & security, and submits automated actionable review comments.',
    'n8n Agentic Workflows + Google Gemini API + GitHub Webhooks + Event Triggers',
    'n8n, Google Gemini AI, LangChain Concepts, GitHub Webhooks, CI/CD Automation',
    'AUTOMATION',
    'https://github.com/vikassahu123/n8nGithub_Code_reviewer',
    NULL,
    'assets/images/project-code-reviewer.svg',
    4,
    TRUE
);

-- Enterprise Experiences Seed Data (Masked company name and MBDRI)
INSERT INTO `experiences` (`role_title`, `organization_type`, `period`, `location_type`, `description`, `key_achievements`, `technologies`, `display_order`) VALUES
(
    'Software Engineer',
    'Enterprise Software Engineering',
    '2025 - Present',
    'Full-Time / Engineering Role',
    'Developing scalable Java and Spring Boot microservices and modern responsive frontends for enterprise client engagements. Focused on decoupled services, clean architectural separation, and reliable MySQL data layers.',
    'Developed scalable Java and Spring Boot microservices and RESTful APIs with clean layered architecture|Built modern, responsive Angular frontend components with TypeScript and reactive state management|Designed and optimized MySQL relational database schemas, query indexing, and automated connection pooling|Implemented secure API endpoints, input validation, and automated error handling across client workflows',
    'Java, Spring Boot, Angular, MySQL, Microservices, Docker, Git',
    1
),
(
    'Software Developer Intern',
    'Software Engineering',
    'May 2025 - Jun 2025',
    'Internship',
    'Assisted in developing backend services using Java, Spring Framework, and MySQL persistence while delivering modular Angular frontend templates for management systems.',
    'Assisted in developing backend services using Java, Spring Framework, and MySQL database persistence|Designed reusable frontend templates using Angular, TypeScript, and responsive HTML5/CSS3|Implemented unit tests, database queries, and integrated REST API contracts for internal services|Collaborated on bug fixes, code documentation, and frontend UI optimization for mobile and desktop screens',
    'Java, Spring Boot, Angular, TypeScript, MySQL, HTML5/CSS3, Git',
    2
);

-- Freelance Services Seed Data
INSERT INTO `freelance_services` (`title`, `badge`, `summary`, `deliverables`, `estimated_timeline`, `ideal_for`, `display_order`, `active`) VALUES
(
    'Full-Stack Web App Development',
    'Most Popular',
    'End-to-end development of custom, high-performance web applications with a robust Java Spring Boot backend and sleek, responsive Angular frontend.',
    'Custom Angular UI (Mobile + Desktop Responsive)|Java Spring Boot REST API Architecture|MySQL Database Design & Schema Initialization|Authentication & Security Implementation|Production Build & Handover Support',
    '2 - 4 Weeks',
    'Startups, Businesses, & Product Teams needing a production-grade web application',
    1,
    TRUE
),
(
    'AI & RAG Integration / Automation Workflows',
    'High Demand',
    'Supercharge your business processes by integrating Large Language Models (Gemini/OpenAI), RAG retrieval over your company documents, and automated n8n workflows.',
    'RAG System Implementation with Private Document Context|n8n Automated Workflow Pipelines & Webhooks|LLM API Integration (Gemini, OpenAI)|Autonomous Review & Data Extraction Agents|Complete Integration Documentation & Setup',
    '1 - 3 Weeks',
    'Companies seeking to automate repetitive tasks or build custom AI features',
    2,
    TRUE
),
(
    'Backend Microservices & REST API Engineering',
    'Enterprise Grade',
    'Design and implement clean, high-performance Spring Boot microservices, secure RESTful APIs, and optimized MySQL databases designed for reliable scale.',
    'Clean Layered Microservices Architecture|Optimized MySQL Schemas & Query Indexing|Swagger / OpenAPI Interactive Documentation|Secure JWT Authentication & Authorization|Unit & Integration Test Suite',
    '1 - 3 Weeks',
    'Teams needing scalable backend foundations or API integrations',
    3,
    TRUE
),
(
    'Architecture Review & Modernization',
    'Consulting',
    'Refactor legacy codebases, upgrade frontend/backend stacks to modern Angular and Java 21, and optimize system speed, security, and responsiveness.',
    'Code Quality & Architecture Audit|Performance & Database Query Optimization|Mobile & Tablet Responsive Redesign|Modernization Migration Roadmap & Mentoring',
    '3 - 7 Days',
    'Projects facing technical debt or performance bottlenecks',
    4,
    TRUE
);
