import { motion } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Battery, 
  Droplet, 
  Layers, 
  Link2, 
  Share2, 
  Gauge, 
  CheckCircle2, 
  Minimize2, 
  LineChart, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TechnicalConcept() {
  const { t } = useLanguage();

  const conceptItems = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: t('Eigen energieopwek en verbruik', 'Local energy generation & consumption'),
      description: t('Toegepast bij de bebouwde omgeving. Bij voorkeur op basis van DC (gelijkstroom), maar AC is optioneel ook mogelijk.', 'Applied in the built environment. Preferably based on DC (direct current), but AC is optionally also possible.')
    },
    {
      icon: <Share2 className="w-5 h-5 text-blue-500" />,
      title: t('Delen van Energie & Mobiliteit', 'Sharing of Energy & Mobility'),
      description: t('Faciliteert een actieve energiegemeenschap waarbij energie en mobiliteit slim met elkaar gedeeld worden.', 'Facilitates an active energy community where energy and mobility are smartly shared.')
    },
    {
      icon: <Battery className="w-5 h-5 text-emerald-500" />,
      title: t('Energieopslag & EV Charging', 'Energy Storage & EV Charging'),
      description: t('Geïntegreerd via collectieve buurtbatterijen en geoptimaliseerde laadinfrastructuur voor elektrische voertuigen.', 'Integrated via collective neighborhood batteries and optimized charging infrastructure for electric vehicles.')
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      title: t('DC aansluitnet met AC fall-back', 'DC distribution grid with AC fallback'),
      description: t('Een efficiënt gelijkstroomnetwerk waarbij voor de betrouwbaarheid altijd een back-up naar wisselstroom (AC) is voorzien.', 'An efficient direct current network where a backup to alternating current (AC) is always provided for reliability.')
    },
    {
      icon: <Link2 className="w-5 h-5 text-teal-500" />,
      title: t('Buurtaansluiting', 'Neighborhood Connection'),
      description: t('Directe koppeling van de buurt op een nabijgelegen, reeds bestaande netaansluiting.', 'Direct connection of the neighborhood to a nearby, already existing grid connection.')
    },
    {
      icon: <Gauge className="w-5 h-5 text-purple-500" />,
      title: t('Seizoensopslag (Moleculen / H2)', 'Seasonal Storage (Molecules / H2)'),
      description: t('Opslag in een waterstof- of moleculaire buffer om de typische winterdip in energieopwekking moeiteloos te overbruggen.', 'Storage in a hydrogen or molecular buffer to effortlessly bridge the typical winter dip in energy generation.')
    },
    {
      icon: <Cpu className="w-5 h-5 text-rose-500" />,
      title: t('Intelligent EMS', 'Intelligent EMS'),
      description: t('Een geavanceerd Energie Management Systeem dat alle energiestromen real-time monitort en aanstuurt.', 'An advanced Energy Management System that monitors and controls all energy flows in real-time.')
    },
    {
      icon: <Droplet className="w-5 h-5 text-cyan-500" />,
      title: t('Grijs waterinstallatie', 'Grey Water Installation'),
      description: t('Systemen om het waterverbruik in de woonbuurten aanzienlijk efficiënter te maken en te optimaliseren.', 'Systems to make water consumption in residential neighborhoods significantly more efficient and optimized.')
    }
  ];

  const designPrinciples = [
    {
      icon: <Minimize2 className="w-5 h-5 text-teal-600" />,
      text: t('Sub-eiland om energietransport te minimaliseren', 'Sub-island design to minimize energy transport distances.')
    },
    {
      icon: <Battery className="w-5 h-5 text-teal-600" />,
      text: t('Energieopslag dichtbij de opwekker en de verbruiker', 'Energy storage placed right next to both generators and consumers.')
    },
    {
      icon: <Layers className="w-5 h-5 text-teal-600" />,
      text: t('Expliciet rekening houden met seizoensopslag voor winterzekerheid', 'Explicitly accounting for seasonal storage to guarantee winter security.')
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-600" />,
      text: t('DC-net om onnodige conversieverliezen te voorkomen', 'DC grid infrastructure to eliminate unnecessary conversion losses.')
    },
    {
      icon: <Link2 className="w-5 h-5 text-teal-600" />,
      text: t('Mogelijkheid tot een (kleine, stabiele) netaansluiting', 'Capability to connect to a small, stable backup grid connection.')
    }
  ];

  return (
    <section id="technical-concept" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {t('Systeemarchitectuur', 'System Architecture')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t('Het Technisch Concept', 'The Technical Concept')}
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              {t(
                'Een dergelijk bewust ontworpen systeem – ook wel bekend als een energie-eiland – bestaat uit een slimme en geïntegreerde combinatie van:',
                'Such a consciously designed system – also known as an energy island – consists of a smart and integrated combination of:'
              )}
            </p>
          </motion.div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: 8 Concept elements */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-6">
              {conceptItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-2xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Net Ontwerp & Image */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Visual Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group h-64 lg:h-72 shrink-0 bg-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2300&auto=format&fit=crop" 
                alt="Smart Sustainable Grid Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold mb-1">
                  {t('Systeem Integratie', 'System Integration')}
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {t('Duurzame micro-netwerken gebaseerd op lokaal evenwicht', 'Sustainable microgrids built on local balance')}
                </h4>
              </div>
            </motion.div>

            {/* Hoofdpunten Net Ontwerp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex-grow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-teal-400">
                  <LineChart className="w-5 h-5" />
                  {t('Hoofdpunten Net Ontwerp', 'Key Grid Design Principles')}
                </h3>
                <ul className="space-y-4">
                  {designPrinciples.map((principle, index) => (
                    <li key={index} className="flex gap-3 items-start text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span>{principle.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Highlight Banner */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-5">
                <div className="text-4xl md:text-5xl font-extrabold text-teal-400 tracking-tight shrink-0">
                  60-70%
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  <span className="font-bold text-slate-200 block">
                    {t('Reductie Netaansluiting', 'Grid Connection Reduction')}
                  </span>
                  {t(
                    'Een volledige elektrische variant is realiseerbaar met een aanzienlijke reductie van de netaansluiting.',
                    'A full-electric variant is achievable with a significant reduction in grid connection size.'
                  )}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
