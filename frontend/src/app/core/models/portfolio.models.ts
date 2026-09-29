export interface Profile {
  id: number;
  fullName: string;
  title: string;
  bio: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  contactEmail: string;
  whatsappNumber?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  statusMessage: string;
  availableForFreelance: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: 'BACKEND' | 'FRONTEND' | 'AI_AUTOMATION' | string;
  icon: string;
  description: string;
  displayOrder: number;
  featured: boolean;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  architectureDetails: string;
  technologies: string;
  category: 'FULLSTACK' | 'AI_SYSTEM' | 'AUTOMATION' | string;
  githubUrl: string;
  liveDemoUrl?: string | null;
  imageUrl: string;
  displayOrder: number;
  featured: boolean;
}

export interface Experience {
  id: number;
  roleTitle: string;
  organizationType: string;
  period: string;
  locationType: string;
  description: string;
  keyAchievements: string;
  technologies: string;
  displayOrder: number;
}

export interface FreelanceService {
  id: number;
  title: string;
  badge: string;
  summary: string;
  deliverables: string;
  estimatedTimeline: string;
  idealFor: string;
  displayOrder: number;
  active: boolean;
}

export interface ContactMessage {
  id: number;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  serviceInterested?: string;
  subject?: string;
  message: string;
  contactChannelPreference?: string;
  createdAt: string;
  status: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  subject?: string;
  message: string;
  preferredChannel?: 'EMAIL' | 'INSTAGRAM' | 'WHATSAPP';
}

export interface ContactResponse {
  id: number;
  confirmation: string;
  directWhatsAppUrl?: string;
  directInstagramUrl?: string;
  directMailtoUrl: string;
  timestamp: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}
