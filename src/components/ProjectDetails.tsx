import { motion } from 'framer-motion';
import { Map, Home, Coffee } from 'lucide-react';

export default function ProjectDetails() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Projecten</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            Pilot: Bergen Nesdijk
          </h2>
          <p className="text-lg text-slate-600">
            De eerste toepassing van het Netgenoten concept. Een strategische locatie aan de rand van Bergen waar wonen, natuur en energie samenkomen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Wonen */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2340&auto=format&fit=crop" 
                alt="Modern Housing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Home size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Woonclusters</h3>
              <p className="text-slate-600 text-sm mb-4">
                Een mix van sociale, betaalbare en vrije sector woningen. Gericht op doorstroming en inclusiviteit voor alle doelgroepen.
              </p>
              <span className="text-teal-600 text-sm font-semibold">Meer over wonen &rarr;</span>
            </div>
          </motion.div>

          {/* Card 2: Buurthub */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2340&auto=format&fit=crop" 
                alt="Community Hub" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                <Coffee size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">De Buurthub</h3>
              <p className="text-slate-600 text-sm mb-4">
                Het kloppend hart van de wijk. Een sociale ontmoetingsplek gecombineerd met energieopslag, pakketpunt en deelvervoer.
              </p>
              <span className="text-amber-600 text-sm font-semibold">Bekijk voorzieningen &rarr;</span>
            </div>
          </motion.div>

          {/* Card 3: Landschap */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2532&auto=format&fit=crop" 
                alt="Landscape Plan" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                <Map size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Natuurinclusief</h3>
              <p className="text-slate-600 text-sm mb-4">
                Groene inrichting als onderdeel van het buurtschap. Nieuwe natuurverbindingen die de biodiversiteit versterken en klimaatadaptief zijn.
              </p>
              <span className="text-emerald-600 text-sm font-semibold">Bekijk plan &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
