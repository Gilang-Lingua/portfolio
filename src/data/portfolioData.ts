import type { Project, SkillItem, ExperienceItem } from '../types'

export const personalInfo = {
  name: 'Gilang',
  fullName: 'Gilang Ramadhan',
  headline: 'Web Developer & Mahasiswa Informatika',
  status: 'Terbuka untuk Magang & Project Baru',
  location: 'Indonesia',
  email: 'gilang.dev.work@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  bioShort:
    'Mahasiswa Informatika yang berfokus pada pengembangan web modern dengan React, TypeScript, dan ekosistem modern. Senang menciptakan antarmuka yang cepat, estetik, dan interaktif.',
  bioLong: [
    'Halo! Saya Gilang, seorang mahasiswa Teknik Informatika yang memiliki antusiasme tinggi terhadap Software Engineering dan Modern Web Development.',
    'Saya terbiasa membangun antarmuka web yang responsif, terstruktur rapi, serta berfokus pada performa dan kenyamanan pengguna (User Experience). Menguasai stack frontend modern seperti React, Next.js, Tailwind CSS, serta integrasi REST API dan backend berbasis Node.js.',
    'Saat ini saya sedang aktif mencari kesempatan magang (internship) di perusahaan teknologi untuk berkontribusi, belajar dari tim profesional, dan menyelesaikan permasalahan nyata melalui kode berkualitas.',
  ],
  stats: [
    { label: 'Proyek Selesai', value: '12+' },
    { label: 'Tech Stack Dikuasai', value: '10+' },
    { label: 'Komitmen Belajar', value: '100%' },
    { label: 'Smooth Scroll', value: 'Lenis 60fps' },
  ],
  resumeUrl: '#contact',
}

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 'Mahir', iconName: 'Atom', color: 'from-cyan-500 to-blue-500' },
  { name: 'TypeScript', category: 'frontend', level: 'Mahir', iconName: 'FileCode2', color: 'from-blue-600 to-indigo-600' },
  { name: 'Next.js', category: 'frontend', level: 'Menengah', iconName: 'Globe', color: 'from-zinc-400 to-zinc-600' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Mahir', iconName: 'Palette', color: 'from-teal-400 to-cyan-500' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Mahir', iconName: 'Code', color: 'from-amber-400 to-yellow-500' },
  { name: 'HTML5 & Modern CSS', category: 'frontend', level: 'Mahir', iconName: 'Layout', color: 'from-orange-500 to-red-500' },
  { name: 'Lenis Scroll', category: 'frontend', level: 'Mahir', iconName: 'Sparkles', color: 'from-violet-500 to-fuchsia-500' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'Menengah', iconName: 'Server', color: 'from-emerald-500 to-green-600' },
  { name: 'Express.js', category: 'backend', level: 'Menengah', iconName: 'Cpu', color: 'from-zinc-400 to-zinc-700' },
  { name: 'RESTful API', category: 'backend', level: 'Mahir', iconName: 'Network', color: 'from-sky-400 to-blue-600' },

  // Database
  { name: 'PostgreSQL', category: 'database', level: 'Menengah', iconName: 'Database', color: 'from-blue-500 to-indigo-700' },
  { name: 'MySQL', category: 'database', level: 'Mahir', iconName: 'DatabaseZap', color: 'from-orange-400 to-amber-600' },
  { name: 'Supabase / Firebase', category: 'database', level: 'Menengah', iconName: 'Flame', color: 'from-emerald-400 to-teal-600' },

  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 'Mahir', iconName: 'GitBranch', color: 'from-orange-500 to-red-600' },
  { name: 'Vite', category: 'tools', level: 'Mahir', iconName: 'Zap', color: 'from-purple-500 to-indigo-500' },
  { name: 'Figma to Code', category: 'tools', level: 'Menengah', iconName: 'Figma', color: 'from-pink-500 to-purple-600' },
  { name: 'Postman', category: 'tools', level: 'Mahir', iconName: 'Send', color: 'from-orange-500 to-amber-500' },
]

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'InternHub - Portal Manajemen & Laporan Magang',
    tagline: 'Platform pelacakan tugas, absensi, dan review supervisor mahasiswa magang',
    description:
      'Aplikasi web terpadu untuk mendampingi mahasiswa magang dalam mencatat daily log harian, memantau approval mentor industri, dan menyusun laporan akhir secara otomatis.',
    category: 'Full Stack',
    featured: true,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    stats: [
      { label: 'Efisiensi Laporan', value: '+65%' },
      { label: 'Role Akses', value: 'Mahasiswa, Mentor, Dosen' },
    ],
    highlights: [
      'Dashboard statistik progres magang interaktif',
      'Export logbook ke format PDF siap cetak',
      'Sistem notifikasi deadline tugas & feedback mentor',
      'Smooth transitions dan antarmuka responsif',
    ],
    liveUrl: 'https://example.com/demo/internhub',
    githubUrl: 'https://github.com/example/internhub',
    imageBg: 'from-cyan-900/60 via-blue-900/40 to-slate-950',
  },
  {
    id: 'project-2',
    title: 'SwiftPOS - Cloud Point of Sales & Inventory',
    tagline: 'Sistem kasir modern berbasis cloud dengan sinkronisasi inventaris instan',
    description:
      'Solusi Point-of-Sale untuk pelaku UMKM ritel dan F&B dengan proses checkout kilat, manajemen varian stok real-time, cetak struk thermal, dan analitik pendapatan harian.',
    category: 'Full Stack',
    featured: true,
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Recharts'],
    stats: [
      { label: 'Kecepatan Checkout', value: '< 2 Detik' },
      { label: 'Mode', value: 'Offline-First' },
    ],
    highlights: [
      'Pencarian produk instan dengan keyboard shortcuts',
      'Laporan omzet harian & bulanan berbasis grafik visual',
      'Integrasi simulasi QRIS & pembayaran tunai',
    ],
    liveUrl: 'https://example.com/demo/swiftpos',
    githubUrl: 'https://github.com/example/swiftpos',
    imageBg: 'from-emerald-900/60 via-teal-900/40 to-slate-950',
  },
  {
    id: 'project-3',
    title: 'AcuReview - AI Academic Paper Summarizer',
    tagline: 'Ekstraktor inti sari jurnal ilmiah dan pembuat kartu belajar otomatis',
    description:
      'Aplikasi bantuan riset mahasiswa yang merangkum dokumen jurnal ilmiah PDF, mengekstrak metodologi, hipotesis utama, dan menyajikan ringkasan dalam bentuk flashcards interaktif.',
    category: 'Frontend',
    featured: false,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'AI API', 'IndexedDB'],
    stats: [
      { label: 'Waktu Baca', value: '3x Lebih Cepat' },
      { label: 'Format File', value: 'PDF & TXT' },
    ],
    highlights: [
      'Parsing dokumen PDF langsung di sisi browser',
      'Generator flashcard hafalan dengan sistem kuis interaktif',
      'Penyimpanan ringkasan offline menggunakan IndexedDB',
    ],
    liveUrl: 'https://example.com/demo/acureview',
    githubUrl: 'https://github.com/example/acureview',
    imageBg: 'from-purple-900/60 via-violet-900/40 to-slate-950',
  },
  {
    id: 'project-4',
    title: 'BudgetCraft - Financial Tracker & Insights',
    tagline: 'Pencatat pengeluaran harian mahasiswa dengan kalkulator tabungan impian',
    description:
      'Aplikasi keuangan pribadi yang dirancang sederhana namun powerful untuk membantu mahasiswa mengelola uang saku bulanan, alokasi tabungan, dan peringatan over-budgeting.',
    category: 'Frontend',
    featured: false,
    tags: ['React', 'Tailwind CSS', 'Lucide Icons', 'LocalStorage'],
    stats: [
      { label: 'Privasi', value: '100% Client-Side' },
      { label: 'Kategori', value: 'Kustomisasi Bebas' },
    ],
    highlights: [
      'Visualisasi pengeluaran mingguan dengan diagram interaktif',
      'Simulasi goal tabungan berdasarkan target waktu',
      'Export & Import data JSON untuk backup tanpa ribet',
    ],
    liveUrl: 'https://example.com/demo/budgetcraft',
    githubUrl: 'https://github.com/example/budgetcraft',
    imageBg: 'from-amber-900/60 via-orange-900/40 to-slate-950',
  },
]

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Frontend Developer Intern (Simulasi / Project)',
    organization: 'Tech Catalyst Internship Program',
    period: '2025 - Sekarang',
    type: 'Magang',
    description:
      'Mengembangkan fitur antarmuka web menggunakan React & TypeScript. Berkolaborasi dengan tim backend dalam integrasi API, optimalisasi performa rendering, dan implementasi UI modern sesuai standar desain Figma.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Git'],
    location: 'Remote, Indonesia',
  },
  {
    id: 'exp-2',
    role: 'Asisten Laboratorium Pemrograman Web',
    organization: 'Fakultas Ilmu Komputer & Informatika',
    period: '2024 - 2025',
    type: 'Pendidikan',
    description:
      'Membimbing 60+ mahasiswa junior dalam memahami fundamental HTML, CSS, JavaScript modern, serta dasar-dasar arsitektur backend dan basis data relasional. Mengoreksi tugas praktikum mingguan dan memberikan feedback teknis.',
    skills: ['Mentoring', 'JavaScript', 'HTML/CSS', 'MySQL', 'Problem Solving'],
    location: 'Kampus',
  },
  {
    id: 'exp-3',
    role: 'Staff Divisi Media & Teknologi Informasi',
    organization: 'Himpunan Mahasiswa Teknik Informatika (HMTI)',
    period: '2023 - 2024',
    type: 'Organisasi',
    description:
      'Bertanggung jawab atas pemeliharaan website resmi himpunan, pembuatan landing page pendaftaran acara seminar nasional, dan publikasi aset digital organisasi.',
    skills: ['Web Development', 'Figma', 'Teamwork', 'Project Coordination'],
    location: 'Kampus',
  },
]
