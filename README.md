# Portfolio Muh. Rinaldi Ruslan

<p align="center">
	<a href="https://github.com/xebec51">
		<img src="https://img.shields.io/badge/GitHub-xebec51-blue?logo=github" alt="GitHub" />
	</a>
	<a href="https://www.linkedin.com/in/rinaldiruslan">
		<img src="https://img.shields.io/badge/LinkedIn-rinaldiruslan-0A66C2?logo=linkedin&logoColor=white" alt="LinkedIn" />
	</a>
	<a href="https://www.instagram.com/rinaldiruslan/">
		<img src="https://img.shields.io/badge/Instagram-rinaldiruslan-E4405F?logo=instagram&logoColor=white" alt="Instagram" />
	</a>
	<a href="https://www.tiktok.com/@rinaldiruslan">
		<img src="https://img.shields.io/badge/TikTok-rinaldiruslan-000000?logo=tiktok&logoColor=white" alt="TikTok" />
	</a>
	<br />
	<img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status" />
	<img src="https://img.shields.io/badge/Next.js-16.1.1-black?logo=nextdotjs" alt="Next.js" />
	<img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
</p>

Portofolio personal yang dibangun dengan Next.js, React, TypeScript, Tailwind CSS, Framer Motion, dan AOS.

## Fitur

- Landing page portofolio dengan beberapa section utama.
- Halaman profil terpisah.
- Animasi interaktif menggunakan Framer Motion dan AOS.
- Google Analytics via `NEXT_PUBLIC_GA_ID`.

## Stack

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `AOS`

## Menjalankan Lokal

1. Install dependency:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka:

```text
http://localhost:3000
```

## Build Produksi

```bash
npm run build
```

Lalu jalankan hasil build dengan:

```bash
npm run start
```

## Environment

Buat atau ubah file [`.env.local`](.env.local) dengan Measurement ID Google Analytics Anda:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Struktur Singkat

- `src/app/` — route utama, layout, dan halaman.
- `src/components/` — komponen UI portofolio.
- `src/data/` — data konten untuk skills, projects, dan certifications.
- `public/` — aset gambar dan file statis.

## Deploy

Project ini siap dideploy ke Vercel.

```bash
vercel
```

## Catatan

- File `.env.local` tidak ikut di-commit.
- Pastikan Measurement ID Google Analytics valid agar tracking aktif.
- Status proyek saat ini: aktif dan siap dikembangkan lebih lanjut.
