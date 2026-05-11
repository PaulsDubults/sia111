export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      style={{ background: 'linear-gradient(120deg, hsl(215,70%,22%) 0%, hsl(213,65%,35%) 55%, hsl(210,55%,50%) 100%)' }}
    >
      {/* Subtle radial depth on left */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 10% 50%, hsl(215,80%,18%) 0%, transparent 60%)' }} />

      {/* Logo top-right */}
      <div className="absolute top-28 right-16 z-10 pointer-events-none hidden md:block">
        <img
          src="https://media.base44.com/images/public/69c15ca6660c21644116e864/d72f8bf97_logo.jpg"
          alt="SIA 111 logo"
          className="w-44 h-44 object-contain rounded-full"
        />
      </div>

      {/* Image right half */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[55%]"
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69c15ca6660c21644116e864/351a57192_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-3xl">

        {/* LEFT: Text */}
        <div>
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 mb-8 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(35,90%,68%)' }} />
            <span className="text-white/80 text-xs tracking-widest uppercase font-inter font-medium">AGL0003424 · Licencēts uzņēmums</span>
          </div>

          <h1 className="font-playfair font-bold leading-[1.1] text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
            Profesionāli ārpakalpojumu<br />
            <span style={{ color: 'hsl(35, 90%, 68%)' }}>grāmatvedības</span> pakalpojumi
          </h1>

          <div className="mt-5 w-14 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(35,90%,68%) 0%, hsl(210,70%,70%) 100%)' }} />

          <p className="mt-6 text-white/70 leading-relaxed max-w-md font-inter" style={{ fontSize: '1rem' }}>
            Pilna cikla grāmatvedības pakalpojumi. Individuāla pieeja katram klientam.
            Uzticamība, precizitāte un konfidencialitāte.
          </p>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {['Licencēts grāmatvedis', 'Ilggadēja pieredze', 'Individuāla pieeja'].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(35,90%,68%)' }} />
                <span className="text-sm text-white/65 font-inter">{point}</span>
              </div>
            ))}
          </div>

          {/* Pricing hint */}
          <div className="mt-7 inline-flex items-baseline gap-2 border-l-2 pl-4" style={{ borderColor: 'hsl(35,90%,68%)' }}>
            <span className="text-white/50 text-sm font-inter">Samaksa no</span>
            <span className="text-white font-bold text-xl font-playfair">70 EUR/mēn.</span>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center font-semibold px-8 py-3.5 text-sm transition-all hover:brightness-110 font-inter tracking-wide rounded-sm"
              style={{ background: 'hsl(35, 90%, 68%)', color: 'white', boxShadow: '0 4px 20px hsla(35,90%,68%,0.35)' }}
            >
              Saņemt piedāvājumu
            </a>
            <a
              href="#pakalpojumi"
              className="inline-flex items-center justify-center border border-white/25 text-white/70 font-medium px-8 py-3.5 hover:bg-white/10 hover:text-white transition-all text-sm font-inter rounded-sm"
            >
              Pakalpojumi
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Wave bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ display: 'block', height: '70px' }}>
          <path d="M0,40 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="hsl(210,55%,97%)" />
        </svg>
      </div>
    </section>
  );
}