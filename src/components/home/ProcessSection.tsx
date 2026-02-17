import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ProcessSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const steps = [
    { num: '01', title: t('proc.1.title'), desc: t('proc.1.desc') },
    { num: '02', title: t('proc.2.title'), desc: t('proc.2.desc') },
    { num: '03', title: t('proc.3.title'), desc: t('proc.3.desc') },
    { num: '04', title: t('proc.4.title'), desc: t('proc.4.desc') },
    { num: '05', title: t('proc.5.title'), desc: t('proc.5.desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <p className="section-label mb-4">{t('process.label')}</p>
        <h2 className="font-display text-6xl lg:text-7xl text-foreground leading-none mb-16">
          {t('process.h2')}
        </h2>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex items-start justify-between mb-0">
            {/* Line behind */}
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-primary/30" />
            <div
              className="absolute top-6 left-[10%] h-px bg-primary transition-all duration-1000"
              style={{ width: inView ? '80%' : '0%' }}
            />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center w-1/5"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${i * 0.2}s`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-medium relative z-10">
                  {step.num}
                </div>
                <h3 className="font-display text-xl text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex gap-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease-out ${i * 0.15}s`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-xs font-medium shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-primary/30 mt-2" />}
              </div>
              <div className="pb-6">
                <h3 className="font-display text-xl text-foreground mb-1">{step.title}</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
