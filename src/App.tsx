import { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Code2, 
  Globe, 
  Layers, 
  Database, 
  ShieldCheck, 
  Lock, 
  ScanSearch, 
  KeyRound, 
  AlertTriangle, 
  Wrench, 
  Bug, 
  Github, 
  Send, 
  MessageSquare, 
  Mail,
  ExternalLink 
} from 'lucide-react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [clock, setClock] = useState('00:00:00 AM');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const hoursStr = String(hours).padStart(2, '0');
      setClock(`${hoursStr}:${minutes}:${seconds} ${ampm}`);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reveal animation optimized with throttling
    let ticking = false;
    const reveal = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const reveals = document.querySelectorAll(".reveal:not(.active)");
          const windowHeight = window.innerHeight;
          
          reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
              el.classList.add("active");
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", reveal, { passive: true });
    reveal(); // Initial reveal

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="antialiased selection:bg-black selection:text-white">
      {/* Canvas removed to improve performance */}

      <button className="theme-toggle" id="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <Sun className="sun-icon" /> : <Moon className="moon-icon" />}
      </button>

      <main className="content-wrapper max-w-4xl mx-auto px-6 py-12 md:py-24">
        <header className="reveal flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="profile-img-container relative flex-shrink-0">
            <img
              src="/kill.jpeg"
              alt="Foto Killua Zoldyck"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 shadow-xl relative z-10" />
          </div>

          <div className="text-center md:text-left">
            <div className="inline-block badge-available text-[10px] px-3 py-1 font-bold tracking-widest uppercase mb-4">
              Tersedia Untuk Proyek
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
              Killua Ahmad Al.A.A
            </h1>
            <p className="text-xl font-light mb-6" style={{ color: 'var(--text-secondary)' }}>
              Fullstack Developer & <span className="italic font-medium">UI/UX Enthusiast</span>
            </p>
            <div className="flex flex-col md:items-start items-center">
              <p className="text-sm tracking-tight" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-bold italic">"Labor Omnia Vincit"</span>
                <span className="mx-2 opacity-30">•</span>
                <span className="font-medium uppercase tracking-wider text-[11px] badge-quote px-2 py-0.5 rounded">Hard Work Conquers All</span>
              </p>
            </div>
          </div>
        </header>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
            <div className="h-1 w-12 divider"></div>
          </div>
          <div className="md:col-span-2">
            <p className="leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
              Saya seorang developer web dan mobile yang berorientasi pada performa, efisiensi, dan keamanan. Berkomitmen membangun solusi digital yang cepat, stabil, dan relevan dengan kebutuhan pengguna.
            </p>
          </div>
        </section>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Skills</h2>
            <div className="h-1 w-12 divider"></div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="skill-card group">
              <i className="devicon-html5-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">HTML5</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-css3-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">CSS3</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-javascript-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">JS</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-react-original"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">React</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-vuejs-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">Vue.js</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-python-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">Python</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-tailwindcss-original"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">Tailwind</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-php-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">PHP</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-laravel-original"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">Laravel</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-flutter-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">Flutter</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-mysql-original"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">MySQL</span>
            </div>
            <div className="skill-card group">
              <i className="devicon-mongodb-plain"></i>
              <span className="text-[10px] font-bold uppercase tracking-widest">MongoDB</span>
            </div>
          </div>
        </section>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Expertise</h2>
            <div className="h-1 w-12 divider"></div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="skill-category-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Programming</h3>
              </div>
              <div className="space-y-1">
                <div className="skill-item">
                  <i className="devicon-javascript-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-typescript-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>TypeScript</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-python-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Python</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-nodejs-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Node.js</span>
                </div>
              </div>
            </div>

            <div className="skill-category-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Web Development</h3>
              </div>
              <div className="space-y-1">
                <div className="skill-item">
                  <i className="devicon-react-original"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>React Frontend</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-vuejs-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Vue Framework</span>
                </div>
                <div className="skill-item">
                  <Layers className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Backend Architecture</span>
                </div>
                <div className="skill-item">
                  <Database className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Database Design</span>
                </div>
              </div>
            </div>

            <div className="skill-category-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Cybersecurity</h3>
              </div>
              <div className="space-y-1">
                <div className="skill-item">
                  <Lock className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Web Application Security</span>
                </div>
                <div className="skill-item">
                  <ScanSearch className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Vulnerability Analysis</span>
                </div>
                <div className="skill-item">
                  <KeyRound className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Secure Auth Systems</span>
                </div>
                <div className="skill-item">
                  <AlertTriangle className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>OWASP Top 10</span>
                </div>
              </div>
            </div>

            <div className="skill-category-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Tools & Platforms</h3>
              </div>
              <div className="space-y-1">
                <div className="skill-item">
                  <i className="devicon-linux-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Linux</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-git-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Git / GitHub</span>
                </div>
                <div className="skill-item">
                  <i className="devicon-docker-plain"></i>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Docker</span>
                </div>
                <div className="skill-item">
                  <Bug className="lucide w-5 h-5" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Security Testing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Study</h2>
            <div className="h-1 w-12 divider"></div>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-2">
              <div className="timeline-item">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>2023 — Sekarang</span>
                <h3 className="text-xl font-bold mt-1">Teknik Komputer dan Jaringan</h3>
                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>SMK Muhammadiyah 1 Pandaan</p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Fokus pada pengembangan aplikasi web, algoritma pemograman, dan manajemen basis data. Aktif dalam komunitas coding sekolah.
                </p>
              </div>
              <div className="timeline-item">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>2020 — 2023</span>
                <h3 className="text-xl font-bold mt-1">Sekolah Menengah Pertama</h3>
                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>SMP Negeri 01 Pandaan</p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Mulai mengeksplorasi dunia teknologi informasi dan dasar-dasar desain grafis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Projects</h2>
            <div className="h-1 w-12 divider"></div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="preview-card group">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Project 1" className="preview-image" />
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Web Development</span>
                <h3 className="text-lg font-bold mt-1">Godspeed Dashboard</h3>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Sistem monitoring server real-time dengan integrasi WebSocket.</p>
              </div>
            </div>
            <div className="preview-card group">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="Project 2" className="preview-image" />
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Mobile App</span>
                <h3 className="text-lg font-bold mt-1">Zoldyck Estate App</h3>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Aplikasi manajemen keamanan pintu berbasis Flutter dan IoT.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal section-separator"></div>

        <section className="reveal grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">Certifications</h2>
            <div className="h-1 w-12 divider"></div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="preview-card group">
              <img src="/software_engineer_intern_certificate-1.png" alt="Software Engineer Intern Certificate" className="preview-image" />
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Professional Certification</span>
                <h3 className="text-lg font-bold mt-1">Software Engineer Intern</h3>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Sertifikasi profesional sebagai Software Engineer Intern.</p>
                <a href="/software_engineer_intern_certificate-1.png" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </a>
              </div>
            </div>
            <div className="preview-card group">
              <img src="/software_engineer_certificate-1.png" alt="Software Engineer Certificate" className="preview-image" />
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Professional Certification</span>
                <h3 className="text-lg font-bold mt-1">Software Engineer</h3>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>Sertifikasi profesional sebagai Software Engineer.</p>
                <a href="/software_engineer_certificate-1.png" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="reveal mt-20 pt-10 custom-footer text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Github"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Telegram"><Send className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Chat"><MessageSquare className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Mail"><Mail className="w-5 h-5" /></a>
          </div>
          <p id="clock" className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{clock}</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
