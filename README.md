# Portofolio Web

Portofolio web **Gemilang Ananda Lingua**, mahasiswa Departemen Teknologi Informasi, Institut Teknologi Sepuluh Nopember (ITS). 

---

##  Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Smooth Scroll Engine**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)

---

##  Cara Menjalankan Project

### 1. Jalankan Development Server
Untuk melihat tampilan langsung di browser dengan Hot Module Replacement (HMR):
```bash
npm run dev
```
Buka browser di URL yang tertera (biasanya `http://localhost:5173`).

### 2. Build untuk Produksi
Untuk mengkompilasi file siap hosting (Vercel, Netlify, GitHub Pages, cPanel):
```bash
npm run build
```
File hasil build akan berada di dalam direktori `dist/`.

### 3. Preview Hasil Build
```bash
npm run preview
```

---

##  Cara Kustomisasi Data & Konten

Semua data portofolio telah dipusatkan dalam satu file yang mudah diedit:
👉 **`src/data/portfolioData.ts`**

Anda dapat dengan mudah mengubah:
- **Nama & Bio**: Ganti nama, headline, deskripsi, lokasi, dan email di objek `personalInfo`.
- **Daftar Keahlian**: Tambahkan atau ubah teknologi pada array `skillsData`.
- **Daftar Proyek**: Masukkan tautan repo asli, demo live, screenshot, dan deskripsi pada array `projectsData`.
- **Pengalaman**: Sesuaikan pengalaman magang atau kepanitiaan di array `experienceData`.

