# Portofolio Web

Portofolio web **Gemilang Ananda Lingua**, mahasiswa Departemen Teknologi Informasi, Institut Teknologi Sepuluh Nopember (ITS). Dilengkapi integrasi **Lenis Smooth Scroll** untuk pengalaman scrolling 60fps yang sangat halus, elegan, dan interaktif.

---

##  Fitur Unggulan

1. **Lenis Smooth Scroll**:
   - Transisi inersia mulus saat scrolling mouse wheel dan touch.
   - Smooth anchor navigation otomatis saat mengklik menu navbar (`#about`, `#projects`, `#skills`, dll).
   - Top progress bar gradien yang sinkron dengan posisi scroll.
   - Tombol floating *Back to Top* dengan indikator progress lingkaran dinamis.
2. **Desain Modern & Gelap (Cyber / Clean Minimalist)**:
   - Palet warna gelap modern (*zinc-950* dan *slate-100*) dengan aksen gradien cyan, indigo, dan emerald.
   - Efek *glassmorphism*, glowing background accents, dan grid texture.
3. **Struktur Konten Portofolio Lengkap**:
   - **Hero Section**: Headline dampak tinggi, status beacon magang aktif ("🟢 Terbuka untuk Magang"), preview terminal code, dan link sosial.
   - **Tentang Saya**: Latar belakang akademis, etos kerja, dan 4 pilar kompetensi.
   - **Keahlian (Tech Stack)**: Filter tab (Frontend, Backend, Database, Tools) dengan level kecakapan & ikon rapi.
   - **Proyek Pilihan**: Kartu portofolio dengan mockup browser, live demo link, github link, serta **Modal Detail Arsitektur**.
   - **Pengalaman & Kampus**: Garis waktu (*timeline*) magang, asisten lab, dan organisasi.
   - **Hubungi Saya**: Tombol salin email satu klik dengan animasi konfeti perayaan (`canvas-confetti`), kartu direct WhatsApp/LinkedIn, dan form kontak interaktif.
   - **Modal Resume / CV**: Pop-up ringkasan riwayat hidup yang siap cetak / simpan ke PDF.

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

---

##  Pengaturan Lenis Smooth Scroll

Konfigurasi Lenis berada di:
👉 **`src/context/LenisContext.tsx`**

Anda dapat mengatur parameter berikut sesuai selera:
```ts
const lenis = new Lenis({
  duration: 1.2,        // Durasi scroll (makin besar, makin lembut)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Kurva easing
  smoothWheel: true,    // Aktifkan smooth scroll untuk wheel mouse
  touchMultiplier: 1.5, // Sensitivitas layar sentuh
})
```