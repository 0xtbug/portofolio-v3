# 🚀 Portofolio v3

Selamat datang di repositori portofolio pribadi saya! Website portofolio modern yang dibangun dengan teknologi terdepan untuk menampilkan perjalanan, proyek, dan keahlian saya sebagai Full-stack Developer.

## ✨ Preview

![Portfolio Preview](https://github.com/user-attachments/assets/e330c8b9-1902-42a0-a18a-6fac9c2f5c92)
**🌐 Live Demo:** [Kunjungi Website](https://tubagusnm.com/)

## 🛠️ Tech Stack

### Core Framework
- **[Astro](https://astro.build/)** - Static Site Generator yang modern dan performant
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe Typescript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typography
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

### Content Management
- **[MDX](https://mdxjs.com/)** - Markdown dengan komponen React
- **Astro Content Collections** - Type-safe content management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vercel Analytics](https://vercel.com/analytics)** - Website analytics

## 📁 Struktur Proyek

```
portofolio-v3/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── louai-avatar.jpg
│   └── og-images/          # Open Graph images
├── src/
│   ├── components/         # Reusable components
│   │   ├── sections/       # Page sections
│   │   ├── ui/            # UI components
│   │   └── navbar/        # Navigation components
│   ├── content/           # MDX content
│   │   ├── blog/          # Blog articles
│   │   └── projects/      # Project details
│   ├── data/              # Static data
│   ├── layouts/           # Page layouts
│   ├── lib/               # Utilities & constants
│   │   ├── constants/     # App constants
│   │   └── utils.ts       # Helper functions
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Pastikan Anda memiliki Node.js versi 18+ dan PNPM terinstall:

```bash
node --version  # >= 18.0.0
pnpm --version  # Latest version
```

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/0xtbug/portofolio-v3.git
   cd portofolio-v3
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` dan tambahkan variabel yang diperlukan:
   ```env
   # Google AI API (untuk AI-generated summaries)
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

   Website akan tersedia di `http://localhost:4321`

## 📝 Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm astro` | Run Astro CLI commands |

## 🎨 Customization

### Personal Information

Edit file-file berikut untuk menyesuaikan dengan informasi Anda:

- `src/lib/constants/profile.ts` - Informasi profil utama
- `src/lib/constants/about.ts` - Tentang Anda
- `src/lib/constants/experience.ts` - Pengalaman kerja
- `src/lib/constants/education.ts` - Riwayat pendidikan
- `src/lib/constants/tech-stack.ts` - Technology stack

### Content

#### Menambah Blog Post
1. Buat file `.mdx` baru di `src/data/blog/`
2. Tambahkan frontmatter yang sesuai:
   ```mdx
   ---
   title: "Judul Article"
   description: "Deskripsi singkat"
   pubDatetime: 2024-01-01
   tags: ["javascript", "web-development"]
   featured: true
   ---

   Konten artikel Anda...
   ```

#### Menambah Project
1. Buat file `.mdx` baru di `src/data/projects/`
2. Tambahkan frontmatter project:
   ```mdx
   ---
   title: "Nama Project"
   description: "Deskripsi project"
   technologies: ["React", "Node.js"]
   githubUrl: "https://github.com/username/repo"
   liveUrl: "https://project-demo.com"
   ---

   Detail project Anda...
   ```

### Styling

Website menggunakan Tailwind CSS dengan dark/light mode support. Customisasi tema di:
- `tailwind.config.js` - Konfigurasi Tailwind
- `src/styles/global.css` - Global styles

## 🌐 Deployment

### Vercel (Recommended)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Import repository GitHub Anda
   - Vercel akan otomatis mendeteksi Astro dan deploy

### Netlify

1. **Build project**
   ```bash
   pnpm build
   ```

2. **Deploy folder `dist/`** ke Netlify

### Manual Hosting

1. **Build untuk production**
   ```bash
   pnpm build
   ```

2. **Upload folder `dist/`** ke hosting provider Anda

## 🔧 Features

- ✅ **Modern Design** - Clean, responsive, dan professional
- ✅ **Dark/Light Mode** - Toggle tema otomatis
- ✅ **SEO Optimized** - Meta tags, Open Graph, sitemap
- ✅ **Performance** - Lighthouse score 100
- ✅ **Accessibility** - WCAG compliant
- ✅ **Mobile Responsive** - Perfect di semua device
- ✅ **Blog System** - MDX-powered blog dengan tags
- ✅ **Project Showcase** - Portfolio projects dengan detail
- ✅ **Reading Time** - Estimasi waktu baca artikel
- ✅ **Analytics Ready** - Vercel Analytics integration
- ✅ **AI Summaries** - Google AI-generated content summaries

## 🎯 Performance

- **Lighthouse Score:** 100/100
- **Core Web Vitals:** Excellent
- **Bundle Size:** < 50KB (gzipped)
- **Load Time:** < 1s (First Contentful Paint)

## 🤝 Contributing

Kontribusi selalu diterima! Silakan:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request
---

⭐ **Jika project ini bermanfaat, jangan lupa berikan star!**

Made with ❤️ using [Astro](https://astro.build/)
