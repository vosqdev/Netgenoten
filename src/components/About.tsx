import { motion } from 'framer-motion';
import { AlertCircle, Home, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Aanleiding & Context</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              Waarom Netgenoten?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nederland staat voor grote uitdagingen. De ruimte is schaars en de claims vanuit natuur, water, energie en woningbouw stapelen zich op. 
              Netgenoten biedt een integraal antwoord op deze urgente vraagstukken.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">De Urgentie</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Grote woningbouwopgave in Nederland
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Netcongestie remt gebiedsontwikkeling
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  Noodzaak voor integrale oplossingen
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                <Home size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Onze Oplossing</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  Koppeling van opgaven biedt kansen
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  Regeneratieve gebiedsontwikkeling
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  Participatie en innovatie (Omgevingswet)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
