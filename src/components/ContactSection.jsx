import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: 'gramatvediba111@inbox.lv',
        subject: `Jauns pieprasījums no ${form.name}`,
        body: `Vārds: ${form.name}\nE-pasts: ${form.email}\nTālrunis: ${form.phone}\n\nZiņa:\n${form.message}`,
      });
      toast.success('Ziņa nosūtīta! Mēs ar Jums sazināsimies.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Kļūda! Lūdzu mēģiniet vēlreiz.');
    }
    setSending(false);
  };

  return (
    <section id="kontakti" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, hsl(210,55%,96%) 100%)' }}>
      {/* Logo top right */}
      <div className="absolute top-16 right-16 z-10 pointer-events-none hidden md:block">
        <img
          src="https://media.base44.com/images/public/69c15ca6660c21644116e864/7dacf8131_image.png"
          alt="SIA 111 logo"
          className="w-64 h-64 object-contain opacity-80"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-medium tracking-widest uppercase">Kontakti</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-playfair">
            Sazinieties ar mums
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-sm leading-relaxed">
            Sazinieties ar mums un vienosimies par piemērotāko risinājumu Jūsu uzņēmumam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'hsl(210, 60%, 93%)' }}>
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tālrunis</p>
                  <a href="tel:29320175" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    29320175
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'hsl(210, 60%, 93%)' }}>
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">E-pasts</p>
                  <a href="mailto:gramatvediba111@inbox.lv" className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-all">
                    gramatvediba111@inbox.lv
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'hsl(210, 60%, 93%)' }}>
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Adrese</p>
                  <p className="text-sm font-semibold text-foreground">
                    Katoļu iela 29,<br />Rīga, LV-1005
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Licences Nr.</p>
              <p className="text-base font-bold text-foreground">AGL0003424</p>
              <p className="text-xs text-muted-foreground mt-1 font-inter">SIA 111 · Reģ. Nr. 40103664433</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Vārds *</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jūsu vārds" required className="rounded-none" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">E-pasts *</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jusu@epasts.lv" required className="rounded-none" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Tālrunis</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+371 XXXXXXXX" className="rounded-none" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Ziņa *</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Aprakstiet savas vajadzības..." rows={4} required className="rounded-none" />
            </div>
            <Button type="submit" className="w-full rounded-none hover:opacity-90" disabled={sending} style={{ background: 'hsl(35, 90%, 68%)', color: 'white', border: 'none' }}>
              {sending ? 'Nosūta...' : 'Saņemt piedāvājumu'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}