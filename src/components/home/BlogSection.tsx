import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const blogPosts = [
  {
    title: { ro: 'Casa Pasivă vs Casa Clasică: Costuri și Beneficii în 2026', en: 'Passive House vs Classic House: Costs and Benefits in 2026' },
    category: { ro: 'Construcții', en: 'Construction' },
    readTime: '8 min',
    date: '2026-02-10',
  },
  {
    title: { ro: 'Ghid Complet Renovare Apartament: De Unde Începi?', en: 'Complete Apartment Renovation Guide: Where to Start?' },
    category: { ro: 'Renovare', en: 'Renovation' },
    readTime: '6 min',
    date: '2026-01-28',
  },
  {
    title: { ro: 'Tendințele Amenajărilor Interioare 2026: Ce e la Modă?', en: 'Interior Design Trends 2026: What\'s In Style?' },
    category: { ro: 'Design Interior', en: 'Interior Design' },
    readTime: '5 min',
    date: '2026-01-15',
  },
];

const BlogSection = () => {
  const { lang, t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-24 lg:py-32 bg-background-secondary" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <p className="section-label mb-4">{t('blog.label')}</p>
        <h2 className="font-display text-5xl lg:text-6xl text-foreground leading-none mb-16">
          {t('blog.h2')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              to="/blog"
              key={i}
              className="card-architectural p-0 overflow-hidden group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <div className="h-48 bg-gradient-to-br from-muted to-background-secondary flex items-center justify-center">
                <span className="font-mono text-6xl text-primary/10">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-wider text-primary uppercase">
                    {post.category[lang]}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                  {post.title[lang]}
                </h3>
                <span className="font-body text-sm text-primary font-medium">
                  {t('blog.readmore')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
