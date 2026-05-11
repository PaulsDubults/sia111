import { motion } from 'framer-motion';
import { Target, Handshake, MessageSquare, UserCheck, ClipboardList } from 'lucide-react';

const reasons = [
  { icon: Target, title: 'Precizitāte un atbildība', description: 'Katrs dokuments un aprēķins tiek veikts ar augstāko precizitāti.' },
  { icon: Handshake, title: 'Uzticama sadarbība', description: 'Veidojam ilgtermiņa partnerattiecības, kas balstītas uz uzticēšanos.' },
  { icon: MessageSquare, title: 'Skaidra komunikācija', description: 'Vienmēr esam sasniedzami un sniedzam saprotamas atbildes.' },
  { icon: UserCheck, title: 'Individuāla pieeja klientam', description: 'Pielāgojam savus pakalpojumus katra klienta specifiskajām vajadzībām.' },
  { icon: ClipboardList, title: 'Sakārtoti procesi', description: 'Nodrošinām caurspīdīgus un strukturētus darba procesus.' },
];

export default function WhyUsSection() {
  return (
    <section id="kapec-mes" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, hsl(210,55%,97%) 100%)' }}>
      {/* Background image left side */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[50%] pointer-events-none"
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69c15ca6660c21644116e864/8211675d7_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          maskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-16 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(35,90%,68%) 0%, hsl(210,70%,62%) 100%)' }} />
              <span className="text-primary text-xs font-medium tracking-widest uppercase">Priekšrocības</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight font-playfair relative z-10" style={{ color: 'hsl(35, 90%, 68%)' }}>
              Kāpēc izvēlēties<br />mūs
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              Mēs neesam tikai grāmatvedības birojs — mēs esam Jūsu uzticamais finanšu partneris.
            </p>
          </motion.div>

          <div className="space-y-0 divide-y divide-border">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 py-5 hover:bg-accent/20 px-3 -mx-3 rounded-lg transition-colors duration-200 border-l-2"
                style={{ borderColor: idx % 2 === 0 ? 'hsl(210, 70%, 62%)' : 'hsl(35, 90%, 68%)' }}
                >
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}