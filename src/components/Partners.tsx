import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide mb-8">
            {t('Het ontstaan van Netgenoten', 'The origin of Netgenoten')}
          </h2>
          <div className="text-slate-600 max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-left md:text-center">
            <p>
              {t('Partijen werkten jarenlang ieder vanuit hun eigen rol aan gebieds- en vastgoedontwikkeling. Ook aan grootschalige gebiedsopgaven waar de uitdagingen rond wonen, werken en infrastructuur steeds complexer werden.', 'For years, parties worked from their own roles on area and real estate development. Also on large-scale area assignments where the challenges around living, working and infrastructure became increasingly complex.')}
            </p>
            <p>
              {t('In de projecten zagen we hetzelfde patroon terugkomen. De opgaven rond wonen, energie en mobiliteit werden steeds urgenter, maar oplossingen bleven vaak versnipperd. Projecten liepen vast door verschillende belangen, afzonderlijke systemen en een gebrek aan samenwerking in de keten. Tegelijkertijd zagen we dat juist daar de sleutel lag: in het verbinden van partijen, technologie en systemen.', 'In the projects, we saw the same pattern recurring. The challenges around housing, energy and mobility became increasingly urgent, but solutions often remained fragmented. Projects stalled due to different interests, separate systems and a lack of collaboration in the chain. At the same time, we saw that the key lay precisely there: in connecting parties, technology and systems.')}
            </p>
            <p>
              {t('In 2025 besloten we onze ervaringen en netwerk samen te brengen. Onze overtuiging is dat gebiedsontwikkeling alleen toekomstbestendig kan zijn als vastgoed, mobiliteit, landschap en energie vanaf het begin in samenhang worden ontwikkeld. Niet als losse onderdelen, maar als één integraal systeem.', 'In 2025, we decided to bring our experiences and network together. Our conviction is that area development can only be future-proof if real estate, mobility, landscape and energy are developed in cohesion from the start. Not as separate parts, but as one integral system.')}
            </p>
            <p>
              {t('Vanuit die gedachte ontstond Netgenoten. Een concept waarin ontwikkelaars, bouwers en energiepartners samenwerken aan nieuwe oplossingen voor gebieden die vastgelopen zijn of opnieuw vorm moeten krijgen. Door innovatie te combineren met sterke ketensamenwerking brengen zij beweging in complexe opgaven.', 'Netgenoten originated from this idea. A concept in which developers, builders and energy partners collaborate on new solutions for areas that have stalled or need to be reshaped. By combining innovation with strong chain collaboration, they bring movement to complex assignments.')}
            </p>
            <p>
              {t('Het doel is helder: gebieden ontwikkelen waarin wonen, energie en leefkwaliteit elkaar versterken. Toekomstbestendig, duurzaam en gebouwd op samenwerking.', 'The goal is clear: to develop areas in which living, energy and quality of life reinforce each other. Future-proof, sustainable and built on collaboration.')}
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
