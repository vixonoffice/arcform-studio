import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';
import { useState } from 'react';
import { Clock } from 'lucide-react';

const blogPosts = [
  { title: { ro: 'Ghid Complet: Pași pentru Autorizarea unei Case Noi în 2026', en: 'Complete Guide: Steps to Authorize a New House in 2026' }, category: 'constructii', catLabel: { ro: 'Construcții', en: 'Construction' }, readTime: '8 min', date: '2026-02-10', featured: true },
  { title: { ro: 'Cele Mai Comune Greșeli la Renovare și Cum le Eviți', en: 'Most Common Renovation Mistakes and How to Avoid Them' }, category: 'renovare', catLabel: { ro: 'Renovare', en: 'Renovation' }, readTime: '6 min', date: '2026-01-28' },
  { title: { ro: 'Case Prefabricate vs Construcție Tradițională: Analiză Completă', en: 'Prefab Houses vs Traditional Construction: Complete Analysis' }, category: 'constructii', catLabel: { ro: 'Construcții', en: 'Construction' }, readTime: '10 min', date: '2026-01-15' },
  { title: { ro: 'Amenajarea Dormitorului: 10 Reguli de Design de la Experți', en: 'Bedroom Design: 10 Expert Rules' }, category: 'design', catLabel: { ro: 'Design Interior', en: 'Interior Design' }, readTime: '5 min', date: '2026-01-05' },
  { title: { ro: 'Cât Costă Renovarea unui Apartament în 2026?', en: 'How Much Does an Apartment Renovation Cost in 2026?' }, category: 'renovare', catLabel: { ro: 'Renovare', en: 'Renovation' }, readTime: '7 min', date: '2025-12-20' },
  { title: { ro: 'Materialele Anului 2026 în Construcții', en: 'Construction Materials of 2026' }, category: 'tendinte', catLabel: { ro: 'Tendințe', en: 'Trends' }, readTime: '4 min', date: '2025-12-10' },
];

const Blog = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: { ro: 'Toate', en: 'All' } },
    { key: 'constructii', label: { ro: 'Construcții', en: 'Construction' } },
    { key: 'renovare', label: { ro: 'Renovare', en: 'Renovation' } },
    { key: 'design', label: { ro: 'Design Interior', en: 'Interior Design' } },
    { key: 'tendinte', label: { ro: 'Tendințe', en: 'Trends' } },
  ];

  const filtered = filter === 'all' ? blogPosts : blogPosts.filter(p => p.category === filter);

  return (
    <PageLayout>
      <PageHero title={t('page.blog.h1')} subtitle={t('page.blog.sub')} />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`font-mono text-xs tracking-wider px-4 py-2 rounded-sm transition-all ${
                  filter === cat.key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <div
                key={i}
                className={`card-architectural p-0 overflow-hidden cursor-pointer group ${
                  i === 0 && filter === 'all' ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`${i === 0 && filter === 'all' ? 'h-64' : 'h-48'} bg-gradient-to-br from-muted to-background-secondary flex items-center justify-center`}>
                  <span className="font-mono text-6xl text-primary/10">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] tracking-wider text-primary uppercase">{post.catLabel[lang]}</span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title[lang]}
                  </h3>
                  <p className="font-mono text-[10px] text-muted-foreground mt-3">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
