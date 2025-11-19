import Link from 'next/link';

// Pindahkan ke file constants/navigation.ts jika proyek semakin besar
const navigationLinks = [
  { name: 'Tentang Saya', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Nama / Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-red-600 transition-colors">
          Portofolio Web
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-600 hover:text-red-600 font-medium transition duration-150">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Tombol Kontak (Opsional) */}
        <div className="hidden md:block">
            <Link 
                href="#contact" 
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150 shadow-lg"
            >
                Hubungi Saya
            </Link>
        </div>

        {/* Placeholder untuk Mobile Menu (Hamburger Icon) - Kita bisa tambahkan fungsionalitasnya nanti */}
        <div className="md:hidden">
          {/* Anda bisa menambahkan ikon hamburger di sini */}
          <button className="text-gray-600 hover:text-red-600 text-2xl">
              ☰
          </button>
        </div>
      </div>
    </header>
  );
}