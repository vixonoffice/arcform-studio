import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout, PageHero } from '@/components/PageLayout';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'ro' ? 'Mesajul a fost trimis!' : 'Message sent!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const offices = [
    { city: 'București (HQ)', address: 'Str. Arhitecților 5, Sector 1', phone: '+40 720 XXX XXX' },
    { city: 'Cluj-Napoca', address: 'Str. Memorandumului 12', phone: '+40 720 XXX XXX' },
    { city: 'Timișoara', address: 'Bd. Revoluției 8', phone: '+40 720 XXX XXX' },
    { city: 'Constanța', address: 'Bd. Mamaia 45', phone: '+40 720 XXX XXX' },
  ];

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day === 0) return false;
    if (day === 6) return hour >= 9 && hour < 13;
    return hour >= 8 && hour < 18;
  };

  return (
    <PageLayout>
      <PageHero title={t('page.contact.h1')} subtitle={t('page.contact.sub')} />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={lang === 'ro' ? 'Nume complet' : 'Full name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder={lang === 'ro' ? 'Telefon' : 'Phone'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">{lang === 'ro' ? 'Subiect...' : 'Subject...'}</option>
                    <option>{lang === 'ro' ? 'Întrebare' : 'Question'}</option>
                    <option>{lang === 'ro' ? 'Ofertă' : 'Quote'}</option>
                    <option>{lang === 'ro' ? 'Parteneriat' : 'Partnership'}</option>
                    <option>{lang === 'ro' ? 'Carieră' : 'Career'}</option>
                  </select>
                </div>
                <textarea
                  placeholder={lang === 'ro' ? 'Mesajul tău...' : 'Your message...'}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background-secondary border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-primary-dark transition-colors"
                >
                  {lang === 'ro' ? 'Trimite →' : 'Send →'}
                </button>
              </form>
              <p className="font-body text-sm text-muted-foreground mt-4">
                <a href="/oferta" className="text-primary hover:underline">
                  {lang === 'ro' ? 'Sau completează formularul de ofertă →' : 'Or fill out the quote form →'}
                </a>
              </p>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${isOpen() ? 'bg-success' : 'bg-destructive'}`} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {isOpen() ? (lang === 'ro' ? 'Deschis acum' : 'Open now') : (lang === 'ro' ? 'Închis acum' : 'Closed now')}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-body text-sm text-foreground">Str. Arhitecților 5, Sector 1</p>
                      <p className="font-body text-sm text-muted-foreground">București, România</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <p className="font-body text-sm text-foreground">L-V 08:00-18:00 | S 09:00-13:00</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <p className="font-mono text-sm text-foreground">+40 720 XXX XXX</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <p className="font-mono text-sm text-foreground">office@arcform.ro</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full aspect-video bg-accent rounded-sm flex items-center justify-center">
                <span className="font-mono text-xs text-accent-foreground/30">Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices grid */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-3xl text-foreground mb-8">
            {lang === 'ro' ? 'PUNCTE DE LUCRU' : 'OFFICES'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <div key={i} className="card-architectural p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{office.city}</h3>
                <p className="font-body text-sm text-muted-foreground">{office.address}</p>
                <p className="font-mono text-xs text-primary mt-2">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
