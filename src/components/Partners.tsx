import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide mb-8">
            {t('Op weg naar de toekomst', 'Heading into the future')}
          </h2>
          <div className="text-slate-600 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-left md:text-center">
            <p>
              {t('Netgenoten is een gezamenlijke conceptontwikkeling van Circul8 development en Metropool Vastgoedontwikkeling. Patrick is al jarenlang actief in grootschalige gebiedsontwikkeling voor diverse opdrachtgevers, terwijl Hein vanuit Metropool Vastgoedontwikkeling werkt aan mixed-use vastgoed opgaven waarbij ook retail concepten zoals Lidl supermarkten.', 'Netgenoten is a joint concept development by Circul8 development and Metropool Vastgoedontwikkeling. Patrick has been active in large-scale area development for various clients for years, while Hein works from Metropool Vastgoedontwikkeling on mixed-use real estate assignments including retail concepts such as Lidl supermarkets.')}
            </p>
            <p>
              {t('In 2025 hebben zij de krachten gebundeld om vastgelopen opgaven op het gebied van wonen, werken en energie opnieuw in beweging te brengen van innovatie en ketensamenwerking. Vanuit die gezamenlijke ambitie is het concept Netgenoten ontstaan.', 'In 2025, they joined forces to get stalled assignments in the field of living, working and energy moving again through innovation and chain collaboration. The Netgenoten concept originated from this shared ambition.')}
            </p>
            <p>
              {t('Door samen te werken met ervaren partners vanuit de bouw en ontwikkeling verbinden wij vastgoed en mobiliteit met de energietransitie. Zo ontwikkelen we toekomstbestendige gebieden waarin wonen, energie en leefkwaliteit hand in hand gaan \u2013 met als doel een groenere, gezondere en duurzamere leefomgeving.', 'By collaborating with experienced partners from construction and development, we connect real estate and mobility with the energy transition. In this way, we develop future-proof areas in which living, energy and quality of life go hand in hand \u2013 with the aim of a greener, healthier and more sustainable living environment.')}
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
