import { Check } from 'lucide-react';

const steps = [
  { title: "Idee & Concept", status: "completed" },
  { title: "Omgevingstafel", status: "current" },
  { title: "Participatie", status: "upcoming" },
  { title: "Stedenbouw & Architectuur", status: "upcoming" },
  { title: "Aanvraag Omgevingsplan", status: "upcoming" },
];

export default function Process() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Ontwerpend Onderzoek</h2>
          <p className="text-slate-500 mt-2">De weg naar realisatie</p>
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
