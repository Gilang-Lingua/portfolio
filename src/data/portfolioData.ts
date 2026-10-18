import type { Project, SkillItem, ExperienceItem, AchievementItem } from '../types'

export const personalInfo = {
  name: 'Gemilang',
  fullName: 'Gemilang Ananda Lingua',
  headline: 'Information Technology Student at ITS | Cyber Security, Data Science & AI Enthusiast',
  status: 'Open for Internship & Opportunities',
  location: 'Surabaya, Indonesia',
  phone: '+62 85932226818',
  phoneUrl: 'https://wa.me/6285932226818',
  email: 'gemilang.lingua@gmail.com',
  linkedin: 'https://linkedin.com/in/gemilang-lingua',
  github: 'https://github.com',
  instagram: 'https://instagram.com',
  bioShort:
    'Highly motivated Information Technology student at Sepuluh Nopember Institute of Technology (ITS) with strong interests in Cyber Security, Data Science, and Artificial Intelligence.',
  bioLong: [
    'Highly motivated Information Technology student at Sepuluh Nopember Institute of Technology (ITS) with strong interests in Cyber Security, Data Science, and Artificial Intelligence.',
    'Experienced in coordinating cross-functional teams, supervising operational workflows, and controlling project execution through various organizational and committee initiatives.',
    'Skilled in communication, problem-solving, and project coordination, with the ability to adapt quickly and maintain smooth team operations in dynamic environments. Dedicated to leveraging technical insights and effective coordination to drive impactful solutions.',
  ],
  interests: [
    { title: 'Cyber Security', desc: 'Capture The Flag (CTF), Vulnerability Assessment, Network & Web Security' },
    { title: 'Data Science', desc: 'Data Analytics, Database Management, Python, Spreadsheets & Insights' },
    { title: 'Artificial Intelligence', desc: 'Machine Learning, Model Exploration, Automated Solutions' },
    { title: 'Modern Web & Tech', desc: 'React, TypeScript, High-Performance Smooth Interactive Systems' },
  ],
  education: [
    {
      school: 'Institut Teknologi Sepuluh Nopember (ITS)',
      degree: 'Bachelor of Information Technology (S1 Teknologi Informasi)',
      location: 'Surabaya, Indonesia',
      period: '2024 - Sekarang',
      highlight: 'Fokus pada Cyber Security, Data Science, dan Rekayasa Perangkat Lunak',
    },
    {
      school: 'SMA Negeri 9 Kota Malang',
      degree: 'Senior High School, Natural Sciences (MIPA)',
      location: 'Malang, Indonesia',
      period: 'Lulus',
      highlight: 'Dasar logika analitis & sains kuat',
    },
  ],
  stats: [
    { label: 'Prestasi CTF', value: 'National Finalist' },
    { label: 'Kepanitiaan & Event', value: '4+ Major Roles' },
    { label: 'Kepengurusan', value: 'HMIT ITS' },
    { label: 'Smooth Scroll', value: 'Lenis 60fps' },
  ],
  resumeUrl: '#contact',
}

