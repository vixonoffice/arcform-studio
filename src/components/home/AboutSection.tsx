import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import architectImage from '@/assets/architect-office.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { num: t('about.stat1.num'), label: t('about.stat1.label') },
    { num: t('about.stat2.num'), label: t('about.stat2.label') },
    { num: t('about.stat3.num'), label: t('about.stat3.label') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          {/* Left — Image */}
          <div className="lg:col-span-5 relative">
            <img
              src={architectImage}
              alt="Architect working on plans"
              className="w-full aspect-[3/4] object-cover rounded-sm"
            />
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground font-mono text-xs px-4 py-2 rounded-sm">
              {t('about.badge')}
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-muted-foreground tracking-[3px] mb-2">{t('about.studio')}</p>
            <p className="section-label mb-4">{t('about.label')}</p>
            <h2 className="font-display text-5xl lg:text-6xl text-foreground leading-none mb-6">
              {t('about.h2')}
            </h2>
            <p className="font-serif italic text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
              "{t('about.quote')}"
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-10">
              {t('about.text')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="font-mono text-3xl lg:text-4xl text-primary font-medium">{s.num}</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <a href="/echipa" className="inline-flex items-center font-body text-sm text-primary font-medium hover:underline">
              {t('about.btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
