import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Binar Academy",
    positions: [
      {
        title: "Backend Developer",
        year: "09.2024 - 12.2024",
        description: `
- ♦ Menyusun ERD dan diagram alur untuk memetakan aliran data serta struktur sistem.
- ♦ Mengonfigurasi dan mengintegrasikan basis data menggunakan Prisma ORM.
- ♦ Mengembangkan fitur autentikasi berbasis JWT, mencakup proses pendaftaran dan login.
- ♦ Mengimplementasikan login dengan akun Google.
- ♦ Mengintegrasikan sistem pembayaran tiket melalui API Midtrans.
- ♦ Melakukan pengujian unit dan endpoint menggunakan Jest dan Supertest.
- ♦ Menyusun dokumentasi API secara terstruktur dengan Swagger.
- ♦ Menerapkan CI/CD menggunakan GitHub Actions.
- ♦ Melakukan deployment aplikasi di AWS.`,
        skills: [
          "Javascript",
          "Express.js",
          "Node.js",
          "JWT",
          "Google Auth",
          "Midtrans API",
          "PostgreSQL",
          "Prisma",
          "Jest",
          "Supertest",
          "Swagger",
          "Git Actions",
          "AWS"
        ]
      },
    ],
  },
];
