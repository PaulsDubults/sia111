import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const guarantees = [
  'Atbildību',
  'Precizitāti',
  'Profesionālismu',
  'Konfidencialitāti',
  'Spēju rast labākos risinājumus problēmsituācijās',
  'Cilvēcisku attieksmi',
];

export default function AboutSection() {
  return (
    <section id="par-mums" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pb-6"
          >
            <div className="overflow-hidden" style={{ border: '1px solid hsl(var(--border))' }}>
              <img
                src="https://media.base44.com/images/public/69c15ca6660c21644116e864/eb78f9040_Foto3reklama.jpg"
                alt="Sanita Rancāne"
                className="w-full object-cover object-center aspect-[3/4]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-5 py-3 shadow-lg">
              <p className="text-[9px] font-medium opacity-60 uppercase tracking-[0.18em] font-inter">Licence</p>
              <p className="text-sm font-bold font-inter tabular-nums">AGL0003424</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase font-inter">Par mums</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight font-playfair">
              Sanita Rancāne
            </h2>
            <p className="text-primary font-semibold mt-1.5 mb-6 text-sm tracking-wide font-inter">Bilancspējīga grāmatvede</p>
            <p className="text-muted-foreground leading-relaxed text-sm font-inter font-light">
              Bilancspējīga un profesionāla grāmatvede ar ilggadēju pieredzi darbā ar maziem un vidējiem uzņēmumiem dažādās sfērās.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs font-semibold text-foreground mb-5 uppercase tracking-[0.15em] font-inter">No savas puses garantēju:</p>
              <ul className="space-y-3">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-inter">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}