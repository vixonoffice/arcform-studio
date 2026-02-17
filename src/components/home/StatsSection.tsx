import { useLanguage } from '@/contexts/LanguageContext';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ target, suffix = '', inView }: { target: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { target: 150, suffix: '+', label: t('stats.1.label') },
    { target: 15, suffix: '', label: t('stats.2.label') },
    { target: 50, suffix: '+', label: t('stats.3.label') },
    { target: 5, suffix: '', label: t('stats.4.label'), extra: t('stats.4.num').includes('ani') ? ' ani' : ' years' },
  ];

  return (
    <section className="py-20 lg:py-24 copper-gradient" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <span className="font-display text-5xl lg:text-6xl text-primary-foreground">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={inView} />
                {stat.extra || ''}
              </span>
              <p className="font-body text-sm text-primary-foreground/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
