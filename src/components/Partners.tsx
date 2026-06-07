import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, Handshake, Compass } from 'lucide-react';

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
            {t('Samen werken aan nieuw denken en bouwen', 'Working together on new thinking and building')}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Column 1: De Uitdaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {t('De Uitdaging', 'The Challenge')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'Nederland staat voor urgente en complexe opgaven: We moeten sneller en meer woningen bouwen én gebieden gezond, energiek, betaalbaar en leefbaar houden. De ruimte en financiële middelen daartoe zijn beperkt, de natuur staat onder druk, netcongestie, stikstof en water vragen aandacht, kaders zijn soms knellend of niet helder en netcongestie is complexer geworden en een energiesector die veel fragmentatie kent en waar het gemakkelijk langs elkaar heen werken is.',
                'The Netherlands faces urgent and complex challenges: We must build more homes faster while keeping areas healthy, energetic, affordable, and livable. Space and financial resources for this are limited, nature is under pressure, grid congestion, nitrogen, and water require attention, frameworks are sometimes restrictive or unclear, grid congestion has become more complex, and the energy sector is highly fragmented, making it easy to work past each other.'
              )}
            </p>
          </motion.div>

          {/* Column 2: Onze Aanpak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {t('Onze Aanpak', 'Our Approach')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'Bij gebiedsontwikkeling bundelen we onze krachten om via innovatie antwoorden te vinden op de complexe vraagstukken die samenkomen bij het ontwikkelen en bouwen van buurten, wijken en woningen. Vanuit een gedeelde verantwoordelijkheid en een gezamenlijk gevoelde urgentie, gaan we aan de slag met vraagstukken in de uitvoering en op zoek naar oplossingen. Daarbij is toekomstbestendigheid het uitgangspunt, benaderen we de opgaven integraal en zetten we vol in op innovatie en digitalisering om de uitvoeringspraktijk te versterken, te versnellen en te vernieuwen.',
                'In area development, we join forces to find innovative answers to the complex issues that converge when developing and building neighborhoods, districts, and homes. From a shared responsibility and a collectively felt urgency, we tackle implementation issues and search for solutions. Future-proofing is the starting point; we approach the challenges integrally and fully commit to innovation and digitalization to strengthen, accelerate, and renew implementation practices.'
              )}
            </p>
          </motion.div>

          {/* Column 3: De Visie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {t('Onze Pijlers', 'Our Pillars')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'Het doel van Netgenoten is te komen tot een nieuwe praktijk van gebiedsontwikkeling. Samen werken we aan de fundamentele transitie van de bouwsector via de vier heldere pijlers van onze alliantie: Netbewust Bouwen, Regeneratief, Circulair en het Nieuwe Denken om zo samen een toekomstbestendige fysieke leefomgeving vorm te geven.',
                'The goal of Netgenoten is to arrive at a new practice of area development. Together we work on the fundamental transition of the construction sector through the four clear pillars of our alliance: Grid-Conscious Building, Regenerative, Circular, and New Thinking to jointly shape a future-proof physical living environment.'
              )}
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center max-w-5xl mx-auto"
        >
          <img 
            src="https://image2url.com/r2/default/images/1773387136311-39b5de2f-f781-4345-95c1-97b588725ed3.png" 
            alt={t("Onze partners", "Our partners")}
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
