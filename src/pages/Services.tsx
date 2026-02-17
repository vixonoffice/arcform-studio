import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Services = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    {
      title: { ro: 'Construcții Rezidențiale', en: 'Residential Construction' },
      items: [
        { name: { ro: 'Casă de la zero', en: 'House from scratch' }, price: '800-1200 €/mp', time: '12-18 luni' },
        { name: { ro: 'Vila / Duplex', en: 'Villa / Duplex' }, price: '900-1400 €/mp', time: '14-20 luni' },
        { name: { ro: 'Extindere locuință', en: 'House extension' }, price: '700-1000 €/mp', time: '4-8 luni' },
      ],
      faqs: [
        { q: { ro: 'Ce include prețul pe mp?', en: 'What does the price per sqm include?' }, a: { ro: 'Prețul include structura, instalațiile, finisajele standard și manopera completă.', en: 'The price includes structure, installations, standard finishes and complete labor.' } },
        { q: { ro: 'Cât durează obținerea autorizației?', en: 'How long does it take to get a permit?' }, a: { ro: 'În medie 2-4 luni, în funcție de complexitatea proiectului și primărie.', en: 'On average 2-4 months, depending on project complexity and city hall.' } },
      ],
    },
    {
      title: { ro: 'Construcții Comerciale', en: 'Commercial Construction' },
      items: [
        { name: { ro: 'Sediu de firmă', en: 'Company headquarters' }, price: '600-1000 €/mp', time: '8-14 luni' },
        { name: { ro: 'Spațiu retail', en: 'Retail space' }, price: '500-800 €/mp', time: '4-8 luni' },
        { name: { ro: 'Hale industriale', en: 'Industrial halls' }, price: '300-500 €/mp', time: '6-12 luni' },
      ],
      faqs: [
        { q: { ro: 'Oferiți consultanță pentru alegerea locației?', en: 'Do you offer location consulting?' }, a: { ro: 'Da, echipa noastră poate analiza potențialul terenurilor și recomanda soluții optime.', en: 'Yes, our team can analyze land potential and recommend optimal solutions.' } },
      ],
    },
    {
      title: { ro: 'Renovări & Consolidări', en: 'Renovations & Consolidations' },
      items: [
        { name: { ro: 'Renovare completă', en: 'Complete renovation' }, price: '400-800 €/mp', time: '3-6 luni' },
        { name: { ro: 'Renovare parțială', en: 'Partial renovation' }, price: '200-400 €/mp', time: '1-3 luni' },
        { name: { ro: 'Consolidare seismică', en: 'Seismic consolidation' }, price: '150-300 €/mp', time: '4-8 luni' },
      ],
      faqs: [
        { q: { ro: 'Trebuie să ne mutăm în timpul renovării?', en: 'Do we need to move during renovation?' }, a: { ro: 'Depinde de amploarea lucrărilor. Pentru renovări complete, recomandăm relocarea temporară.', en: 'Depends on the scope. For complete renovations, we recommend temporary relocation.' } },
      ],
    },
    {
      title: { ro: 'Design Interior', en: 'Interior Design' },
      items: [
        { name: { ro: 'Concept design complet', en: 'Complete design concept' }, price: '30-60 €/mp', time: '4-8 săptămâni' },
        { name: { ro: 'Execuție completă', en: 'Complete execution' }, price: '300-600 €/mp', time: '2-4 luni' },
        { name: { ro: 'Consultanță design', en: 'Design consulting' }, price: '100-200 €/oră', time: '1-2 săptămâni' },
      ],
      faqs: [
        { q: { ro: 'Include mobilierul custom?', en: 'Does it include custom furniture?' }, a: { ro: 'Da, pachetul de execuție completă include design și producție de mobilier la comandă.', en: 'Yes, the complete execution package includes custom furniture design and production.' } },
      ],
    },
    {
      title: { ro: 'Proiectare & Autorizații', en: 'Design & Permits' },
      items: [
        { name: { ro: 'Proiect arhitectural', en: 'Architectural project' }, price: '15-30 €/mp', time: '4-8 săptămâni' },
        { name: { ro: 'Proiect structural', en: 'Structural project' }, price: '8-15 €/mp', time: '3-6 săptămâni' },
        { name: { ro: 'Obținere autorizație', en: 'Permit acquisition' }, price: '2000-5000 €', time: '2-4 luni' },
      ],
      faqs: [],
    },
  ];

  const active = tabs[activeTab];

  return (
    <PageLayout>
      <PageHero title={t('page.services.h1')} subtitle={t('page.services.sub')} dark={false} />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setOpenFaq(null); }}
                className={`font-body text-sm px-4 py-2 rounded-sm transition-all ${
                  activeTab === i ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {tab.title[lang]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services list */}
            <div>
              <h3 className="font-display text-3xl text-foreground mb-8">{active.title[lang]}</h3>
              <div className="space-y-4">
                {active.items.map((item, i) => (
                  <div key={i} className="card-architectural p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-body text-base font-medium text-foreground">{item.name[lang]}</h4>
                      <span className="font-mono text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <span className="font-mono text-sm text-primary font-medium">{item.price}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/oferta"
                className="inline-block mt-8 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-sm hover:bg-primary-dark transition-colors"
              >
                {lang === 'ro' ? 'Solicită ofertă pentru acest serviciu →' : 'Request quote for this service →'}
              </Link>
            </div>

            {/* FAQ */}
            {active.faqs.length > 0 && (
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6">FAQ</h3>
                <div className="space-y-3">
                  {active.faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-sm">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                      >
                        <span className="font-body text-sm font-medium text-foreground">{faq.q[lang]}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4">
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a[lang]}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
