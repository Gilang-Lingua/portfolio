import type {
  SkillGroup,
  ExperienceItem,
  CompetitionItem,
  CertificationItem,
  Project,
} from '../types'

export const personalInfo = {
  name: 'Gilang',
  fullName: 'Gemilang Ananda Lingua',
  headline: 'Mahasiswa Teknologi Informasi ITS',
  subheadline: 'Tertarik pada Cyber Security, Data Science, dan Artificial Intelligence',
  location: 'Surabaya, Indonesia',
  phone: '+62 85932226818',
  phoneUrl: 'https://wa.me/6285932226818',
  email: 'gemilang.lingua@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gemilang-lingua',
  github: 'https://github.com/Gilang-Lingua',
  bioShort:
    'Mahasiswa Departemen Teknologi Informasi di Institut Teknologi Sepuluh Nopember (ITS) Surabaya dengan minat di bidang Cyber Security, Data Science, dan Artificial Intelligence.',
  bioLong: [
    'Halo! Saya Gemilang Ananda Lingua, mahasiswa Departemen Teknologi Informasi di Institut Teknologi Sepuluh Nopember (ITS) Surabaya.',
    'Saya memiliki ketertarikan kuat dalam bidang Cyber Security—khususnya kompetisi Capture The Flag (CTF)—serta eksplorasi Data Science dan Artificial Intelligence.',
    'Di lingkungan kampus, saya aktif dalam berbagai kepanitiaan dan organisasi seperti Himpunan Mahasiswa Teknologi Informasi (HMIT ITS), GERIGI x UKM Expo ITS, dan Kepanitiaan Lainnya. Terbiasa bekerja sama dalam tim, menyusun aturan teknis, dan mengawal alur operasional acara.',
  ],
  education: [
    {
      school: 'Institut Teknologi Sepuluh Nopember (ITS)',
      degree: 'S1 Teknologi Informasi',
      location: 'Surabaya, Indonesia',
      period: '2024 - Sekarang',
    },
    {
      school: 'SMA Negeri 9 Kota Malang',
      degree: 'MIPA (Natural Sciences)',
      location: 'Malang, Indonesia',
      period: 'Alumni',
    },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Bahasa Pemrograman',
    description: 'Bahasa pemrograman yang dipelajari dan digunakan',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web Development',
    description: 'Teknologi dan tools untuk pengembangan web',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP', 'Lenis'],
  },
  {
    category: 'Mobile App Development',
    description: 'Pengembangan dan pengujian aplikasi Mobile',
    items: ['Android Development', 'Java', 'XML Layout', 'UI Implementation', 'Application Testing'],
  },
  {
    category: 'Cybersecurity',
    description: 'Dasar keamanan web, jaringan, dan kriptografi',
    items: ['Linux Environment', 'Web Security Fundamentals', 'Network Fundamentals', 'Web Security Testing', 'Cryptography'],
  },
  {
    category: 'Machine Learning & AI',
    description: 'Pengolahan data dan penerapan machine learning',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Data Preprocessing', 'Data Analysis', 'Machine Learning'],
  },
  {
    category: 'Databases & Data Engineering',
    description: 'Pengelolaan dan transformasi data',
    items: ['MySQL', 'SQL', 'Database Management', 'Data Cleaning', 'Data Transformation', 'Data Preprocessing'],
  },
  {
    category: 'Tools',
    description: 'Tools pengembangan, analisis, dan simulasi',
    items: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Docker',
      'Android Studio',
      'Google Colab',
      'Kaggle',
      'CloudSim Plus',
      'GNS3',
      'Tinkercad',
      'Burp Suite',
    ],
  },
  {
    category: 'IT Support & Troubleshooting',
    description: 'Dukungan teknis dan pemeliharaan sistem komputer',
    items: [
      'Hardware Troubleshooting',
      'Software Troubleshooting',
      'PC Assembly',
      'Operating System Configuration',
      'Software Installation',
      'System Maintenance',
    ],
  },
  {
    category: 'Koordinasi & Organisasi',
    description: 'Pengalaman lapangan dalam tim dan acara',
    items: [
      'Team Leadership',
      'Team Coordination',
      'Team Supervision',
      'Event Workflow Management',
      'Mentoring',
      'Project Coordination',
      'Team Collaboration',
      'Communication',
    ],
  },
]

