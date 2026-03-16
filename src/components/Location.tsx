import { MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  const reasons = [
    t("Strategische ligging aan rand, goede logistiek", "Strategic location on the edge, good logistics"),
    t("Koppelkansen met mobiliteit en centrum", "Coupling opportunities with mobility and center"),
    t("Ruimte voor nieuwe energie-infrastructuur", "Space for new energy infrastructure"),
    t("Goede landschappelijke inpassing", "Good landscape integration"),
    t("Verbinding buurthub en woningbouw", "Connection community hub and housing")
  ];

  return (
    <section id="locatie" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
              {/* Map of Netherlands */}
              <img 
                src="https://image2url.com/r2/default/images/1773386510018-7c70f855-9f44-4982-835a-ce1ef776505f.png" 
                alt={t("Kaart van Nederland", "Map of the Netherlands")}
                className="w-full h-full object-contain p-4"
                referrerPolicy="no-referrer"
              />
              
              {/* Map Marker for Bergen */}
              <div className="absolute top-[31%] left-[34%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                <div className="relative">
                  <span className="absolute -inset-2 bg-teal-400 rounded-full opacity-75 animate-ping" />
                  <MapPin className="text-teal-600 drop-shadow-lg w-8 h-8 fill-white relative z-10" />
                </div>
                <div className="bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold mt-1 text-slate-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">
                  Bergen (Nesdijk)
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('Waar gaan we gebiedsgericht aan de slag?', 'Where are we working area-oriented?')}</h2>
            <p className="text-lg text-slate-600 mb-8">
              {t('Vaak bieden randen of oude bedrijfslocaties een unieke kans voor regeneratieve gebiedsontwikkeling. De strategische ligging combineert het beste van twee werelden: de nabijheid van voorzieningen en de rust van het landschap.', 'Often edges or old business locations offer a unique opportunity for regenerative area development. The strategic location combines the best of both worlds: the proximity of amenities and the tranquility of the landscape.')}
            </p>
            
            <ul className="space-y-4">
              {reasons.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{t('Impuls aan de omgeving', 'Impulse to the environment')}</h4>
              <p className="text-slate-600 text-sm">
                {t('Een netgenoten plan voorziet in nieuwe natuurverbindingen, inrichting energiepositief, en duurzame gemeenschapsvorming die uitstraalt naar de omgeving.', 'A Netgenoten plan provides for new nature connections, energy-positive design, and sustainable community building that radiates to the environment.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
