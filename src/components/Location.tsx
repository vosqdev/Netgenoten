import { MapPin, CheckCircle2 } from 'lucide-react';

export default function Location() {
  return (
    <section id="locatie" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
              {/* Map of Netherlands */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Netherlands_location_map_-_2019.svg/800px-Netherlands_location_map_-_2019.svg.png" 
                alt="Kaart van Nederland" 
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Waarom deze locatie?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Vaak bieden randen of oude bedrijfslocaties een unieke kans voor regeneratieve gebiedsontwikkeling. De strategische ligging combineert het beste van twee werelden: de nabijheid van voorzieningen en de rust van het landschap.
            </p>
            
            <ul className="space-y-4">
              {[
                "Strategische ligging aan rand, goede logistiek",
                "Koppelkansen met mobiliteit en centrum",
                "Ruimte voor nieuwe energie-infrastructuur",
                "Goede landschappelijke inpassing",
                "Verbinding buurthub en woningbouw"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Impuls aan de omgeving</h4>
              <p className="text-slate-600 text-sm">
                Een netgenoten plan voorziet in nieuwe natuurverbindingen, inrichting energiepositief, en duurzame gemeenschapsvorming die uitstraalt naar de omgeving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
