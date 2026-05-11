import { motion } from 'framer-motion';
import { BadgeCheck, MapPin, Hash, Calendar } from 'lucide-react';

export default function LicenseSection() {
  return (
    <section id="licence" className="py-14 md:py-20" style={{ background: 'linear-gradient(135deg, hsl(215,60%,95%) 0%, hsl(210,65%,92%) 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-medium tracking-widest uppercase">Reģistrācija</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'hsl(215, 40%, 82%)' }}>
            <div className="p-6 bg-background">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Uzņēmums</p>
              <p className="text-foreground font-semibold font-inter">SIA 111</p>
            </div>
            <div className="p-6 bg-background">
              <div className="flex items-center gap-1.5 mb-2">
                <Hash className="h-3 w-3 text-muted-foreground/50" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Reģ. Nr.</p>
              </div>
              <p className="text-foreground font-semibold">40103664433</p>
            </div>
            <div className="p-6 bg-background">
              <div className="flex items-center gap-1.5 mb-2">
                <BadgeCheck className="h-3 w-3 text-muted-foreground/50" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Licences Nr.</p>
              </div>
              <p className="text-foreground font-semibold">AGL0003424</p>
            </div>
            <div className="p-6 bg-background">
              <div className="flex items-center gap-1.5 mb-2">
                <Calendar className="h-3 w-3 text-muted-foreground/50" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Izsniegta</p>
              </div>
              <p className="text-foreground font-semibold">25.07.2024</p>
            </div>
          </div>

          <div className="mt-px flex items-start gap-3 p-6" style={{ background: 'hsl(0, 0%, 100%)' }}>
            <MapPin className="h-4 w-4 text-muted-foreground/50 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Juridiskā adrese</p>
              <p className="text-foreground font-semibold text-sm">Katoļu iela 29, Rīga, LV-1005</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}