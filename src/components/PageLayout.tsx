import { useLanguage } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle: string;
  dark?: boolean;
  badge?: string;
  children?: ReactNode;
}

export const PageHero = ({ label, title, subtitle, dark = true, badge }: PageHeroProps) => (
  <section className={`pt-32 pb-16 lg:pt-40 lg:pb-20 ${dark ? 'bg-accent blueprint-grid' : 'bg-background-secondary'}`}>
    <div className="max-w-site mx-auto px-6">
      {badge && (
        <span className="inline-block font-mono text-xs tracking-wider bg-primary text-primary-foreground px-4 py-1.5 rounded-sm mb-6">
          {badge}
        </span>
      )}
      {label && <p className={`section-label mb-4 ${dark ? '!text-primary-light' : ''}`}>{label}</p>}
      <h1 className={`font-display text-6xl lg:text-8xl leading-none mb-4 ${dark ? 'text-accent-foreground' : 'text-foreground'}`}>
        {title}
      </h1>
      <p className={`font-serif italic text-lg lg:text-xl max-w-2xl ${dark ? 'text-accent-foreground/60' : 'text-muted-foreground'}`}>
        {subtitle}
      </p>
    </div>
  </section>
);

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
