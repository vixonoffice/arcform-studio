import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPortfolioOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled || !isHome
    ? 'bg-card/95 backdrop-blur-md border-b-2 border-primary shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-foreground' : 'text-primary-foreground';
  const mutedColor = scrolled || !isHome ? 'text-muted-foreground' : 'text-primary-foreground/60';

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/servicii', label: t('nav.services') },
    { to: '/echipa', label: t('nav.team') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-site mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className={`font-display text-[32px] leading-none tracking-wide ${textColor}`}>
            ARCFORM
          </span>
          <span className="w-px h-8 bg-primary" />
          <span className={`font-body text-[12px] font-light leading-tight ${mutedColor}`}>
            Construcții<br />& Design
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium tracking-wide hover:text-primary transition-colors ${textColor}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Portfolio dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              className={`font-body text-sm font-medium tracking-wide hover:text-primary transition-colors flex items-center gap-1 ${textColor}`}
            >
              {t('nav.portfolio')}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {portfolioOpen && (
              <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-sm shadow-lg py-2 min-w-[180px]">
                <Link to="/portofoliu" className="block px-4 py-2 text-sm font-body text-foreground hover:bg-background-secondary hover:text-primary transition-colors">
                  {t('portfolio.all')}
                </Link>
                <Link to="/portofoliu?cat=rezidential" className="block px-4 py-2 text-sm font-body text-foreground hover:bg-background-secondary hover:text-primary transition-colors">
                  {t('nav.residential')}
                </Link>
                <Link to="/portofoliu?cat=comercial" className="block px-4 py-2 text-sm font-body text-foreground hover:bg-background-secondary hover:text-primary transition-colors">
                  {t('nav.commercial')}
                </Link>
                <Link to="/portofoliu?cat=interior" className="block px-4 py-2 text-sm font-body text-foreground hover:bg-background-secondary hover:text-primary transition-colors">
                  {t('nav.interior')}
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium tracking-wide hover:text-primary transition-colors ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setLang('ro')}
              className={`px-2 py-1 rounded-sm transition-colors ${lang === 'ro' ? 'bg-primary text-primary-foreground' : `${textColor} hover:text-primary`}`}
            >
              RO
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-sm transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : `${textColor} hover:text-primary`}`}
            >
              EN
            </button>
          </div>

          <a href="tel:+40720000000" className={`font-mono text-xs flex items-center gap-1.5 ${mutedColor}`}>
            <Phone className="w-3.5 h-3.5" />
            +40 720 XXX XXX
          </a>

          <Link
            to="/oferta"
            className="bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-primary-dark transition-colors"
          >
            {t('nav.quote')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block font-body text-base text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/portofoliu" className="block font-body text-base text-foreground hover:text-primary">
              {t('nav.portfolio')}
            </Link>
            <div className="pt-4 border-t border-border flex items-center gap-3">
              <button
                onClick={() => setLang('ro')}
                className={`font-mono text-xs px-3 py-1.5 rounded-sm ${lang === 'ro' ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}
              >
                RO
              </button>
              <button
                onClick={() => setLang('en')}
                className={`font-mono text-xs px-3 py-1.5 rounded-sm ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}
              >
                EN
              </button>
            </div>
            <Link
              to="/oferta"
              className="block text-center bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-3 rounded-sm"
            >
              {t('nav.quote')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
