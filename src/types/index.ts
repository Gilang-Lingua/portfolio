export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  category: string
  tags: string[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  instagramUrl?: string
  insstagramURL?: string
}

export interface SkillGroup {
  category: string
  description: string
  items: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: 'Kepanitiaan' | 'Organisasi'
  description: string
  bullets: string[]
  location: string
}

export interface CompetitionItem {
  id: string
  title: string
  event: string
  year: string
  status: 'Finalist' | 'Participant'
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  year: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
