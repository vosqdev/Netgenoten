import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide mb-8">
            {t('Samen werken aan nieuw denken en bouwen', 'Working together on new thinking and building')}
          </h2>
          <div className="text-slate-600 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-left md:text-center">
            <p>
              {t('Nederland staat voor urgente en complexe opgaven: We moeten sneller en meer woningen bouwen én gebieden gezond, energiek, betaalbaar en leefbaar houden. De ruimte en financiële middelen daartoe zijn beperkt, de natuur staat onder druk, netcongestie, stikstof en water vragen aandacht, kaders zijn soms knellend of niet helder en netcongestie is complexer geworden en een energiesector die veel fragmentatie kent en waar het gemakkelijk langs elkaar heen werken is.', 'The Netherlands faces urgent and complex challenges: We must build more homes faster while keeping areas healthy, energetic, affordable, and livable. Space and financial resources for this are limited, nature is under pressure, grid congestion, nitrogen, and water require attention, frameworks are sometimes restrictive or unclear, grid congestion has become more complex, and the energy sector is highly fragmented, making it easy to work past each other.')}
            </p>
            <p>
              {t('Bij gebiedsontwikkeling bundelen we onze krachten om via innovatie antwoorden te vinden op de complexe vraagstukken die samenkomen bij het ontwikkelen en bouwen van buurten, wijken en woningen. Vanuit een gedeelde verantwoordelijkheid en een gezamenlijk gevoelde urgentie, gaan we aan de slag met vraagstukken in de uitvoering en op zoek naar oplossingen. Daarbij is toekomstbestendigheid het uitgangspunt, benaderen we de opgaven integraal en zetten we vol in op innovatie en digitalisering om de uitvoeringspraktijk te versterken, te versnellen en te vernieuwen. Het doel van Netgenoten is te komen tot een nieuwe praktijk van gebiedsontwikkeling. Samen werken we aan Netbewust Bouwen, Regeneratief, Circulair en het Nieuwe Denken.', 'In area development, we join forces to find innovative answers to the complex issues that converge when developing and building neighborhoods, districts, and homes. From a shared responsibility and a collectively felt urgency, we tackle implementation issues and search for solutions. Future-proofing is the starting point; we approach the challenges integrally and fully commit to innovation and digitalization to strengthen, accelerate, and renew implementation practices. The goal of Netgenoten is to arrive at a new practice of area development. Together we work on Grid-Conscious Building, Regenerative, Circular, and New Thinking.')}
            </p>
          </div>
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
