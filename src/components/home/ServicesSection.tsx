import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const services = [
    { num: '01', title: t('svc.1.title'), desc: t('svc.1.desc'), tags: ['Case', 'Vile', 'Duplex'] },
    { num: '02', title: t('svc.2.title'), desc: t('svc.2.desc'), tags: ['Birouri', 'Retail', 'Showroom'] },
    { num: '03', title: t('svc.3.title'), desc: t('svc.3.desc'), tags: ['Complet', 'Parțial', 'Seismic'] },
    { num: '04', title: t('svc.4.title'), desc: t('svc.4.desc'), tags: ['Design', 'Mobilier', 'Execuție'] },
    { num: '05', title: t('svc.5.title'), desc: t('svc.5.desc'), tags: ['Planuri', 'Autorizații', 'PM'] },
    { num: '06', title: t('svc.6.title'), desc: t('svc.6.desc'), tags: ['Terase', 'Piscine', 'Grădini'] },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-secondary" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <p className="section-label mb-4">{t('services.label')}</p>
        <h2 className="font-display text-6xl lg:text-7xl text-foreground leading-none mb-16">
          {t('services.h2')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="card-architectural p-8 relative overflow-hidden group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              {/* Watermark number */}
              <span className="absolute top-4 right-4 font-mono text-6xl text-primary/10 leading-none select-none">
                {svc.num}
              </span>

              <h3 className="font-display text-2xl text-foreground mb-3 relative z-10">{svc.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-5 relative z-10">
                {svc.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to="/servicii" className="font-body text-sm text-primary font-medium hover:underline relative z-10">
                {t('services.more')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