export const skillsData: SkillItem[] = [
  // Cyber Security
  { name: 'CTF (Capture The Flag)', category: 'cybersec', level: 'Mahir', iconName: 'ShieldAlert', color: 'from-rose-500 to-red-600' },
  { name: 'Web & Network Security', category: 'cybersec', level: 'Mahir', iconName: 'Lock', color: 'from-amber-500 to-orange-600' },
  { name: 'Linux System Admin', category: 'cybersec', level: 'Mahir', iconName: 'Terminal', color: 'from-emerald-500 to-green-600' },
  { name: 'Cryptography & Forensics', category: 'cybersec', level: 'Menengah', iconName: 'Key', color: 'from-violet-500 to-purple-600' },

  // Data Science & AI
  { name: 'Python (Data & AI)', category: 'data_ai', level: 'Mahir', iconName: 'Binary', color: 'from-blue-500 to-indigo-600' },
  { name: 'Database & Spreadsheet Mgmt', category: 'data_ai', level: 'Mahir', iconName: 'Database', color: 'from-teal-400 to-cyan-600' },
  { name: 'Machine Learning Basics', category: 'data_ai', level: 'Menengah', iconName: 'Cpu', color: 'from-fuchsia-500 to-pink-600' },
  { name: 'SQL & Data Analysis', category: 'data_ai', level: 'Mahir', iconName: 'BarChart3', color: 'from-amber-400 to-yellow-500' },

  // Web Development
  { name: 'React.js & TypeScript', category: 'webdev', level: 'Mahir', iconName: 'Atom', color: 'from-cyan-400 to-blue-500' },
  { name: 'Tailwind CSS', category: 'webdev', level: 'Mahir', iconName: 'Palette', color: 'from-teal-400 to-cyan-500' },
  { name: 'Lenis Smooth Scroll', category: 'webdev', level: 'Mahir', iconName: 'Sparkles', color: 'from-violet-400 to-fuchsia-500' },
  { name: 'RESTful API & Backend', category: 'webdev', level: 'Menengah', iconName: 'Network', color: 'from-sky-400 to-blue-600' },

  // Tools & Project Leadership
  { name: 'Cross-Functional Team Coord', category: 'tools_mgmt', level: 'Mahir', iconName: 'Users', color: 'from-emerald-500 to-teal-600' },
  { name: 'Event & Workflow Supervision', category: 'tools_mgmt', level: 'Mahir', iconName: 'ClipboardCheck', color: 'from-indigo-500 to-violet-600' },
  { name: 'Git & GitHub', category: 'tools_mgmt', level: 'Mahir', iconName: 'GitBranch', color: 'from-orange-500 to-red-600' },
  { name: 'Creative Media & Figma', category: 'tools_mgmt', level: 'Menengah', iconName: 'Figma', color: 'from-pink-500 to-purple-600' },
]

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-ara-8',
    role: 'Head of Competition Sub-Division | Event Division',
    organization: 'ARA 8.0 (A Renewal Agent) — Surabaya',
    period: 'Sep 2026 - Present',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Memimpin operasional kompetisi end-to-end serta penyusunan pedoman teknis perlombaan di bawah Event Division. Mensupervisi Expert Staff dan Staff dalam alur kerja persiapan dan live execution event skala nasional.',
    bullets: [
      'Coordinated end-to-end competition operations and technical guidelines under the Event Division.',
      'Supervised Expert Staff & Staff workflows and controlled live event execution to ensure smooth competition flow.',
    ],
    skills: ['Project Leadership', 'Technical Guidelines', 'Cross-Functional Coordination', 'Live Event Execution'],
  },
  {
    id: 'exp-hmit-rangkai-asa',
    role: 'Head of Development Bureau | Human Resources Development',
    organization: 'Himpunan Mahasiswa Teknologi Informasi ITS (HMIT ITS) Kabinet Rangkai Asa',
    period: 'Mar 2026 - Present',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Memimpin Biro Pengembangan Departemen HRD untuk merancang program pemberdayaan kapasitas, pelatihan internal, dan evaluasi pengembangan potensi mahasiswa Teknologi Informasi ITS.',
    bullets: [
      'Memimpin perencanaan inisiatif pengembangan SDM anggota himpunan.',
      'Mengawasi integrasi program kerja pengembangan organisasi bersama tim internal.',
    ],
    skills: ['Human Resource Development', 'Team Leadership', 'Strategic Planning', 'People Management'],
  },
  {
    id: 'exp-ara-7',
    role: 'Expert Staff of Competition Sub-Division | Event Division',
    organization: 'ARA 7.0 (A Renewal Agent) — Surabaya',
    period: 'Sep 2025 - Mar 2026',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Bertanggung jawab mengoordinasikan alur kerja kompetisi, perumusan aturan teknis, dan jadwal pelaksanaan kompetisi Capture The Flag (CTF) tingkat nasional.',
    bullets: [
      'Coordinated end-to-end competition workflows, technical rules, and event schedules for CTF.',
      'Supervised competition staff and controlled operational execution during event execution.',
    ],
    skills: ['Capture The Flag (CTF)', 'Cyber Security', 'Rule Formulation', 'Staff Supervision'],
  },
  {
    id: 'exp-gerigi',
    role: 'Expert Staff of Secretarial',
    organization: 'GERIGI x UKM Expo 2025 — Surabaya',
    period: 'Jun 2025 - Aug 2025',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Mensupervisi dan mengoordinasikan tim sekretariat beranggotakan 10 staf untuk mengelola database dan administrasi sekitar 180 mahasiswa baru secara akurat dan efisien.',
    bullets: [
      'Supervised and coordinated a team of 10 secretarial staff responsible for supporting approximately 180 freshmen participants.',
      'Managed and maintained databases using spreadsheets, ensuring data accuracy and efficient information tracking.',
    ],
    skills: ['Database Management', 'Spreadsheets', 'Team Coordination', 'Administration'],
  },
  {
    id: 'exp-inclenation',
    role: 'Staff of Material & Method',
    organization: 'INCLENATION 2025 — Surabaya',
    period: 'Jun 2025 - Aug 2025',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Berperan sebagai mentor bagi 10 mahasiswa baru, memfasilitasi adaptasi kehidupan kampus serta sesi pembelajaran interaktif untuk pengembangan personal dan profesional.',
    bullets: [
      'Served as a mentor for 10 freshmen, supporting their adaptation to university life.',
      'Facilitated learning sessions and interactive discussion to support participants personal and professional development.',
    ],
    skills: ['Mentoring', 'Public Speaking', 'Facilitation', 'Personal Development'],
  },
  {
    id: 'exp-hmit-tuas-prakarsa',
    role: 'Human Resource Development Intern',
    organization: 'Himpunan Mahasiswa Teknologi Informasi ITS Kabinet Tuas Prakarsa',
    period: 'Oct 2025 - Dec 2025',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Menjalani program magang di bidang HRD untuk mendukung program peningkatan kapasitas internal dan kekeluargaan mahasiswa Teknologi Informasi ITS.',
    bullets: [
      'Berpartisipasi aktif dalam operasional program kerja pengembangan mahasiswa departemen.',
    ],
    skills: ['HR Assessment', 'Organizational Culture', 'Collaboration'],
  },
  {
    id: 'exp-billiard',
    role: 'Staff of Media Creative',
    organization: 'ITS BILLIARD — Surabaya',
    period: 'Feb 2025 - Feb 2026',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Memproduksi konten media kreatif, publikasi digital, dan desain visual promosi kegiatan komunitas ITS Billiard.',
    bullets: [
      'Membuat desain visual dan konten branding di media sosial.',
    ],
    skills: ['Creative Media', 'Graphic Design', 'Social Media Strategy'],
  },
]

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Finalist Capture the Flag (CTF) (2024)',
    issuer: 'Interfest — Telkom University',
    year: '2024',
    type: 'Kompetisi',
    iconType: 'trophy',
    description:
      'Lolos sebagai finalis kompetisi keamanan siber nasional kategori Capture The Flag yang menguji kemampuan Web Exploitation, Reverse Engineering, Cryptography, dan Forensics.',
  },
  {
    id: 'ach-2',
    title: 'Basic Media Schooling (2025)',
    issuer: 'Himpunan Mahasiswa Teknologi Informasi ITS (HMIT ITS)',
    year: '2025',
    type: 'Pelatihan',
    iconType: 'certificate',
    description:
      'Pelatihan komprehensif mengenai teknik produksi konten media digital, branding visual, dan komunikasi kreatif organisasi.',
  },
  {
    id: 'ach-3',
    title: 'LKMM Pra-TD V FTEIC ITS (2024)',
    issuer: 'BEM Fakultas Teknologi Elektro dan Informatika Cerdas ITS (BEM FTEIC ITS)',
    year: '2024',
    type: 'Pelatihan',
    iconType: 'certificate',
    description:
      'Latihan Keterampilan Manajerial Mahasiswa Pra-Tingkat Dasar yang membekali kemampuan kepemimpinan, perumusan solusi masalah, dan tata kelola tim adaptif.',
  },
  {
    id: 'ach-4',
    title: 'LKMW (Latihan Keterampilan Mahasiswa Wirausaha) (2024)',
    issuer: 'Institut Teknologi Sepuluh Nopember (ITS)',
    year: '2024',
    type: 'Sertifikasi',
    iconType: 'award',
    description:
      'Sertifikasi pelatihan resmi dari ITS mengenai pengembangan kewirausahaan berbasis teknologi dan manajemen inovasi proyek.',
  },
]