export const competitionsData: CompetitionItem[] = [
  {
    id: 'comp-interfest',
    title: 'Capture the Flag (CTF)',
    event: 'Interfest — Telkom University',
    year: '2024',
    status: 'Finalist',
  },
  {
    id: 'comp-compfest',
    title: 'Capture the Flag (CTF)',
    event: 'COMPFEST',
    year: '2026',
    status: 'Participant',
  },
  {
    id: 'comp-ara',
    title: 'Capture the Flag (CTF)',
    event: 'ARA 6.0',
    year: '2025',
    status: 'Participant',
  },
  {
    id: 'comp-ace',
    title: 'Capture The Flag Competition',
    event: 'ACE (Annual Classic Event)',
    year: '2024',
    status: 'Participant',
  },
]

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-bms',
    title: 'Basic Media Schooling',
    issuer: 'Himpunan Mahasiswa Teknologi Informasi ITS (HMIT ITS)',
    year: '2025',
  },
  {
    id: 'cert-lkmm',
    title: 'LKMM Pra-TD V FTEIC ITS (Latihan Keterampilan Manajerial Mahasiswa Pra-Tingkat Dasar)',
    issuer: 'BEM Fakultas Teknologi Elektro dan Informatika Cerdas ITS',
    year: '2024',
  },
  {
    id: 'cert-lkmw',
    title: 'LKMW (Latihan Keterampilan Mahasiswa Wirausaha)',
    issuer: 'Institut Teknologi Sepuluh Nopember (ITS)',
    year: '2024',
  },
]

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-ara-8',
    role: 'Head of Competition Sub-Division | Event Division',
    organization: 'ARA 8.0 — Surabaya',
    period: 'Sep 2026 - Present',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Mengoordinasikan operasional kompetisi dan panduan teknis perlombaan di bawah Event Division, serta mensupervisi alur kerja tim staf untuk memastikan kelancaran acara.',
    bullets: [
      'Coordinated end-to-end competition operations and technical guidelines under the Event Division.',
      'Supervised Expert Staff & Staff workflows and controlled live event execution to ensure smooth competition flow.',
    ],
  },
  {
    id: 'exp-hmit-rangkai-asa',
    role: 'Head of Development Bureau | Human Resources Development',
    organization: 'Himpunan Mahasiswa Teknologi Informasi ITS Kabinet Rangkai Asa',
    period: 'Mar 2026 - Present',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Memimpin Biro Pengembangan di Departemen HRD untuk merancang inisiatif pengembangan potensi dan pelatihan internal mahasiswa Teknologi Informasi ITS.',
    bullets: [
      'Overseeing the implementation of HMIT work programs, including OKKBK IT, AppreciateIT, ITBoost, LKMM-TD HMIT, and Performance Mapping and Monitoring.',
      'Developing communication, team coordination, progress monitoring, and program evaluation skills to ensure activities are executed effectively and meet established targets.',
    ],
  },
  {
    id: 'exp-ara-7',
    role: 'Expert Staff of Competition Sub-Division | Event Division',
    organization: 'ARA 7.0 — Surabaya',
    period: 'Sep 2025 - Mar 2026',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Coordinated end-to-end competition workflows, technical rules, and event schedules for CTF.',
    bullets: [
      'Coordinated end-to-end competition workflows, technical rules, and event schedules for CTF.',
      'Supervised competition staff and controlled operational execution during event execution.',
    ],
  },
  {
    id: 'exp-gerigi',
    role: 'Expert Staff of Secretarial',
    organization: 'GERIGI x UKM Expo 2025 — Surabaya',
    period: 'Jun 2025 - Aug 2025',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Mensupervisi tim sekretariat beranggotakan 10 staf untuk mengelola database dan pencatatan informasi sekitar 180 mahasiswa baru.',
    bullets: [
      'Supervised and coordinated a team of 10 secretarial staff responsible for supporting approximately 180 freshmen participants.',
      'Managed and maintained databases using spreadsheets, ensuring data accuracy and efficient information tracking.',
    ],
  },
  {
    id: 'exp-inclenation',
    role: 'Staff of Material & Method',
    organization: 'INCLENATION 2025 — Surabaya',
    period: 'Jun 2025 - Aug 2025',
    type: 'Kepanitiaan',
    location: 'Surabaya, Indonesia',
    description:
      'Berperan sebagai mentor bagi 10 mahasiswa baru dalam membantu adaptasi kehidupan kampus dan memfasilitasi sesi pembelajaran interaktif.',
    bullets: [
      'Served as a mentor for 10 freshmen, supporting their adaptation to university life.',
      'Facilitated learning sessions and interactive discussion to support participants personal and professional development.',
    ],
  },
  {
    id: 'exp-hmit-tuas-prakarsa',
    role: 'Human Resource Development Intern',
    organization: 'Himpunan Mahasiswa Teknologi Informasi ITS Kabinet Tuas Prakarsa',
    period: 'Oct 2025 - Dec 2025',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Served as an Operator for the ITBoost work program, managing technical and operational aspects during its implementation.',
    bullets: [
      'Served as an Operator for the ITBoost work program, managing technical and operational aspects during its implementation.',
      'PIC for the HMIT Performance Mapping and Monitoring program.',
    ],
  },
  {
    id: 'exp-billiard',
    role: 'Staff of Media Creative',
    organization: 'ITS BILLIARD — Surabaya',
    period: 'Feb 2025 - Feb 2026',
    type: 'Organisasi',
    location: 'Surabaya, Indonesia',
    description:
      'Creating visual designs and managing social media publications.',
    bullets: [
      'Creating visual designs and managing social media publications.',
    ],
  },
]

