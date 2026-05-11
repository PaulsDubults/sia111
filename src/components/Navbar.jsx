import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Pakalpojumi', href: '#pakalpojumi' },
  { label: 'Cenas', href: '#cenas' },
  { label: 'Kāpēc mēs', href: '#kapec-mes' },
  { label: 'Kontakti', href: '#kontakti' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'hsl(var(--foreground))', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 leading-none">
          <img
            src="https://media.base44.com/images/public/69c15ca6660c21644116e864/d72f8bf97_logo.jpg"
            alt="SIA 111 logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-playfair">
              SIA <span style={{ color: 'hsl(210, 65%, 52%)' }}>111</span>
            </span>
            <span className="text-[9px] tracking-[0.18em] uppercase mt-0.5 font-inter" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Licencēts grāmatvedis
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors font-inter tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }} onMouseEnter={e => e.target.style.color='white'} onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.55)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.facebook.com/p/Gr%C4%81matved%C4%ABbas-pakalpojumi-61574124556072/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-inter transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </a>
          <a
            href="tel:29320175"
            className="flex items-center gap-2 text-sm font-inter transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
          >
            <Phone className="h-3.5 w-3.5" />
            29320175
          </a>
          <a
            href="#kontakti"
            className="text-sm font-semibold px-5 py-2 hover:opacity-90 transition-opacity font-inter tracking-wide"
            style={{ background: 'hsl(35, 90%, 68%)', color: 'white' }}
          >
            Saņemt piedāvājumu
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b px-6 pb-5 pt-3 space-y-3" style={{ background: 'hsl(var(--foreground))', borderColor: 'rgba(255,255,255,0.08)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm py-1 font-inter" style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:29320175" className="flex items-center gap-2 text-sm py-1 font-inter" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Phone className="h-3.5 w-3.5" />
            29320175
          </a>
          <a
            href="#kontakti"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold px-5 py-2.5 text-center hover:opacity-90 transition-opacity font-inter"
            style={{ background: 'hsl(35, 90%, 68%)', color: 'white' }}
          >
            Saņemt piedāvājumu
          </a>
        </div>
      )}
    </header>
  );
}