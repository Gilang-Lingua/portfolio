export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  category: 'Cyber Security' | 'Data & AI' | 'Web Dev' | 'Semua'
  featured: boolean
  tags: string[]
  stats?: { label: string; value: string }[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  imageBg: string
}

export interface SkillItem {
  name: string
  category: 'cybersec' | 'data_ai' | 'webdev' | 'tools_mgmt'
  level: 'Mahir' | 'Menengah' | 'Familiar'
  iconName: string
  color: string
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: 'Kepanitiaan' | 'Organisasi' | 'Pendidikan' | 'Magang'
  description: string
  bullets?: string[]
  skills: string[]
  location: string
}

export interface AchievementItem {
  id: string
  title: string
  issuer: string
  year: string
  type: 'Kompetisi' | 'Sertifikasi' | 'Pelatihan'
  description?: string
  iconType: 'trophy' | 'certificate' | 'award'
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
