import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';

const teamLeaders = [
  {
    name: 'Arh. Mihai Arcescu',
    role: { ro: 'CEO & Arhitect Șef', en: 'CEO & Chief Architect' },
    exp: { ro: '20 ani experiență', en: '20 years experience' },
    quote: { ro: 'Am construit ArcForm pe un singur principiu: calitate fără compromisuri.', en: 'I built ArcForm on one principle: quality without compromise.' },
  },
  {
    name: 'Ing. Cristian Popa',
    role: { ro: 'Director Tehnic', en: 'Technical Director' },
    exp: { ro: '18 ani experiență', en: '18 years experience' },
    quote: { ro: 'Fiecare structură pe care o proiectăm este gândită să dureze generații.', en: 'Every structure we design is built to last generations.' },
  },
  {
    name: 'Des. Ana Florescu',
    role: { ro: 'Director Design Interior', en: 'Interior Design Director' },
    exp: { ro: '12 ani experiență', en: '12 years experience' },
    quote: { ro: 'Designul bun transformă un spațiu într-o experiență.', en: 'Good design transforms a space into an experience.' },
  },
];

const departments = [
  { name: { ro: 'Arhitectură', en: 'Architecture' }, count: 4 },
  { name: { ro: 'Inginerie Structurală', en: 'Structural Engineering' }, count: 3 },
  { name: { ro: 'Design Interior', en: 'Interior Design' }, count: 4 },
  { name: { ro: 'Management Proiecte', en: 'Project Management' }, count: 3 },
  { name: { ro: 'Echipe de Execuție', en: 'Execution Teams' }, count: 40 },
];

const Team = () => {
  const { lang, t } = useLanguage();

  return (
    <PageLayout>
      <PageHero title={t('page.team.h1')} subtitle={t('page.team.sub')} />

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-4xl text-foreground mb-12">LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamLeaders.map((person, i) => (
              <div key={i} className="card-architectural p-8">
                <div className="w-full aspect-square bg-gradient-to-br from-muted to-background-secondary rounded-sm mb-6 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary/20">{person.name.split(' ').pop()?.[0]}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground">{person.name}</h3>
                <p className="font-body text-sm text-primary font-medium mt-1">{person.role[lang]}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{person.exp[lang]}</p>
                <p className="font-serif italic text-sm text-muted-foreground mt-4 leading-relaxed">
                  "{person.quote[lang]}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-4xl text-foreground mb-12">
            {lang === 'ro' ? 'DEPARTAMENTE' : 'DEPARTMENTS'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="card-architectural p-6 text-center">
                <span className="font-display text-4xl text-primary">{dept.count}+</span>
                <p className="font-body text-sm text-foreground mt-2">{dept.name[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 lg:py-20 copper-gradient text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-4xl text-primary-foreground mb-4">
            {lang === 'ro' ? 'ALĂTURĂ-TE ECHIPEI' : 'JOIN THE TEAM'}
          </h2>
          <p className="font-body text-base text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            {lang === 'ro'
              ? 'Ești arhitect, inginer sau designer cu experiență? Alătură-te echipei ArcForm.'
              : 'Are you an experienced architect, engineer or designer? Join the ArcForm team.'}
          </p>
          <a href="mailto:cariere@arcform.ro" className="inline-block border-2 border-primary-foreground text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground hover:text-foreground transition-all">
            {lang === 'ro' ? 'Vezi Pozițiile Disponibile →' : 'View Open Positions →'}
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
