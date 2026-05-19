import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AOSInit from "../components/AOSInit";
import Preloader from "../components/Preloader";

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
      <head>
        {/* Google Analytics - set NEXT_PUBLIC_GA_ID in environment */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });`}
        </Script>
      </head>
      <body className="antialiased">
        <Preloader />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}