import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { title: t("Idee & Concept", "Idea & Concept"), status: "completed" },
    { title: t("Omgevingstafel", "Environment Table"), status: "current" },
    { title: t("Participatie", "Participation"), status: "upcoming" },
    { title: t("Stedenbouw & Architectuur", "Urban Planning & Architecture"), status: "upcoming" },
    { title: t("Aanvraag Omgevingsplan", "Application Environment Plan"), status: "upcoming" },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{t('Ontwerpend Onderzoek', 'Design Research')}</h2>
          <p className="text-slate-500 mt-2">{t('De weg naar realisatie', 'The road to realization')}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-4 mb-4 transition-colors
                    ${step.status === 'completed' ? 'bg-teal-500 border-teal-500 text-white' : 
                      step.status === 'current' ? 'bg-white border-teal-500 text-teal-500' : 
                      'bg-white border-slate-200 text-slate-300'}
                  `}
                >
                  {step.status === 'completed' ? <Check size={20} /> : <span className="font-bold">{index + 1}</span>}
                </div>
                <h3 className={`font-semibold ${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
