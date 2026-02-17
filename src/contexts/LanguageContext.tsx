import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'ro' | 'en';

interface Translations {
  [key: string]: { ro: string; en: string };
}

const translations: Translations = {
  // Navbar
  'nav.home': { ro: 'Acasă', en: 'Home' },
  'nav.services': { ro: 'Servicii', en: 'Services' },
  'nav.portfolio': { ro: 'Portofoliu', en: 'Portfolio' },
  'nav.team': { ro: 'Echipa', en: 'Team' },
  'nav.blog': { ro: 'Blog', en: 'Blog' },
  'nav.contact': { ro: 'Contact', en: 'Contact' },
  'nav.quote': { ro: 'Cerere Ofertă →', en: 'Request Quote →' },
  'nav.residential': { ro: 'Rezidențial', en: 'Residential' },
  'nav.commercial': { ro: 'Comercial', en: 'Commercial' },
  'nav.interior': { ro: 'Interior', en: 'Interior' },

  // Hero
  'hero.label': { ro: '— 01 / INTRO', en: '— 01 / INTRO' },
  'hero.line1': { ro: 'CONSTRUIM', en: 'WE BUILD' },
  'hero.line2': { ro: 'VISURI', en: 'DREAMS' },
  'hero.line3': { ro: 'ARHITECTURALE', en: 'ARCHITECTURAL' },
  'hero.tagline': { ro: 'CONSTRUCȚII · RENOVĂRI · AMENAJĂRI INTERIOARE', en: 'CONSTRUCTION · RENOVATION · INTERIOR DESIGN' },
  'hero.btn1': { ro: 'Vezi Portofoliul', en: 'View Portfolio' },
  'hero.btn2': { ro: 'Cerere de Ofertă', en: 'Request a Quote' },
  'hero.stat1': { ro: '150+ proiecte', en: '150+ projects' },
  'hero.stat2': { ro: '15 ani experiență', en: '15 years experience' },
  'hero.stat3': { ro: '100% clienți mulțumiți', en: '100% satisfied clients' },

  // About
  'about.label': { ro: '— 02 / CINE SUNTEM', en: '— 02 / WHO WE ARE' },
  'about.badge': { ro: 'Fondată în 2009', en: 'Founded in 2009' },
  'about.studio': { ro: 'ARCFORM STUDIO', en: 'ARCFORM STUDIO' },
  'about.h2': { ro: 'EXCELENȚĂ ÎN FIECARE DETALIU', en: 'EXCELLENCE IN EVERY DETAIL' },
  'about.quote': { ro: 'De la fundație la finisaj — construim cu precizie, livrăm cu pasiune.', en: 'From foundation to finish — we build with precision, deliver with passion.' },
  'about.text': { ro: 'ArcForm a fost fondată cu un singur scop: să transforme viziunile arhitecturale în realitate concretă. Echipa noastră de arhitecți, ingineri și designeri de interior lucrează integrat, de la concept la cheie în mână.', en: 'ArcForm was founded with a single purpose: to transform architectural visions into concrete reality. Our team of architects, engineers and interior designers works seamlessly, from concept to turnkey delivery.' },
  'about.stat1.num': { ro: '150+', en: '150+' },
  'about.stat1.label': { ro: 'Proiecte finalizate', en: 'Completed projects' },
  'about.stat2.num': { ro: '15', en: '15' },
  'about.stat2.label': { ro: 'Ani experiență', en: 'Years experience' },
  'about.stat3.num': { ro: '50+', en: '50+' },
  'about.stat3.label': { ro: 'Specialiști în echipă', en: 'Team specialists' },
  'about.btn': { ro: 'Descoperă Povestea Noastră →', en: 'Discover Our Story →' },

  // Services
  'services.label': { ro: '— 03 / SERVICII', en: '— 03 / SERVICES' },
  'services.h2': { ro: 'CE CONSTRUIM', en: 'WHAT WE BUILD' },
  'services.more': { ro: 'Află mai mult →', en: 'Learn more →' },
  'svc.1.title': { ro: 'Construcții Rezidențiale', en: 'Residential Construction' },
  'svc.1.desc': { ro: 'Case individuale, vile, duplex-uri — de la proiect la cheie în mână', en: 'Individual houses, villas, duplexes — from project to turnkey' },
  'svc.2.title': { ro: 'Construcții Comerciale', en: 'Commercial Construction' },
  'svc.2.desc': { ro: 'Sedii de firmă, spații comerciale, showroom-uri, depozite', en: 'Company headquarters, commercial spaces, showrooms, warehouses' },
  'svc.3.title': { ro: 'Renovări & Consolidări', en: 'Renovations & Consolidations' },
  'svc.3.desc': { ro: 'Renovare completă sau parțială, recompartimentare, consolidare', en: 'Complete or partial renovation, repartitioning, consolidation' },
  'svc.4.title': { ro: 'Amenajări Interioare', en: 'Interior Design' },
  'svc.4.desc': { ro: 'Design interior, mobilier custom, supraveghere execuție', en: 'Interior design, custom furniture, execution supervision' },
  'svc.5.title': { ro: 'Arhitectură & Proiectare', en: 'Architecture & Design' },
  'svc.5.desc': { ro: 'Planuri, autorizații, consultanță, project management', en: 'Plans, permits, consulting, project management' },
  'svc.6.title': { ro: 'Amenajări Exterioare', en: 'Exterior Design' },
  'svc.6.desc': { ro: 'Peisagistică, alei, garduri, terase, piscine', en: 'Landscaping, pathways, fences, terraces, pools' },

  // Portfolio
  'portfolio.label': { ro: '— 04 / PORTOFOLIU', en: '— 04 / PORTFOLIO' },
  'portfolio.h2': { ro: 'PROIECTE SELECTATE', en: 'SELECTED PROJECTS' },
  'portfolio.all': { ro: 'Toate', en: 'All' },
  'portfolio.residential': { ro: 'Rezidențial', en: 'Residential' },
  'portfolio.commercial': { ro: 'Comercial', en: 'Commercial' },
  'portfolio.interior': { ro: 'Interior', en: 'Interior' },
  'portfolio.renovation': { ro: 'Renovare', en: 'Renovation' },
  'portfolio.btn': { ro: 'Vezi Toate Proiectele →', en: 'View All Projects →' },

  // Process
  'process.label': { ro: '— 05 / PROCES', en: '— 05 / PROCESS' },
  'process.h2': { ro: 'CUM LUCRĂM', en: 'HOW WE WORK' },
  'proc.1.title': { ro: 'Consultație', en: 'Consultation' },
  'proc.1.desc': { ro: 'Discutăm viziunea, bugetul, timeline-ul. Gratis și fără obligații.', en: 'We discuss vision, budget, timeline. Free and no obligations.' },
  'proc.2.title': { ro: 'Proiectare', en: 'Design' },
  'proc.2.desc': { ro: 'Arhitecții noștri creează planurile complete. 3D rendering inclus.', en: 'Our architects create complete plans. 3D rendering included.' },
  'proc.3.title': { ro: 'Autorizații', en: 'Permits' },
  'proc.3.desc': { ro: 'Gestionăm toată documentația și obținerea autorizațiilor.', en: 'We handle all documentation and permit acquisition.' },
  'proc.4.title': { ro: 'Execuție', en: 'Execution' },
  'proc.4.desc': { ro: 'Construim cu materiale certificate. Șantier organizat, rapoarte săptămânale.', en: 'We build with certified materials. Organized site, weekly reports.' },
  'proc.5.title': { ro: 'Predare', en: 'Delivery' },
  'proc.5.desc': { ro: 'Cheie în mână. Garanție 5 ani. Asistență post-predare inclusă.', en: 'Turnkey. 5-year warranty. Post-delivery support included.' },

  // Stats
  'stats.1.num': { ro: '150+', en: '150+' },
  'stats.1.label': { ro: 'Proiecte finalizate', en: 'Completed projects' },
  'stats.2.num': { ro: '15', en: '15' },
  'stats.2.label': { ro: 'Ani pe piață', en: 'Years in business' },
  'stats.3.num': { ro: '50+', en: '50+' },
  'stats.3.label': { ro: 'Specialiști', en: 'Specialists' },
  'stats.4.num': { ro: '5 ani', en: '5 years' },
  'stats.4.label': { ro: 'Garanție lucrări', en: 'Work warranty' },

  // Testimonials
  'testimonials.label': { ro: '— 07 / TESTIMONIALE', en: '— 07 / TESTIMONIALS' },
  'testimonials.h2': { ro: 'CE SPUN CLIENȚII NOȘTRI', en: 'WHAT OUR CLIENTS SAY' },

  // Blog
  'blog.label': { ro: '— 08 / INSIGHTS', en: '— 08 / INSIGHTS' },
  'blog.h2': { ro: 'DIN LUMEA CONSTRUCȚIILOR', en: 'FROM THE WORLD OF CONSTRUCTION' },
  'blog.readmore': { ro: 'Citește →', en: 'Read →' },

  // CTA
  'cta.h2': { ro: 'GATA SĂ CONSTRUIM ÎMPREUNĂ?', en: 'READY TO BUILD TOGETHER?' },
  'cta.tagline': { ro: 'De la prim contact la cheie în mână — suntem cu tine la fiecare pas.', en: 'From first contact to turnkey — we\'re with you every step.' },
  'cta.btn': { ro: 'Solicită Ofertă Gratuită →', en: 'Request Free Quote →' },
  'cta.sub': { ro: '✦ Consultație gratuită ✦ Ofertă în 48h ✦ Fără obligații', en: '✦ Free consultation ✦ Quote in 48h ✦ No obligations' },

  // Footer
  'footer.tagline': { ro: 'Construim cu Precizie, Livrăm cu Pasiune.', en: 'We Build with Precision, Deliver with Passion.' },
  'footer.services': { ro: 'Servicii', en: 'Services' },
  'footer.portfolio': { ro: 'Portofoliu', en: 'Portfolio' },
  'footer.company': { ro: 'Companie', en: 'Company' },
  'footer.about': { ro: 'Despre Noi', en: 'About Us' },
  'footer.careers': { ro: 'Cariere', en: 'Careers' },
  'footer.terms': { ro: 'Termeni', en: 'Terms' },
  'footer.privacy': { ro: 'GDPR', en: 'GDPR' },

  // Page titles
  'page.portfolio.h1': { ro: 'PORTOFOLIU', en: 'PORTFOLIO' },
  'page.portfolio.sub': { ro: '150+ proiecte finalizate în toată România', en: '150+ completed projects across Romania' },
  'page.services.h1': { ro: 'SERVICII COMPLETE', en: 'COMPLETE SERVICES' },
  'page.services.sub': { ro: 'De la concept architectural la cheie în mână.', en: 'From architectural concept to turnkey.' },
  'page.team.h1': { ro: 'ECHIPA ARCFORM', en: 'ARCFORM TEAM' },
  'page.team.sub': { ro: '50+ arhitecți, ingineri, designeri și meșteri specializați.', en: '50+ architects, engineers, designers and specialized craftsmen.' },
  'page.blog.h1': { ro: 'ARCFORM INSIGHTS', en: 'ARCFORM INSIGHTS' },
  'page.blog.sub': { ro: 'Ghiduri practice, tendințe în construcții și design, sfaturi de la specialiști.', en: 'Practical guides, construction and design trends, expert advice.' },
  'page.contact.h1': { ro: 'CONTACT', en: 'CONTACT' },
  'page.contact.sub': { ro: 'Vino să discutăm proiectul tău.', en: "Let's discuss your project." },
  'page.quote.h1': { ro: 'SOLICITĂ OFERTĂ', en: 'REQUEST A QUOTE' },
  'page.quote.sub': { ro: 'Completează formularul — echipa noastră te contactează în maxim 48 ore cu o ofertă personalizată.', en: 'Fill out the form — our team will contact you within 48 hours with a personalized quote.' },
  'page.quote.badge': { ro: 'Ofertă Gratuită în 48h', en: 'Free Quote in 48h' },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('ro');

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
