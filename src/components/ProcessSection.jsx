import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Saziņa un vajadzību izrunāšana', description: 'Sazināmies un kopā apspriežam Jūsu uzņēmuma grāmatvedības vajadzības.' },
  { num: '02', title: 'Esošās situācijas izvērtēšana', description: 'Izvērtējam pašreizējo grāmatvedības stāvokli un identificējam uzlabojumus.' },
  { num: '03', title: 'Piemērotākā risinājuma piedāvājums', description: 'Sagatavojam individuālu pakalpojumu piedāvājumu atbilstoši Jūsu vajadzībām.' },
  { num: '04', title: 'Ikdienas grāmatvedības kārtošana', description: 'Uzsākam regulāru grāmatvedības pakalpojumu sniegšanu.' },
  { num: '05', title: 'Regulāra saziņa un atbalsts', description: 'Nodrošinām pastāvīgu atbalstu un regulāru komunikāciju.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(180deg, hsl(210,55%,97%) 0%, hsl(213,60%,95%) 100%)' }}>
      {/* Background image right side */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none"
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69c15ca6660c21644116e864/77c59ecd7_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-16 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(35,90%,68%) 0%, hsl(210,70%,62%) 100%)' }} />
            <span className="text-primary text-xs font-medium tracking-widest uppercase">Sadarbība</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair" style={{ color: 'hsl(210, 65%, 52%)' }}>
            Kā notiek sadarbība
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-border max-w-3xl">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-6 py-6 border-l-2 pl-6"
              style={{ borderColor: idx % 2 === 0 ? 'hsl(210, 70%, 62%)' : 'hsl(35, 90%, 68%)' }}
            >
              <span className="text-2xl font-bold font-playfair w-10 shrink-0" style={{ color: idx % 2 === 0 ? 'hsl(210, 65%, 52%)' : 'hsl(35, 90%, 68%)' }}>{step.num}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}