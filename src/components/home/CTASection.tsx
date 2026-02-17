import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-accent blueprint-grid">
      <div className="max-w-site mx-auto px-6 text-center">
        <h2 className="font-display text-5xl lg:text-7xl text-accent-foreground leading-none mb-6">
          {t('cta.h2')}
        </h2>
        <p className="font-serif italic text-lg lg:text-xl text-accent-foreground/60 mb-10 max-w-2xl mx-auto">
          {t('cta.tagline')}
        </p>
        <Link
          to="/oferta"
          className="inline-block bg-primary text-primary-foreground font-body text-base font-medium px-10 py-4 rounded-sm hover:bg-primary-dark transition-colors"
        >
          {t('cta.btn')}
        </Link>
        <p className="font-body text-sm text-accent-foreground/40 mt-6">
          {t('cta.sub')}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
