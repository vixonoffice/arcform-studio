import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-accent text-accent-foreground border-t-[3px] border-primary">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <span className="font-display text-3xl text-primary-foreground">ARCFORM</span>
            <p className="mt-3 font-serif italic text-sm text-accent-foreground/60 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-accent-foreground/40 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-accent-foreground/40 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-accent-foreground/40 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Col 2 — Servicii */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 font-body text-sm text-accent-foreground/50">
              <li><Link to="/servicii" className="hover:text-primary transition-colors">{t('svc.1.title')}</Link></li>
              <li><Link to="/servicii" className="hover:text-primary transition-colors">{t('svc.2.title')}</Link></li>
              <li><Link to="/servicii" className="hover:text-primary transition-colors">{t('svc.3.title')}</Link></li>
              <li><Link to="/servicii" className="hover:text-primary transition-colors">{t('svc.4.title')}</Link></li>
            </ul>
          </div>

          {/* Col 3 — Portofoliu */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">{t('footer.portfolio')}</h4>
            <ul className="space-y-2 font-body text-sm text-accent-foreground/50">
              <li><Link to="/portofoliu" className="hover:text-primary transition-colors">{t('portfolio.residential')}</Link></li>
              <li><Link to="/portofoliu" className="hover:text-primary transition-colors">{t('portfolio.commercial')}</Link></li>
              <li><Link to="/portofoliu" className="hover:text-primary transition-colors">{t('portfolio.interior')}</Link></li>
              <li><Link to="/portofoliu" className="hover:text-primary transition-colors">{t('portfolio.renovation')}</Link></li>
            </ul>
          </div>

          {/* Col 4 — Companie */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 font-body text-sm text-accent-foreground/50">
              <li><Link to="/echipa" className="hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/echipa" className="hover:text-primary transition-colors">{t('nav.team')}</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/echipa" className="hover:text-primary transition-colors">{t('footer.careers')}</Link></li>
            </ul>
          </div>

          {/* Col 5 — Contact */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">{t('nav.contact')}</h4>
            <div className="space-y-2 font-body text-sm text-accent-foreground/50">
              <p>Str. Arhitecților 5, Sector 1</p>
              <p>București, România</p>
              <p className="font-mono text-xs mt-2">+40 720 XXX XXX</p>
              <p className="font-mono text-xs">office@arcform.ro</p>
            </div>
            <Link
              to="/oferta"
              className="inline-block mt-5 bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-primary-dark transition-colors"
            >
              {t('nav.quote')}
            </Link>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-6 border-t border-accent-foreground/10 flex flex-wrap gap-6 items-center justify-center">
          {['ISO 9001', 'ISO 14001', 'ONRC', 'Urbanism'].map((cert) => (
            <span key={cert} className="font-mono text-[10px] tracking-wider text-accent-foreground/30 uppercase">
              {cert}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-accent-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-accent-foreground/30 font-body">
          <p>© 2026 ArcForm SRL | CUI: RO12345678</p>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            <span className="opacity-40">·</span>
            <a href="https://vixonlab.ro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Site realizat de Vixon Lab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
