import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';
import { useState } from 'react';
import heroHouse from '@/assets/hero-house.jpg';
import villaExterior from '@/assets/villa-exterior.jpg';
import penthouseInterior from '@/assets/penthouse-interior.jpg';
import interiorLiving from '@/assets/interior-living.jpg';
import commercialBuilding from '@/assets/commercial-building.jpg';
import renovationBathroom from '@/assets/renovation-bathroom.jpg';

const allProjects = [
  { id: '1', image: heroHouse, name: 'Casa Modernă Snagov', type: { ro: 'Rezidențial', en: 'Residential' }, location: 'Snagov', year: '2025', category: 'rezidential' },
  { id: '2', image: villaExterior, name: 'Vila Băneasa', type: { ro: 'Rezidențial', en: 'Residential' }, location: 'București', year: '2024', category: 'rezidential' },
  { id: '3', image: penthouseInterior, name: 'Penthouse Floreasca', type: { ro: 'Interior', en: 'Interior' }, location: 'București', year: '2025', category: 'interior' },
  { id: '4', image: interiorLiving, name: 'Apartament Primăverii', type: { ro: 'Interior', en: 'Interior' }, location: 'București', year: '2024', category: 'interior' },
  { id: '5', image: commercialBuilding, name: 'Sediu Luxe Motors', type: { ro: 'Comercial', en: 'Commercial' }, location: 'Pipera', year: '2025', category: 'comercial' },
  { id: '6', image: renovationBathroom, name: 'Renovare Completă Sector 1', type: { ro: 'Renovare', en: 'Renovation' }, location: 'București', year: '2024', category: 'renovare' },
  { id: '7', image: heroHouse, name: 'Vila Corbeanca', type: { ro: 'Rezidențial', en: 'Residential' }, location: 'Corbeanca', year: '2023', category: 'rezidential' },
  { id: '8', image: interiorLiving, name: 'Birou IT Floreasca', type: { ro: 'Comercial', en: 'Commercial' }, location: 'București', year: '2023', category: 'comercial' },
  { id: '9', image: renovationBathroom, name: 'Renovare Penthouse Herăstrău', type: { ro: 'Renovare', en: 'Renovation' }, location: 'București', year: '2025', category: 'renovare' },
];

const Portfolio = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('portfolio.all') },
    { key: 'rezidential', label: t('portfolio.residential') },
    { key: 'comercial', label: t('portfolio.commercial') },
    { key: 'interior', label: t('portfolio.interior') },
    { key: 'renovare', label: t('portfolio.renovation') },
  ];

  const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <PageLayout>
      <PageHero title={t('page.portfolio.h1')} subtitle={t('page.portfolio.sub')} />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-12 sticky top-20 z-30 bg-background py-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`font-mono text-xs tracking-wider px-4 py-2 rounded-sm transition-all ${
                  filter === f.key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group cursor-pointer relative overflow-hidden rounded-sm">
                <div className="aspect-[4/3]">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="font-mono text-xs text-primary tracking-wider">{project.type[lang]}</span>
                    <h3 className="font-display text-2xl text-accent-foreground mt-1">{project.name}</h3>
                    <p className="font-body text-sm text-accent-foreground/60">{project.location} · {project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
