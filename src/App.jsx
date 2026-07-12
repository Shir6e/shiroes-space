import { useState, useEffect } from 'react';

export default function App() {
  // 1. Mengingat bagian mana yang sedang aktif (default: 'home')
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Logika "Mata-mata" untuk mendeteksi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Jika elemen berada di area pandang atas layar (margin 150px)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };

    // Memasang sensor scroll ke layar
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-600 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full px-8 py-5 flex items-center justify-between bg-neutral-950/90 backdrop-blur-md border-b border-red-950/40 z-[100]">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-widest text-red-500 cursor-pointer">SHIROE</div>

        {/* Tombol Hamburger/X */}
        <button 
          className="md:hidden text-red-500 z-[110] relative p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className={`transition-all duration-300 uppercase ${activeSection === item ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-red-500 hover:text-red-400'}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* --- SIDEBAR MOBILE (Di bawah Navbar) --- */}
      <div className={`fixed top-[73px] right-0 w-64 bg-neutral-950/90 backdrop-blur-md border-l border-red-600 transition-transform duration-300 ease-in-out md:hidden z-[90] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center py-8 gap-8">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-black uppercase tracking-widest transition-all duration-300 ${activeSection === item ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-red-600 hover:text-red-400'}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* --- KONTEN UTAMA (Tambahkan id="home" di sini) --- */}
      <main id="home" className="flex flex-col items-center justify-center min-h-screen pt-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-wider">
            SHIROE'S <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">SPACE</span>
          </h1>
          <p className="text-neutral-400 max-w-md mx-auto text-sm md:text-base font-light tracking-wide">
            Sebuah ruang digital untuk portofolio, catatan perjalanan, dan eksperimen pemrograman.
          </p>
        </div>
      </main>

      {/* --- BAGIAN ABOUT / BIODATA --- */}
      <section id="about" className="w-full py-24 bg-neutral-950 border-t border-red-950/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 flex items-center gap-4 tracking-wider">
            <span className="w-12 h-1 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            ABOUT ME
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-neutral-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
              <p>
                Halo, perkenalkan namaku <span className="text-white font-semibold">Muhammad Azka Pratama</span>. Lahir pada tahun 2006, saat ini aku sedang menempuh pendidikan semester 5 di Fakultas Perikanan dan Ilmu Kelautan, jurusan Perikanan, Universitas Padjadjaran.
              </p>
              <p>
                Aku memiliki ketertarikan mendalam pada persimpangan antara budidaya perairan dan teknologi. Selain mempelajari sistem produksi akuakultur, aku juga aktif bereksperimen dengan <span className="text-red-400 font-semibold">Python</span> dan <span className="text-red-400 font-semibold">IoT (Arduino)</span> untuk mengintegrasikan teknologi modern dalam pemantauan kualitas air.
              </p>
              <p>
                Di waktu luang, aku mengeksplorasi dunia <span className="text-red-400 font-semibold">Web Development</span> dan desain antarmuka, yang kini menjadi fondasi utama dari penciptaan Shiroe's Space ini.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-red-700 opacity-20 group-hover:opacity-40 blur-md transition duration-500"></div>
              <div className="relative bg-neutral-900 border border-red-900/50 p-8 h-full flex flex-col justify-center gap-6 rounded-none">
                <div className="flex justify-between items-center border-b border-red-950/70 pb-4">
                  <span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">Name</span>
                  <span className="text-white font-mono text-sm md:text-base">M. Azka Pratama</span>
                </div>
                <div className="flex justify-between items-center border-b border-red-950/70 pb-4">
                  <span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">University</span>
                  <span className="text-white font-mono text-sm md:text-base">UNPAD</span>
                </div>
                <div className="flex justify-between items-center border-b border-red-950/70 pb-4">
                  <span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">Major</span>
                  <span className="text-white font-mono text-sm md:text-base">Perikanan (Sem 5)</span>
                </div>
                <div className="flex justify-between items-center border-b border-red-950/70 pb-4">
                  <span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">Tech Stack</span>
                  <span className="text-white font-mono text-sm md:text-base">Python, React, IoT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-bold">Est.</span>
                  <span className="text-white font-mono text-sm md:text-base">2006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN PROJECTS --- */}
      <section id="projects" className="w-full py-24 bg-neutral-950 border-t border-red-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-wider">
              PROJECTS
              <span className="w-12 h-1 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            </h2>
            <p className="text-neutral-500 mt-2 tracking-widest text-sm uppercase">Archive & Experiments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-red-950 rounded-none p-6 transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">Scripting</span>
                <i className="text-neutral-600 group-hover:text-red-500 transition-colors font-mono">01</i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Kalkulator Padat Tebar
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                Skrip interaktif untuk menghitung dimensi dan kapasitas kolam secara presisi guna optimasi produksi akuakultur.
              </p>
              <div className="mt-6 pt-4 border-t border-red-950/50 flex gap-3">
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">PYTHON</span>
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">TERMINAL</span>
              </div>
            </div>
            <div className="bg-neutral-900 border border-red-950 rounded-none p-6 transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">IoT / Hardware</span>
                <i className="text-neutral-600 group-hover:text-red-500 transition-colors font-mono">02</i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Sensor Kualitas Air
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                Integrasi mikrokontroler Arduino untuk pemantauan data kualitas air kolam perikanan secara real-time.
              </p>
              <div className="mt-6 pt-4 border-t border-red-950/50 flex gap-3">
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">ARDUINO</span>
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">HARDWARE</span>
              </div>
            </div>
            <div className="bg-neutral-900 border border-red-950 rounded-none p-6 transform transition-all duration-300 ease-out hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">Visual Design</span>
                <i className="text-neutral-600 group-hover:text-red-500 transition-colors font-mono">03</i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Branding TriSea
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                Eksplorasi antarmuka dan penyusunan layout flat 2D presisi untuk tata letak visual kemasan produk ikan asin teri premium.
              </p>
              <div className="mt-6 pt-4 border-t border-red-950/50 flex gap-3">
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">UI/UX</span>
                <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1">FLAT LAYOUT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- BAGIAN CONTACT --- */}
      <section id="contact" className="w-full py-24 bg-neutral-950 border-t border-red-950/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-wider flex justify-center items-center gap-4">
            <span className="w-8 h-1 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            GET IN TOUCH
            <span className="w-8 h-1 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </h2>
          
          <p className="text-neutral-400 mb-12 max-w-lg mx-auto font-light">
            Tertarik untuk berkolaborasi dalam proyek web, eksperimen IoT, atau sekadar berdiskusi seputar teknologi dan perikanan? Jangan ragu untuk mengirimkan pesan.
          </p>

          {/* Tombol Email / Kontak */}
          <a 
            href="mailto:pratamaazka007@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 font-bold tracking-widest hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300 rounded-none"
          >
            <span>SEND MESSAGE</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-neutral-950 border-t border-red-950/80 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-red-500 font-black tracking-widest text-lg">
            SHIROE<span className="text-neutral-600">.</span>
          </div>
          
          <p className="text-neutral-500 text-xs tracking-widest font-mono">
            © 2026 M. AZKA PRATAMA. BUILT WITH REACT & TAILWIND.
          </p>
          
          {/* Tautan Sosial Media Sederhana */}
          <div className="flex gap-6 text-sm font-mono">
            <a href="#" className="text-neutral-500 hover:text-red-400 transition-colors">GITHUB</a>
            <a href="#" className="text-neutral-500 hover:text-red-400 transition-colors">LINKEDIN</a>
            <a href="#" className="text-neutral-500 hover:text-red-400 transition-colors">INSTAGRAM</a>
          </div>

        </div>
      </footer>

    </div>
  );
}