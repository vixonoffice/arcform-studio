import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroHouse from '@/assets/hero-house.jpg';
import villaExterior from '@/assets/villa-exterior.jpg';
import penthouseInterior from '@/assets/penthouse-interior.jpg';
import interiorLiving from '@/assets/interior-living.jpg';
import commercialBuilding from '@/assets/commercial-building.jpg';
import renovationBathroom from '@/assets/renovation-bathroom.jpg';

interface Project {
  id: string;
  image: string;
  type: string;
  typeKey: string;
  name: string;
  location: string;
  year: string;
  category: string;
  large?: boolean;
}

const projects: Project[] = [
  { id: '1', image: heroHouse, type: 'Rezidențial', typeKey: 'residential', name: 'Casa Modernă Snagov', location: 'Snagov, Ilfov', year: '2025', category: 'rezidential', large: true },
  { id: '2', image: villaExterior, type: 'Rezidențial', typeKey: 'residential', name: 'Vila Băneasa', location: 'București', year: '2024', category: 'rezidential' },
  { id: '3', image: penthouseInterior, type: 'Interior', typeKey: 'interior', name: 'Penthouse Floreasca', location: 'București', year: '2025', category: 'interior' },
  { id: '4', image: interiorLiving, type: 'Interior', typeKey: 'interior', name: 'Apartament Primăverii', location: 'București', year: '2024', category: 'interior' },
  { id: '5', image: commercialBuilding, type: 'Comercial', typeKey: 'commercial', name: 'Sediu Luxe Motors', location: 'Pipera', year: '2025', category: 'comercial' },
  { id: '6', image: renovationBathroom, type: 'Renovare', typeKey: 'renovation', name: 'Renovare Completă Sector 1', location: 'București', year: '2024', category: 'renovare' },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const filters = [
    { key: 'all', label: t('portfolio.all') },
    { key: 'rezidential', label: t('portfolio.residential') },
    { key: 'comercial', label: t('portfolio.commercial') },
    { key: 'interior', label: t('portfolio.interior') },
    { key: 'renovare', label: t('portfolio.renovation') },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 lg:py-32 bg-accent" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <p className="section-label !text-primary-light mb-4">{t('portfolio.label')}</p>
        <h2 className="font-display text-6xl lg:text-7xl text-accent-foreground leading-none mb-12">
          {t('portfolio.h2')}
        </h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-sm transition-all duration-300 ${
                filter === f.key
                  ? 'bg-primary text-primary-foreground'
                  : 'text-accent-foreground/50 border border-accent-foreground/20 hover:border-primary hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                project.large ? 'md:col-span-8' : 'md:col-span-4'
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div className={`relative ${project.large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-mono text-xs text-primary tracking-wider">{project.type}</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-accent-foreground mt-1">{project.name}</h3>
                  <p className="font-body text-sm text-accent-foreground/60">{project.location} · {project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portofoliu"
            className="border border-accent-foreground/30 text-accent-foreground font-body text-sm font-medium px-8 py-3.5 rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            {t('portfolio.btn')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
