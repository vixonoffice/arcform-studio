import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const { lang } = useLanguage();

  return (
    <a
      href="https://wa.me/40720000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-success text-success-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      title={lang === 'ro' ? 'Scrie-ne pe WhatsApp' : 'Message us on WhatsApp'}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
