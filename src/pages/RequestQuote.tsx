import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';
import { useState } from 'react';
import { Check, Upload, Home, Building2, Hammer, Factory, Sofa, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectTypes = [
  { icon: Home, label: { ro: 'Construcție casă nouă', en: 'New house construction' } },
  { icon: Building2, label: { ro: 'Construcție spațiu comercial', en: 'Commercial space construction' } },
  { icon: Hammer, label: { ro: 'Renovare rezidențial', en: 'Residential renovation' } },
  { icon: Factory, label: { ro: 'Renovare comercial/industrial', en: 'Commercial/industrial renovation' } },
  { icon: Sofa, label: { ro: 'Amenajare interioară', en: 'Interior design' } },
  { icon: Ruler, label: { ro: 'Proiectare / consultanță', en: 'Design / consulting' } },
];

const RequestQuote = () => {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    area: '', location: '', budget: 50, timeline: '', phase: '', description: '',
    firstName: '', lastName: '', phone: '', email: '', company: '', source: '',
    callPreferred: false, gdpr: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageLayout>
        <section className="min-h-screen flex items-center justify-center bg-background pt-20">
          <div className="text-center max-w-lg px-6">
            {/* SVG animation */}
            <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto mb-8">
              <path d="M 40 140 L 40 80 L 100 40 L 160 80 L 160 140 Z" fill="none" stroke="hsl(27, 55%, 46%)" strokeWidth="2" className="line-draw" />
              <path d="M 80 140 L 80 110 L 120 110 L 120 140" fill="none" stroke="hsl(27, 55%, 46%)" strokeWidth="2" className="line-draw" style={{ animationDelay: '0.5s' }} />
              <circle cx="100" cy="75" r="10" fill="none" stroke="hsl(27, 55%, 46%)" strokeWidth="2" className="line-draw" style={{ animationDelay: '1s' }} />
            </svg>

            <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-success-foreground" />
            </div>
            <h2 className="font-display text-4xl text-foreground mb-4">
              {lang === 'ro' ? 'Solicitarea Ta a Fost Primită!' : 'Your Request Has Been Received!'}
            </h2>
            <p className="font-body text-base text-muted-foreground mb-2">
              {lang === 'ro'
                ? 'Echipa noastră îți va trimite o ofertă personalizată în maxim 48 ore.'
                : 'Our team will send you a personalized quote within 48 hours.'}
            </p>
            <p className="font-body text-sm text-muted-foreground mb-8">
              {lang === 'ro'
                ? `Un consultant te va contacta la ${formData.phone || 'numărul indicat'} pentru detalii suplimentare.`
                : `A consultant will contact you at ${formData.phone || 'the provided number'} for additional details.`}
            </p>
            <Link to="/" className="inline-block bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-dark transition-colors">
              {lang === 'ro' ? '← Înapoi Acasă' : '← Back Home'}
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        title={t('page.quote.h1')}
        subtitle={t('page.quote.sub')}
        dark={false}
        badge={t('page.quote.badge')}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form — 60% */}
            <div className="lg:col-span-3">
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-colors ${
                      step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && <div className={`flex-1 h-px ${step > s ? 'bg-primary' : 'bg-border'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-6">
                      {lang === 'ro' ? 'TIPUL PROIECTULUI' : 'PROJECT TYPE'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projectTypes.map((type, i) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedType(i)}
                            className={`p-6 border rounded-sm text-left transition-all flex items-center gap-4 ${
                              selectedType === i
                                ? 'border-primary bg-primary/5 shadow-sm'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <Icon className={`w-8 h-8 ${selectedType === i ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className="font-body text-sm font-medium text-foreground">{type.label[lang]}</span>
                          </button>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => selectedType !== null && setStep(2)}
                      disabled={selectedType === null}
                      className="mt-8 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-dark transition-colors disabled:opacity-40"
                    >
                      {lang === 'ro' ? 'Continuă →' : 'Continue →'}
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-6">
                      {lang === 'ro' ? 'DETALII PROIECT' : 'PROJECT DETAILS'}
                    </h3>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs text-muted-foreground block mb-1.5">
                            {lang === 'ro' ? 'Suprafață estimată (mp)' : 'Estimated area (sqm)'}
                          </label>
                          <input
                            type="number"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="font-mono text-xs text-muted-foreground block mb-1.5">
                            {lang === 'ro' ? 'Locația' : 'Location'}
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder={lang === 'ro' ? 'Județ, Localitate' : 'County, City'}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-xs text-muted-foreground block mb-1.5">
                          {lang === 'ro' ? `Buget estimat: ${formData.budget}k €` : `Estimated budget: ${formData.budget}k €`}
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="500"
                          step="10"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                          className="w-full accent-primary"
                        />
                        <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                          <span>10k €</span><span>500k+ €</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs text-muted-foreground block mb-1.5">Timeline</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          >
                            <option value="">—</option>
                            <option>3-6 {lang === 'ro' ? 'luni' : 'months'}</option>
                            <option>6-12 {lang === 'ro' ? 'luni' : 'months'}</option>
                            <option>12-24 {lang === 'ro' ? 'luni' : 'months'}</option>
                            <option>{lang === 'ro' ? 'Flexibil' : 'Flexible'}</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-mono text-xs text-muted-foreground block mb-1.5">
                            {lang === 'ro' ? 'Faza proiectului' : 'Project phase'}
                          </label>
                          <select
                            value={formData.phase}
                            onChange={(e) => setFormData({ ...formData, phase: e.target.value })}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary"
                          >
                            <option value="">—</option>
                            <option>Concept</option>
                            <option>{lang === 'ro' ? 'Planuri' : 'Plans'}</option>
                            <option>{lang === 'ro' ? 'Autorizație obținută' : 'Permit obtained'}</option>
                            <option>{lang === 'ro' ? 'Gata de șantier' : 'Ready for construction'}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="font-mono text-xs text-muted-foreground block mb-1.5">
                          {lang === 'ro' ? 'Descrie pe scurt ce îți dorești' : 'Briefly describe what you want'}
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary resize-none"
                        />
                      </div>

                      {/* File upload area */}
                      <div className="border-2 border-dashed border-border rounded-sm p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="font-body text-sm text-muted-foreground">
                          {lang === 'ro' ? 'Trage fișiere aici sau click pentru a încărca' : 'Drag files here or click to upload'}
                        </p>
                        <p className="font-mono text-[10px] text-muted-foreground/60 mt-1">
                          {lang === 'ro' ? 'Planuri, schițe, fotografii (PDF, JPG, PNG)' : 'Plans, sketches, photos (PDF, JPG, PNG)'}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button type="button" onClick={() => setStep(1)} className="border border-border text-foreground font-body text-sm px-6 py-3 rounded-sm hover:border-primary transition-colors">
                        ← {lang === 'ro' ? 'Înapoi' : 'Back'}
                      </button>
                      <button type="button" onClick={() => setStep(3)} className="bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-dark transition-colors">
                        {lang === 'ro' ? 'Continuă →' : 'Continue →'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-6">
                      {lang === 'ro' ? 'DATE DE CONTACT' : 'CONTACT DETAILS'}
                    </h3>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder={lang === 'ro' ? 'Prenume' : 'First name'}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                        />
                        <input
                          type="text"
                          placeholder={lang === 'ro' ? 'Nume' : 'Last name'}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder={lang === 'ro' ? 'Telefon' : 'Phone'}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder={lang === 'ro' ? 'Companie (opțional)' : 'Company (optional)'}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                      />
                      <select
                        value={formData.source}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary"
                      >
                        <option value="">{lang === 'ro' ? 'Cum ai aflat de noi?' : 'How did you hear about us?'}</option>
                        <option>Google</option>
                        <option>Instagram</option>
                        <option>{lang === 'ro' ? 'Recomandare' : 'Referral'}</option>
                        <option>{lang === 'ro' ? 'Altele' : 'Other'}</option>
                      </select>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.callPreferred}
                          onChange={(e) => setFormData({ ...formData, callPreferred: e.target.checked })}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-body text-sm text-foreground">
                          {lang === 'ro' ? 'Doresc să fiu contactat telefonic' : 'I prefer to be contacted by phone'}
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.gdpr}
                          onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                          required
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-body text-sm text-muted-foreground">
                          {lang === 'ro'
                            ? 'Sunt de acord cu prelucrarea datelor personale conform GDPR.'
                            : 'I agree to the processing of personal data in accordance with GDPR.'}
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button type="button" onClick={() => setStep(2)} className="border border-border text-foreground font-body text-sm px-6 py-3 rounded-sm hover:border-primary transition-colors">
                        ← {lang === 'ro' ? 'Înapoi' : 'Back'}
                      </button>
                      <button
                        type="submit"
                        className="bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-primary-dark transition-colors flex items-center gap-2"
                      >
                        📋 {lang === 'ro' ? 'Solicită Oferta Gratuită' : 'Request Free Quote'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right sidebar — 40% */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-architectural p-6">
                <h4 className="font-display text-xl text-foreground mb-4">
                  {lang === 'ro' ? 'Ce Include Oferta Noastră Gratuită:' : 'What Our Free Quote Includes:'}
                </h4>
                <ul className="space-y-3">
                  {[
                    { ro: 'Estimare cost execuție', en: 'Execution cost estimate' },
                    { ro: 'Timeline detaliat', en: 'Detailed timeline' },
                    { ro: 'Prezentare materiale recomandate', en: 'Recommended materials presentation' },
                    { ro: 'Consultație 30 min cu arhitectul', en: '30 min consultation with architect' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      <span className="font-body text-sm text-foreground">{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-architectural p-6">
                <h4 className="font-display text-xl text-foreground mb-4">
                  {lang === 'ro' ? 'Garantăm:' : 'We Guarantee:'}
                </h4>
                <ul className="space-y-3">
                  {[
                    { ro: 'Răspuns în maxim 48h', en: 'Response within 48h' },
                    { ro: 'Ofertă fără obligații', en: 'No-obligation quote' },
                    { ro: 'Preț fix, fără surprize', en: 'Fixed price, no surprises' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      <span className="font-body text-sm text-foreground">{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-architectural p-6 border-l-[3px] border-l-primary">
                <p className="font-serif italic text-sm text-muted-foreground leading-relaxed">
                  "{lang === 'ro'
                    ? 'Oferta a venit în 24h, detaliată și corectă față de ce am executat. Transparență totală.'
                    : 'The quote came in 24h, detailed and accurate compared to what was executed. Total transparency.'}"
                </p>
                <p className="font-body text-sm text-foreground mt-3">— Mihai P.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RequestQuote;