export const projectsData: Project[] = [
  {
    id: 'project-ctf-notes',
    title: 'CTF Journey',
    tagline: 'Koleksi writeup dan catatan eksplorasi kompetisi Capture The Flag',
    description:
      'Catatan dan dokumentasi pembelajaran dari berbagai kompetisi CTF yang pernah diikuti (Interfest, COMPFEST, ARA, ACE), mencakup web exploitation dasar, kriptografi, dan analisis tantangan keamanan.',
    category: 'Cyber Security',
    tags: ['Forensics', 'Web Security', 'Cryptography', 'Linux', 'Binary', 'Osint', 'Reverse Engineering'],
    highlights: [
      'Dokumentasi writeup penyelesaian soal CTF dari berbagai perlombaan',
      'Catatan teknik investigasi dan analisis kerentanan web',
    ]
    
  },
  {
    id: 'project-participant-tracking',
    title: 'Event Participant Data Tracker',
    tagline: 'Sistem pencatatan dan pengelolaan data peserta kegiatan kampus',
    description:
      'Implementasi manajemen data spreadsheet terstruktur untuk mengelola dan merekap informasi ratusan peserta acara.',
    category: 'Data Science',
    tags: ['Data Management', 'Spreadsheets', 'Python'],
    highlights: [
      'Pengelolaan database peserta terstruktur dengan minim duplikasi',
      'Memudahkan pemantauan kehadiran dan kelengkapan administrasi',
    ],
  },
  {
    id: 'project-personal-site',
    title: 'Personal Web Portfolio',
    tagline: 'Web profil pribadi dengan antarmuka bersih dan responsif',
    description:
      'Halaman profil web pribadi yang dibangun untuk merangkum riwayat pendidikan, rekam jejak kepanitiaan di ITS, kompetisi CTF, dan kontak.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Desain rapi, responsif, dan nyaman dibuka di berbagai perangkat',
      'Navigasi halus dan struktur data terorganisir',
    ],
    githubUrl: 'https://github.com/Gilang-Lingua',
  },
]
