# Vikas Sahu - Full-Stack Portfolio Website
### Java 21 • Spring Boot 3 • Angular 19 • MySQL 8.0 • AI & RAG

A production-grade, highly aesthetic personal portfolio website for **Vikas Sahu** ([github.com/vikassahu123](https://github.com/vikassahu123)), built using enterprise software architecture inspired by modern high-impact portfolios ([Agustin Burgos](https://agustinburgos.com/), [Gopal Krishna Jha](https://techmicrosystem.in/), and [DVLPR](https://dvlpr.pro/#home)).

---

## 🚀 Key Features

1. **Clean Layered Backend**:
   - Built with **Java 21** and **Spring Boot 3.3.5**.
   - Modular REST APIs: Controllers, Services, Spring Data JPA Repositories, DTOs, and Global Exception Handler.
   - Database portability: Auto-creates `portfolio_db` in MySQL and seeds all profile data, skills, projects, experience, and freelance packages on startup.
2. **Modern Standalone Angular Frontend**:
   - Built with **Angular 19** standalone components, RxJS, and strict TypeScript.
   - Obsidian dark theme (`#030712`), Neon Teal (`#2DD4BF`), Cyber Amber (`#F59E0B`), and frosted glassmorphism.
   - **100% Responsive** across Mobile (hamburger menu drawer), Tablet, Laptop, and Desktop screens.
   - Subtle, human-crafted 2D ambient constellation canvas background.
   - Interactive **System Profile Terminal** widget with live syntax highlighting and toggleable tabs.
3. **Privacy & Confidentiality Protected**:
   - Zero exposure of confidential company names.
   - Zero exposure of internal project codes (e.g. `MBDRI`).
   - Enterprise experience is presented through high-impact architectural achievements and system responsibilities.
4. **Skills Showcase**:
   - Categorized filter tabs: **Backend & Systems**, **Frontend & Web**, and **AI & Automation**.
   - Features **RAG (Retrieval-Augmented Generation) with LLMs**, Google Gemini, OpenAI, n8n Agentic Workflows, Spring Boot, Angular, MySQL.
   - Completely free of arbitrary percentage bars and Kafka as requested.
5. **Featured Case Studies & Projects**:
   - **E-Shopping Zone Platform**: Scalable e-commerce microservices architecture.
   - **AI Meeting Intelligence Platform**: LLM audio/transcript decision extraction.
   - **AI Interview Coach**: Real-time conversational AI coaching engine.
   - **Autonomous PR & Code Review Bot**: n8n workflow powered by Gemini AI.
6. **Freelancing Services & Direct Booking**:
   - 4 modular service packages with timelines, deliverables, and a direct "Book Service" action that pre-fills the contact form.
7. **Direct Contact & Inquiry Notifications**:
   - Submitting the form saves the inquiry directly into MySQL table `contact_messages`.
   - Generates pre-populated one-click **WhatsApp Chat** (`wa.me`) and **Direct Email** (`mailto:`) links so you receive the full message on your phone or inbox!
   - Built-in **"Check Received Messages"** viewer allowing Vikas to view all inquiries directly from the MySQL database on screen.

---

## 📁 Repository Structure

```
mypage/
├── backend/                               # Spring Boot 3.3 / Java 21 REST API
│   ├── mvnw, mvnw.cmd                     # Maven Wrapper
│   ├── pom.xml                            # Maven Dependencies
│   └── src/main/
│       ├── java/com/vikas/portfolio/
│       │   ├── PortfolioApplication.java  # Main App Entry
│       │   ├── config/                    # CorsConfig, DataInitializer (Auto-Seeder)
│       │   ├── controller/                # Profile, Skill, Project, Experience, Freelance, Contact
│       │   ├── dto/                       # ContactRequestDTO, ContactResponseDTO, ApiResponse
│       │   ├── entity/                    # Profile, Skill, Project, Experience, FreelanceService, ContactMessage
│       │   ├── repository/                # Spring Data JPA Repositories
│       │   ├── service/                   # PortfolioService, ContactService (WhatsApp & Mailto formatters)
│       │   └── exception/                 # GlobalExceptionHandler
│       └── resources/
│           └── application.yml            # Parameterized MySQL config with env overrides
│
├── frontend/                              # Angular 19 Standalone Responsive App
│   ├── angular.json, package.json
│   └── src/
│       ├── index.html                     # SEO tags, Inter & JetBrains Mono fonts
│       ├── styles.scss                    # Obsidian dark theme, responsive grid, glassmorphism
│       └── app/
│           ├── core/                      # Models (portfolio.models.ts), ApiService, ToastService
│           ├── shared/                    # AmbientCanvasComponent, TerminalWidgetComponent
│           ├── features/
│           │   ├── navbar/                # Header with mobile drawer & Experience link
│           │   ├── hero/                  # Headline, terminal widget, direct WhatsApp/GitHub CTAs
│           │   ├── about/                 # Systems engineering philosophy & 4 core pillars
│           │   ├── skills/                # Filterable skills tabs (No percentages, RAG included)
│           │   ├── experience/            # Enterprise timeline (Masked company & MBDRI)
│           │   ├── projects/              # E-Shopping Zone + AI case studies
│           │   ├── freelance/             # 4 service packages with deliverables & booking trigger
│           │   ├── contact/               # Contact form, DB persistence, WhatsApp launch, messages viewer
│           │   └── footer/                # Brand signature & tech stack badges
│           ├── app.component.ts/html/scss
│           └── app.config.ts
│
├── database/
│   ├── init.sql                           # Standalone MySQL schema and initial seed script
│   └── docker-compose.yml                 # Optional 1-command containerized MySQL
└── README.md
```

---

## ⚡ Running Locally

### 1. Database Configuration (MySQL)
On this laptop, MySQL 8.0 is running locally on port 3306 with credentials:
- **Host**: `localhost:3306`
- **Database**: `portfolio_db` (Automatically created if it doesn't exist)
- **User**: `root`
- **Password**: `root`

#### 🔑 Using on Your Personal Laptop with a Different Password:
You **never** need to modify the code or manually create tables! Simply do either:
- **Option A (Environment Variable)**:
  ```powershell
  $env:SPRING_DATASOURCE_PASSWORD="your_personal_password"
  ```
- **Option B (application.yml)**:
  Open `backend/src/main/resources/application.yml` and update the password field:
  ```yaml
  spring:
    datasource:
      password: your_personal_password
  ```
On startup, Spring Boot will connect, auto-create `portfolio_db`, generate all tables, and seed all your data automatically!

---

### 2. Run the Spring Boot Backend

Open a terminal in the `backend` folder:
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```
The REST API will start at **`http://localhost:8080`**.

Test endpoints:
- `http://localhost:8080/api/profile`
- `http://localhost:8080/api/skills`
- `http://localhost:8080/api/projects`
- `http://localhost:8080/api/services`
- `http://localhost:8080/api/experience`
- `http://localhost:8080/api/contact/messages`

---

### 3. Run the Angular Frontend

Open a terminal in the `frontend` folder:
```powershell
cd frontend
npm start
```
Open your browser at **`http://localhost:4200`**.

---

## 📱 How Clients Contact You & How You Check Inquiries

1. **When a client fills the Contact / Booking form**:
   - The form validates their name, email, phone, requested service, and message.
   - It submits to `POST /api/contact` and saves immediately into the MySQL `contact_messages` table.
   - A success popup appears with **"Open in WhatsApp"** and **"Send via Email"** buttons containing the full pre-populated message.
2. **Checking who contacted you**:
   - **Method 1 (Instant in UI)**: In the Contact section, click **"Check Received Messages"** under Developer Access to view all messages stored in MySQL with timestamps and sender details.
   - **Method 2 (REST API)**: Open `http://localhost:8080/api/contact/messages` in your browser.
   - **Method 3 (MySQL Direct)**: Run:
     ```sql
     USE portfolio_db;
     SELECT * FROM contact_messages ORDER BY created_at DESC;
     ```
3. **Customizing Your Contact Email & WhatsApp Phone**:
   In `backend/src/main/resources/application.yml`, update:
   ```yaml
   portfolio:
     contact:
       recipient-email: your_actual_email@gmail.com
       whatsapp-number: +919876543210 # your actual WhatsApp number with country code
   ```
