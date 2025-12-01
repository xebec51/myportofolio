// src/data/certifications.ts

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialLink: string;
}

const certs = [
  // --- TAHUN 2025 (Terbaru) ---
  { 
    file: "Belajar Membuat Aplikasi Flutter untuk Pemula", 
    imageFile: "Belajar Membuat Aplikasi Flutter untuk Pemula-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Nov 2025", 
    credentialLink: "https://www.dicoding.com/certificates/53XEK3O2KXRN"
  },
  { 
    file: "Introduction to Generative AI", 
    imageFile: "Introduction Artificial Intelligence-page-00001.jpg",
    issuer: "IBM SkillsBuild", 
    date: "Nov 2025",
    credentialLink: "https://skills.yourlearning.ibm.com/certificate/share/d0842e2242ewogICJvYmplY3RJZCIgOiAiQUxNLUNPVVJTRV80MDU4ODU5IiwKICAibGVhcm5lckNOVU0iIDogIjYwMDY2NjFSRUciLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIKfQ00e7d3c7f4-10"
  },
  { 
    file: "Introduction to Financial Literacy", 
    imageFile: "Introduction to Financial Literacy-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Nov 2025" ,
    credentialLink: "https://www.dicoding.com/certificates/72ZDKDEYLPYW"
  },
  { 
    file: "Belajar Dasar AI", 
    imageFile: "Belajar Dasar AI-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Nov 2025",
    credentialLink: "https://www.dicoding.com/certificates/L4PQ2WM22ZO1"
  },
  { 
    file: "Memulai Pemrograman dengan Dart", 
    imageFile: "Memulai Pemrograman dengan Dart-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Nov 2025",
    credentialLink: "https://www.dicoding.com/certificates/JMZVVO7N3ZN9"
  },
  { 
    file: "Belajar Dasar Manajemen Proyek", 
    imageFile: "Belajar Dasar Manajemen Proyek-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Juli 2025",
    credentialLink: "https://www.dicoding.com/certificates/L4PQ2MLY2ZO1"
  },
  { 
    file: "Financial Literacy 101", 
    imageFile: "Financial Literacy 101-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Mei 2025",
    credentialLink: "https://www.dicoding.com/certificates/0LZ0RLDQNP65"
  },
  { 
    file: "Belajar Back-End Pemula dengan JavaScript", 
    imageFile: "Belajar Back-End Pemula dengan JavaScript-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Feb 2025",
    credentialLink: "https://www.dicoding.com/certificates/53XEDDM3RPRN"
  },
  { 
    file: "Introduction to Big Data", 
    imageFile: "Introduction to Big data-page-00001.jpg",
    issuer: "Coursera (UC San Diego)", 
    date: "Feb 2025",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/Y6OSOPMRRNW3"
  },
  { 
    file: "SWIFT Pemrograman Dasar", 
    imageFile: "SWIFT PEMROGRAMAN DASAR-page-00001.jpg",
    issuer: "GameLab Indonesia", 
    date: "Feb 2025",
    credentialLink: "https://www.gamelab.id/certificate/GL9481864784"
  },
  { 
    file: "DBS Coding Camp Front-End Expert", 
    imageFile: "DBSFrontEnd_Expert-page-00001.jpg",
    issuer: "DBS Foundation", 
    date: "Jan 2025",
    credentialLink: "https://www.dbs.com/newsroom/DBS_Foundation_holds_DBS_Foundation_Coding_Camp_2024_to_offer_free_coding_classes"
  },
  { 
    file: "Menjadi Front-End Web Developer Expert", 
    imageFile: "Menjadi Front-End Web Developer Expert-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Jan 2025",
    credentialLink: "https://www.dicoding.com/certificates/JLX193QEGP72"
  },
  { 
    file: "Belajar Machine Learning untuk Pemula", 
    imageFile: "Belajar Machine Learning untuk Pemula-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Jan 2025",
    credentialLink: "https://www.dicoding.com/certificates/4EXGV6KNQXRL"
  },

  // --- TAHUN 2024 ---
  { 
    file: "HackerRank SQL (Basic)", 
    imageFile: "HackerRank_SQL (Basic).png", 
    issuer: "HackerRank", 
    date: "Des 2024",
    credentialLink: "https://www.hackerrank.com/certificates/iframe/0bfd9ae9099c"
  },
  { 
    file: "Java Fundamentals & Programming", 
    imageFile: "Sertifikat_MUH RINALDI RUSLAN_Java Fundamentals & Java Programming-page-00001.jpg",
    issuer: "Oracle Academy", 
    date: "2024",
    credentialLink: "https://mapi.sdmdigital.id/get-file?path=output_signed/200-791-7342/179df93b-b5c2-44a3-9673-e5c8f6c34045.pdf&disk=dts-storage-sertifikat"
  },
  { 
    file: "Belajar Analisis Data dengan Python", 
    imageFile: "Belajar Analisis Data dengan Python-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Des 2024",
    credentialLink: "https://www.dicoding.com/certificates/2VX348R83ZYQ"
  },
  { 
    file: "Belajar Dasar Data Science", 
    imageFile: "Belajar Dasar Data Science-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Okt 2024",
    credentialLink: "https://www.dicoding.com/certificates/JLX14DRGNX72"
  },
  { 
    file: "DBS Front-End Intermediate", 
    imageFile: "DBSFrontEnd_Intermediate-page-00001.jpg",
    issuer: "DBS Coding Camp Foundation", 
    date: "Sep 2024",
    credentialLink: "https://www.dbs.com/newsroom/DBS_Foundation_holds_DBS_Foundation_Coding_Camp_2024_to_offer_free_coding_classes"
  },
  { 
    file: "Belajar Dasar Structured Query Language (SQL)", 
    imageFile: "Belajar Dasar Structured Query Language (SQL)-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Sep 2024",
    credentialLink: "https://www.dicoding.com/certificates/N9ZOY3428PG5"
  },
  { 
    file: "Belajar Fundamental Front-End Web Development", 
    imageFile: "Belajar Fundamental Front-End Web Development-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Sep 2024",
    credentialLink: "https://www.dicoding.com/certificates/KEXL152OYXG2"
  },
  { 
    file: "HackerRank Java (Basic)", 
    imageFile: "HackerRankJavaBasic_Muh. Rinaldi Ruslan-page-00001.jpg",
    issuer: "HackerRank", 
    date: "Juli 2024",
    credentialLink: "#"
  },
  { 
    file: "Cloud Practitioner Essentials (AWS)", 
    imageFile: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)-page-00001.jpg",
    issuer: "AWS & Dicoding", 
    date: "Juli 2024",
    credentialLink: "https://www.dicoding.com/certificates/0LZ06NJ30Z65"
  },
  { 
    file: "UKBI (Uji Kemahiran Berbahasa Indonesia)", 
    imageFile: "UKBI-page-00001.jpg",
    issuer: "Kemendikbud", 
    date: "Juli 2024",
    credentialLink: "https://ukbi.kemdikbud.go.id/sertifikat/download/1041868"
  },
  { 
    file: "Belajar Membuat Front-End Web untuk Pemula", 
    imageFile: "Belajar Membuat Front-End Web untuk Pemula-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Juni 2024",
    credentialLink: "https://www.dicoding.com/certificates/72ZDVJYOJZYW"
  },
  { 
    file: "Belajar Dasar Pemrograman JavaScript", 
    imageFile: "Belajar Dasar Pemrograman JavaScript-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Apr 2024",
    credentialLink: "https://www.dicoding.com/certificates/4EXGQ32MEZRL"
  },
  { 
    file: "Kotlin Pemrograman Dasar", 
    imageFile: "Kotlin_Muh. Rinaldi Ruslan-page-00001.jpg",
    issuer: "GameLab Indonesia", 
    date: "Mar 2024",
    credentialLink: "https://www.gamelab.id/certificate/GL2939789249"
  },
  { 
    file: "Memulai Pemrograman Dengan Java", 
    imageFile: "Memulai Pemrograman Dengan Java-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Feb 2024",
    credentialLink: "https://www.dicoding.com/certificates/QLZ940NK7P5D"
  },
  { 
    file: "Belajar Dasar Pemrograman Web", 
    imageFile: "Belajar Dasar Pemrograman Web-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Feb 2024",
    credentialLink: "https://www.dicoding.com/certificates/EYX4086NOPDL"
  },
  { 
    file: "HackerRank Python (Basic)", 
    imageFile: "HackerrankPythonBasic-page-00001.jpg",
    issuer: "HackerRank", 
    date: "Feb 2024",
    credentialLink: "https://www.hackerrank.com/certificates/2435e17b0bc7"
  },

  // --- TAHUN 2023 ---
  { 
    file: "Belajar Dasar Visualisasi Data", 
    imageFile: "Belajar Dasar Visualisasi Data-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Des 2023",
    credentialLink: "https://www.dicoding.com/certificates/6RPNVKGD9Z2M"
  },
  { 
    file: "Memulai Pemrograman dengan Python", 
    imageFile: "Memulai Pemrograman dengan Python-page-00001.jpg",
    issuer: "Dicoding Indonesia", 
    date: "Nov 2023",
    credentialLink: "https://www.dicoding.com/certificates/EYX4010O5PDL"
  },

  // --- Tahun 2022 ---
  { 
    file: "Kelas Nahwu Sharaf", 
    imageFile: "Kelas Nahwu Sharaf.png",
    issuer: "Arabic Quantum", // Ganti dengan nama lembaga yang tertera di sertifikat
    date: "Juli 2022", // Sesuaikan tahunnya
    credentialLink: "https://arabicquantum.com/"
  },
  { 
    file: "Kursus Bahasa Arab", 
    imageFile: "Kursus Bahasa Arab.PNG",
    issuer: "Arabic Quantum", // Ganti dengan nama lembaga yang tertera di sertifikat
    date: "Juni 2022", // Sesuaikan tahunnya
    credentialLink: "https://arabicquantum.com/"
  },
];

export const certifications: Certificate[] = certs.map((cert, index) => ({
  id: index + 1,
  title: cert.file,
  issuer: cert.issuer,
  date: cert.date,
  // PERBAIKAN: Menghapus '/thumbnails' dari path karena file ada langsung di dalam '/certificates'
  image: `/certificates/${cert.imageFile}`, 
  credentialLink: cert.credentialLink
}));