export const projectsData: Project[] = [
  {
    id: 'project-ctf',
    title: 'SecShield - CTF Platform & Security Writeup Hub',
    tagline: 'Platform analisis kerentanan web, tantangan CTF, dan dokumentasi keamanan siber',
    description:
      'Portal edukasi dan pengujian penetrasi keamanan siber yang mendokumentasikan skenario web exploitation, kriptografi modern, dan analisis forensik jaringan berdasarkan pengalaman kompetisi CTF.',
    category: 'Cyber Security',
    featured: true,
    tags: ['Cyber Security', 'CTF', 'Web Exploitation', 'Linux', 'Python'],
    stats: [
      { label: 'Kompetisi', value: 'Interfest Finalist' },
      { label: 'Domain', value: 'Crypto & Web Sec' },
    ],
    highlights: [
      'Penyusunan modul tantangan Capture The Flag untuk simulasi keamanan web',
      'Analisis vulnerabilitas OWASP Top 10 dan mitigasi pencegahannya',
      'Skrip otomasi audit keamanan menggunakan Python dan Bash',
    ],
    liveUrl: 'https://example.com/demo/secshield',
    githubUrl: 'https://github.com/example/secshield',
    imageBg: 'from-rose-950/70 via-red-900/40 to-slate-950',
  },
  {
    id: 'project-event-db',
    title: 'EventFlow - Large-Scale Participant Data & Secretarial Engine',
    tagline: 'Sistem manajemen database ratusan peserta kepanitiaan dengan integrasi spreadsheet',
    description:
      'Platform berbasis data yang diadaptasi dari pengalaman supervisi tim sekretariat GERIGI x UKM Expo dan ARA ITS untuk otomasi verifikasi data, pelacakan absensi, dan analitik distribusi peserta.',
    category: 'Data & AI',
    featured: true,
    tags: ['Data Management', 'Spreadsheets', 'Python', 'SQL', 'Fast Processing'],
    stats: [
      { label: 'Kapasitas Data', value: '180+ Peserta' },
      { label: 'Akurasi Tracking', value: '99.8%' },
    ],
    highlights: [
      'Sinkronisasi data multi-staff secara real-time untuk meminimalisir duplikasi data',
      'Automated data validation untuk memverifikasi kelengkapan berkas mahasiswa',
      'Laporan progres divisi kepanitiaan dalam bentuk grafik ringkas',
    ],
    liveUrl: 'https://example.com/demo/eventflow',
    githubUrl: 'https://github.com/example/eventflow',
    imageBg: 'from-blue-950/70 via-indigo-900/40 to-slate-950',
  },
  {
    id: 'project-ara-hub',
    title: 'ARA Competition Operations & Technical Guidelines Portal',
    tagline: 'Portal sentral pedoman teknis dan koordinasi kompetisi tingkat nasional',
    description:
      'Aplikasi pendukung divisi kompetisi ARA (A Renewal Agent) ITS untuk publikasi rulebook, panduan teknis CTF & lomba IT, serta monitoring jadwal interaktif bagi peserta dan panitia.',
    category: 'Web Dev',
    featured: false,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Lenis Scroll'],
    stats: [
      { label: 'Cakupan Lomba', value: 'Nasional' },
      { label: 'User Experience', value: 'Lenis 60fps' },
    ],
    highlights: [
      'Navigasi mulus dengan Lenis Smooth Scroll untuk pembacaan aturan kompetisi yang nyaman',
      'Dashboard countdown deadline dan live announcement real-time',
      'Responsive interface ramah perangkat mobile untuk peserta lomba',
    ],
    liveUrl: 'https://example.com/demo/ara-portal',
    githubUrl: 'https://github.com/example/ara-portal',
    imageBg: 'from-emerald-950/70 via-teal-900/40 to-slate-950',
  },
  {
    id: 'project-ai-analytics',
    title: 'CogniData - AI-Powered Student Capability Insights',
    tagline: 'Eksplorasi machine learning dan visualisasi data evaluasi pengembangan SDM',
    description:
      'Proyek data science dan eksplorasi model AI untuk mengelompokkan minat keahlian mahasiswa, memetakan kebutuhan pelatihan divisi, dan menghasilkan rekomendasi program kerja berbasis data analitik.',
    category: 'Data & AI',
    featured: false,
    tags: ['Python', 'Machine Learning', 'Data Science', 'Pandas', 'Recharts'],
    stats: [
      { label: 'Tipe Solusi', value: 'HR Analytics' },
      { label: 'Model', value: 'Clustering' },
    ],
    highlights: [
      'Pembersihan dan transformasi dataset survei kompetensi mahasiswa',
      'Clustering peminatan Cyber Security, Data, dan AI secara akurat',
      'Visualisasi interaktif untuk pengambilan keputusan tim HRD',
    ],
    liveUrl: 'https://example.com/demo/cognidata',
    githubUrl: 'https://github.com/example/cognidata',
    imageBg: 'from-purple-950/70 via-violet-900/40 to-slate-950',
  },
]
