import { motion } from 'framer-motion';
import { Battery, Zap, Car, Share2 } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-400 font-semibold tracking-wide uppercase text-sm">Technologie & Energie</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Energiesysteem van de Toekomst
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Slimme combinaties van energievragers en dragers zorgen voor een energiepositief en -onafhankelijk buurtschap. 
              We ontlasten het openbare net door slim energiemanagement.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lokale Opwek & Micro Grids</h3>
                  <p className="text-slate-400">
                    Maximaal gebruik van zon op daken en in de openbare ruimte. Een lokaal micro-grid zorgt voor minder belasting van het hoofdnet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <Battery size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Slimme Opslag (EMS)</h3>
                  <p className="text-slate-400">
                    Collectieve batterijen en een slim energiemanagementsysteem (EMS) balanceren vraag en aanbod in real-time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobiliteit, Solarparking en laadinfrastructuur</h3>
                  <p className="text-slate-400">
                    De buurthub fungeert als energiehub met solarparking en laadinfra voor deelvervoer. Auto's als batterij voor de wijk.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-tr from-teal-500/20 to-blue-500/20 absolute -inset-4 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <img 
                src="https://image2url.com/r2/default/images/1773388125029-9509a4de-0b90-48fb-82f9-b4c5816112a6.jpg" 
                alt="Solar Energy System" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex items-center gap-2 text-teal-400 font-mono text-sm mb-2">
                  <Share2 size={16} />
                  <span>Smart Grid Active</span>
                </div>
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 w-3/4" />
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                  <span>Opwek: 100%</span>
                  <span>Verbruik: 30%</span>
                  <span>Opslag: 70%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
