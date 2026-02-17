import { useLanguage } from '@/contexts/LanguageContext';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: {
      ro: 'ArcForm a construit casa visului nostru în exact 14 luni. Comunicare perfectă, calitate excepțională, zero surprize neplăcute.',
      en: 'ArcForm built our dream home in exactly 14 months. Perfect communication, exceptional quality, zero unpleasant surprises.',
    },
    author: 'Familia Ionescu',
    project: { ro: 'Casă individuală, Snagov', en: 'Individual house, Snagov' },
    value: '850.000 RON',
  },
  {
    text: {
      ro: 'Am renovat integral un apartament de 5 camere. Echipa a fost profesionistă, curată, respectuoasă. Am stat în vacanță și am găsit apartamentul gata.',
      en: 'We fully renovated a 5-room apartment. The team was professional, clean, respectful. We went on vacation and found the apartment ready.',
    },
    author: 'Dan Georgescu',
    project: { ro: 'Renovare completă, Sector 1', en: 'Complete renovation, Sector 1' },
    value: '',
  },
  {
    text: {
      ro: 'Showroom-ul nostru a fost proiectat și construit de ArcForm. Exact cum ne-am imaginat, livrat cu 3 zile înainte de termen.',
      en: 'Our showroom was designed and built by ArcForm. Exactly as we imagined, delivered 3 days ahead of schedule.',
    },
    author: 'Luxe Motors SRL',
    project: { ro: 'Spațiu comercial, Pipera', en: 'Commercial space, Pipera' },
    value: '1.2M RON',
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <p className="section-label mb-4">{t('testimonials.label')}</p>
        <h2 className="font-display text-5xl lg:text-6xl text-foreground leading-none mb-16">
          {t('testimonials.h2')}
        </h2>

        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
          }}
        >
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />

          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
                style={{
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? 'translateY(0)' : 'translateY(10px)',
                  pointerEvents: current === i ? 'auto' : 'none',
                }}
              >
                <p className="font-serif italic text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8">
                  "{item.text[lang]}"
                </p>
                <p className="font-body text-sm font-medium text-foreground">— {item.author}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  {item.project[lang]} {item.value && `| ${item.value}`}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${current === i ? 'bg-primary' : 'bg-border'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
