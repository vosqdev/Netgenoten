import { motion } from 'framer-motion';
import { AlertCircle, Home, Zap, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

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
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">
              {t('Aanleiding & Context', 'Background & Context')}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
              {t('Waarom Netgenoten?', 'Why Netgenoten?')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('Nederland staat voor grote uitdagingen. De ruimte is schaars en de claims vanuit natuur, water, energie en woningbouw stapelen zich op. Netgenoten biedt een integraal antwoord op deze urgente vraagstukken.', 'The Netherlands faces major challenges. Space is scarce and claims from nature, water, energy, and housing are piling up. Netgenoten offers an integrated answer to these urgent issues.')}
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('De Urgentie', 'The Urgency')}</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  {t('Grote woningbouwopgave in Nederland', 'Major housing challenge in the Netherlands')}
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  {t('Netcongestie remt gebiedsontwikkeling', 'Grid congestion slows area development')}
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  {t('Noodzaak voor integrale oplossingen', 'Need for integrated solutions')}
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('Onze Oplossing', 'Our Solution')}</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  {t('Koppeling van opgaven biedt kansen', 'Linking challenges offers opportunities')}
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  {t('Regeneratieve gebiedsontwikkeling', 'Regenerative area development')}
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  {t('Participatie en innovatie (Omgevingswet)', 'Participation and innovation (Environment and Planning Act)')}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
