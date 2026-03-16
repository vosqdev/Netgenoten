import { motion } from 'framer-motion';
import { Map, Home, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectDetails() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">
            {t('Projecten', 'Projects')}
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            {t('Pilot: casestudy Bergen & Dronten', 'Pilot: Case Study Bergen & Dronten')}
          </h2>
          <div className="text-lg text-slate-600 space-y-4">
            <p>
              {t('De eerste toepassing van het Netgenoten concept. Een tweetal strategische locaties in Noord Holland en Flevoland aan de rand van de dorpen waar wonen, natuur en energie samenkomen.', 'The first application of the Netgenoten concept. Two strategic locations in North Holland and Flevoland on the edge of the villages where living, nature and energy come together.')}
            </p>
            <p>
              {t('In de komende periode maken we afspraken over de precieze inzet. Door specifiek naar de fasering van de gebiedsontwikkeling te kijken, passen we innovaties toe in de ruimtelijke planketen.', 'In the coming period, we will make agreements about the precise deployment. By looking specifically at the phasing of the area development, we apply innovations in the spatial planning chain.')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Wonen */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://image2url.com/r2/default/images/1773386203611-f54c8713-db9a-4de2-a43d-6591ce1ce450.png" 
                alt="Typical Dutch Housing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Home size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Woonclusters', 'Housing Clusters')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {t('Een mix van sociale, betaalbare en vrije sector woningen. Gericht op doorstroming en inclusiviteit voor alle doelgroepen.', 'A mix of social, affordable and private sector housing. Focused on flow and inclusivity for all target groups.')}
              </p>
              <span className="text-teal-600 text-sm font-semibold">{t('Meer over wonen \u2192', 'More about living \u2192')}</span>
            </div>
          </motion.div>

          {/* Card 2: Buurthub */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://image2url.com/r2/default/images/1773386052169-f17ad841-48a1-46d5-a8a9-dd74b14eef34.png" 
                alt="Community Hub" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                <Coffee size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('De Buurthub', 'The Community Hub')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {t('Het kloppend hart van de wijk. Een sociale ontmoetingsplek gecombineerd met energieopslag, pakketpunt en deelvervoer.', 'The beating heart of the neighborhood. A social meeting place combined with energy storage, parcel point and shared transport.')}
              </p>
              <span className="text-amber-600 text-sm font-semibold">{t('Bekijk voorzieningen \u2192', 'View facilities \u2192')}</span>
            </div>
          </motion.div>

          {/* Card 3: Landschap */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="https://image2url.com/r2/default/images/1773386257231-d642e9d5-fd98-4031-be00-cab20a7a50c7.png" 
                alt="Landscape Plan" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                <Map size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Natuurinclusief', 'Nature Inclusive')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {t('Groene inrichting als onderdeel van het buurtschap. Nieuwe natuurverbindingen die de biodiversiteit versterken en klimaatadaptief zijn.', 'Green layout as part of the neighborhood. New nature connections that strengthen biodiversity and are climate adaptive.')}
              </p>
              <span className="text-emerald-600 text-sm font-semibold">{t('Bekijk plan \u2192', 'View plan \u2192')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
