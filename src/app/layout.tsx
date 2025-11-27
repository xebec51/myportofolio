import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "../components/AOSInit";

export const metadata: Metadata = {
  title: "Portofolio Muh. Rinaldi Ruslan",
  description: "Portofolio web Muh. Rinaldi Ruslan - Front-End Developer & Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}