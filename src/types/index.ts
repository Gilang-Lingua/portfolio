export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  category: 'Full Stack' | 'Frontend' | 'Mobile / UI' | 'Semua'
  featured: boolean
  tags: string[]
  stats?: { label: string; value: string }[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  imageBg: string // Gradient or accent color
}

export interface SkillItem {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  level: 'Mahir' | 'Menengah' | 'Familiar'
  iconName: string
  color: string
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: 'Magang' | 'Organisasi' | 'Pendidikan' | 'Freelance'
  description: string
  skills: string[]
  location: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
