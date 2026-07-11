import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AOSInit from "../components/AOSInit";
import Preloader from "../components/Preloader";

const siteUrl = "https://naldiporto.vercel.app";
const defaultTitle =
  "Muh. Rinaldi Ruslan | Full Stack Developer & Machine Learning Engineer";
const defaultDescription =
  "Portfolio Muh. Rinaldi Ruslan, Full Stack Developer dan Machine Learning Engineer dari Makassar, Indonesia. Menampilkan proyek web development, machine learning, computer vision, MLOps, sertifikasi, dan pengalaman profesional.";

// TODO: Replace this fallback with /og-image.png (1200x630) for an ideal social preview.
const socialImage = "/profile.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Muh. Rinaldi Ruslan",
  },
  description: defaultDescription,
  applicationName: "Naldi Portfolio",
  authors: [{ name: "Muh. Rinaldi Ruslan", url: siteUrl }],
  creator: "Muh. Rinaldi Ruslan",
  publisher: "Muh. Rinaldi Ruslan",
  keywords: [
    "Muh Rinaldi Ruslan",
    "Muh. Rinaldi Ruslan",
    "Naldi",
    "Naldi portfolio",
    "Full Stack Developer Makassar",
    "Machine Learning Engineer Indonesia",
    "Software Developer Indonesia",
    "Web Developer Portfolio",
    "Computer Vision Portfolio",
    "MLOps Portfolio",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "Naldi Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 736,
        height: 736,
        alt: "Muh. Rinaldi Ruslan - Full Stack Developer dan Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="id">
      <head>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}', { page_path: window.location.pathname });`}
            </Script>
          </>
        ) : null}
      </head>
      <body className="antialiased">
        <Preloader />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
