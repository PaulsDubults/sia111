import { motion } from 'framer-motion';
import { BookOpen, BarChart2, FileText, Building2, Calculator, Users, PieChart, TrendingUp, Briefcase, Search, ClipboardList, Scale } from 'lucide-react';

// Alternating accent colors: blue, orange, gold
const BLUE = 'hsl(210, 65%, 52%)';
const GOLD = 'hsl(35, 90%, 68%)';
const BLUE_BG = 'hsl(210, 65%, 94%)';
const GOLD_BG = 'hsl(35, 90%, 94%)';

const accentColors = [BLUE, GOLD, BLUE, GOLD, BLUE, GOLD, BLUE, GOLD, BLUE, GOLD, BLUE, GOLD];
const accentBg = [BLUE_BG, GOLD_BG, BLUE_BG, GOLD_BG, BLUE_BG, GOLD_BG, BLUE_BG, GOLD_BG, BLUE_BG, GOLD_BG, BLUE_BG, GOLD_BG];

const services = [
  { icon: BookOpen, title: 'Grāmatvedības uzskaite un atjaunošana', desc: 'Pilna apjoma grāmatvedības uzskaite, kā arī iepriekšējo periodu atjaunošana un sakārtošana.' },
  { icon: BarChart2, title: 'Operatīvā bilance', desc: 'Regulāra operatīvās bilances sagatavošana pārskatāmai un aktuālai finanšu situācijai.' },
  { icon: FileText, title: 'Gada pārskatu sagatavošana', desc: 'Operatīva un kvalitatīva gada pārskata sagatavošana un iesniegšana noteiktajos termiņos.' },
  { icon: Building2, title: 'VID atskaites un iesniegšana', desc: 'Visu nepieciešamo VID atskaišu sagatavošana un iesniegšana EDS atbilstoši normatīvajiem aktiem.' },
  { icon: Calculator, title: 'IIN deklarācijas', desc: 'Iedzīvotāju ienākuma nodokļa deklarāciju sagatavošana un savlaicīga iesniegšana.' },
  { icon: PieChart, title: 'Nodokļu aprēķins un optimizācija', desc: 'Profesionāls nodokļu aprēķins un likumīgas optimizācijas iespējas Jūsu uzņēmumam.' },
  { icon: Users, title: 'Darba algu aprēķins', desc: 'Precīzs algu, sociālo iemaksu un citu nodokļu aprēķins un noformēšana.' },
  { icon: ClipboardList, title: 'Dažādu atskaišu sagatavošana', desc: 'Statistikas, banku, projektu un citu nepieciešamo atskaišu sagatavošana un iesniegšana.' },
  { icon: TrendingUp, title: 'Budžeta sagatavošana', desc: 'Uzņēmuma budžeta plānošana un sagatavošana vadības lēmumu atbalstam.' },
  { icon: Search, title: 'Finanšu analīze', desc: 'Padziļināta finanšu analīze ar ieteikumiem uzņēmuma darbības uzlabošanai.' },
  { icon: Briefcase, title: 'Vadības grāmatvedība', desc: 'Strukturētas finanšu informācijas sagatavošana vadības lēmumu pieņemšanai.' },
  { icon: Scale, title: 'Problēmsituāciju risināšana', desc: 'Palīdzība sarežģītu situāciju risināšanā ar VID saimnieciskās darbības un finanšu jautājumos.' },
];

export default function ServicesSection() {
  return (
    <section id="pakalpojumi" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(180deg, hsl(210,55%,97%) 0%, #ffffff 100%)' }}>
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
            <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase font-inter">Ko mēs piedāvājam</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair" style={{ color: 'hsl(210, 65%, 52%)' }}>
            Ko mēs piedāvājam
          </h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-xl font-inter leading-relaxed">
            Pārstāvam klientu intereses VID un citās iestādēs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-7 border-r border-b border-border bg-white hover:bg-accent/30 transition-colors duration-200 hover:shadow-sm group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 flex items-center justify-center rounded-md" style={{ background: accentBg[idx] }}>
                  <s.icon className="h-4 w-4" style={{ color: accentColors[idx] }} />
                </div>
                <span className="text-[10px] font-mono tabular-nums font-semibold" style={{ color: accentColors[idx], opacity: 0.6 }}>{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-bold text-[0.85rem] mb-2 leading-snug font-inter" style={{ color: accentColors[idx] }}>{s.title}</h3>
              <p className="text-[0.82rem] text-muted-foreground leading-relaxed font-inter">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}