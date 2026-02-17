import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';

const BlueprintSVG = () => (
  <svg
    viewBox="0 0 400 300"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] opacity-[0.08] pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    {/* Simple house outline */}
    <path d="M 100 200 L 100 120 L 200 60 L 300 120 L 300 200 Z" className="line-draw text-primary-foreground" />
    <path d="M 170 200 L 170 150 L 230 150 L 230 200" className="line-draw text-primary-foreground" style={{ animationDelay: '0.5s' }} />
    <path d="M 120 160 L 160 160 L 160 130 L 120 130 Z" className="line-draw text-primary-foreground" style={{ animationDelay: '0.8s' }} />
    <path d="M 240 160 L 280 160 L 280 130 L 240 130 Z" className="line-draw text-primary-foreground" style={{ animationDelay: '1s' }} />
  </svg>
);

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <BlueprintSVG />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-site mx-auto px-6">
        <div className="mt-20">
          <p className="section-label !text-primary-light mb-6 animate-fade-in-up">
            {t('hero.label')}
          </p>

          <h1 className="animate-fade-in-up-delay-1">
            <span className="font-display text-7xl sm:text-8xl lg:text-[120px] leading-[0.9] text-primary-foreground block">
              {t('hero.line1')}
            </span>
            <span className="font-display text-7xl sm:text-8xl lg:text-[120px] leading-[0.9] text-primary-foreground text-stroke block">
              {t('hero.line2')}
            </span>
            <span className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-primary-foreground/70 block mt-2">
              {t('hero.line3')}
            </span>
          </h1>

          <p className="font-body font-light text-sm tracking-[2px] text-primary-foreground/60 mt-6 animate-fade-in-up-delay-2">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up-delay-3">
            <Link
              to="/portofoliu"
              className="border-2 border-primary-foreground text-primary-foreground font-body text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              {t('hero.btn1')}
            </Link>
            <Link
              to="/oferta"
              className="bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-primary-dark transition-colors"
            >
              {t('hero.btn2')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom glass bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="glass-bar max-w-site mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-5 gap-4">
            <div className="flex items-center gap-8 sm:gap-12">
              {[t('hero.stat1'), t('hero.stat2'), t('hero.stat3')].map((stat, i) => (
                <span key={i} className="font-mono text-xs sm:text-sm text-primary-foreground/80 tracking-wide">
                  {stat}
                </span>
              ))}
            </div>
            <ArrowDown className="w-5 h-5 text-primary-foreground/50 animate-bounce-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
