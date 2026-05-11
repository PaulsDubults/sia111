import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const extras = [
  { label: 'Čeku apstrāde', price: '1 EUR/gab.' },
  { label: 'Konsultācijas', price: '10–20 EUR/stundā' },
  { label: 'Dokumentu sagatavošana', price: 'pēc vienošanās' },
  { label: 'Gada pārskats', price: 'mēneša maksas apmērā' },
  { label: 'Statistikas atskaites', price: 'no 7 EUR' },
];

const factors = [
  'Darbinieku skaits',
  'Dokumentu un rēķinu apjoms',
  'PVN reģistrācija',
  'Bankas darījumu skaits',
  'Uzņēmuma darbības sarežģītība',
  'Nepieciešamo atskaišu skaits',
];

export default function PricingSection() {
  return (
    <section id="cenas" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, hsl(210,60%,96%) 60%, hsl(215,65%,94%) 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase font-inter">Cenas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair" style={{ color: 'hsl(210, 65%, 52%)' }}>
            Individuāla cenu noteikšana
          </h2>
        </motion.div>

        {/* Main pricing explanation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-8 border border-border bg-white shadow-sm"
        >
          <p className="text-foreground font-semibold text-base mb-3 font-inter">
            Kā tiek noteikta cena?
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm font-inter mb-6">
            Cena tiek noteikta individuāli, atkarībā no darba apjoma — darbinieku skaita, dokumentu apjoma,
            PVN, bankas darījumu skaita, rēķinu daudzuma u.c. Katram klientam tiek sagatavots personalizēts
            piedāvājums pēc sākotnējās konsultācijas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {factors.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'hsl(35, 90%, 68%)' }} />
                <span className="text-sm text-foreground/70 font-inter">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-baseline gap-2 border-l-2 pl-4" style={{ borderColor: 'hsl(210, 70%, 50%)' }}>
              <span className="text-foreground/50 text-sm font-inter">Samaksa no</span>
              <span className="text-foreground font-bold text-xl font-playfair tabular-nums">70 EUR/mēn.</span>
            </div>
            <a
              href="#kontakti"
              className="sm:ml-auto inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 transition-opacity hover:opacity-90 font-inter"
              style={{ background: 'hsl(35, 90%, 68%)', color: 'white' }}
            >
              Saņemt individuālo piedāvājumu
            </a>
          </div>
        </motion.div>

        {/* Extras */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-6 font-inter tracking-wide uppercase">Papildpakalpojumi</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {extras.map((e) => (
              <div key={e.label} className="flex items-center justify-between px-5 py-4 border-r border-b border-border">
                <span className="text-sm text-foreground font-inter">{e.label}</span>
                <span className="text-sm font-semibold font-inter tabular-nums" style={{ color: 'hsl(35, 90%, 68%)' }}>{e.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5 font-inter">
            Dokumentu aprite pārsvarā notiek elektroniski.
          </p>
        </div>
      </div>
    </section>
  );
}