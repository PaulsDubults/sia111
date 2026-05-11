import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/69c15ca6660c21644116e864/d72f8bf97_logo.jpg"
              alt="SIA 111 logo"
              className="w-8 h-8 object-contain rounded-full bg-white"
            />
            <div>
              <p className="text-base font-bold text-white font-playfair">
                SIA <span style={{ color: 'hsl(210, 65%, 52%)' }}>111</span>
              </p>
              <p className="text-xs text-white/40 mt-1 tracking-wide">Reģ. Nr. 40103664433 · Licence AGL0003424</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-white/40">
            <a href="tel:29320175" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              29320175
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="mailto:gramatvediba111@inbox.lv" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              gramatvediba111@inbox.lv
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="https://www.facebook.com/p/Gr%C4%81matved%C4%ABbas-pakalpojumi-61574124556072/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 text-center">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} SIA "111". Visas tiesības aizsargātas.
          </p>
        </div>
      </div>
    </footer>
  );
}