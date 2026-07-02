import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Wind, 
  Battery, 
  Database, 
  Home, 
  Car, 
  Droplet, 
  Cpu, 
  Globe, 
  ArrowRight, 
  Sparkles,
  Info,
  Calendar,
  CloudSun
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type SystemNodeId = 'opwek' | 'ems' | 'batterij' | 'seizoen' | 'woonbuurt' | 'water' | 'net';

interface SystemNodeInfo {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export default function EnergySystemVisualization() {
  const { t } = useLanguage();
  const [activeMode, setActiveMode] = useState<'summer' | 'winter'>('summer');
  const [selectedNode, setSelectedNode] = useState<SystemNodeId>('ems');

  // Node information dictionary with translation support
  const nodeDetails: Record<SystemNodeId, { nl: SystemNodeInfo; en: SystemNodeInfo }> = {
    opwek: {
      nl: {
        title: 'Eigen Energieopwek',
        subtitle: 'Zon-PV & Wind (DC)',
        description: 'Decentrale opwekking van schone energie direct in de bebouwde omgeving. We wekken stroom op met voorkeur voor DC (gelijkstroom) om conversieverliezen te voorkomen.',
        bullets: [
          'Zonnepanelen op daken en parkeerplaatsen (solarparking)',
          'Directe koppeling op het lokale DC-gelijkstroomnetwerk',
          'Optionele AC-koppeling voor bestaande systemen'
        ]
      },
      en: {
        title: 'Local Generation',
        subtitle: 'Solar-PV & Wind (DC)',
        description: 'Decentralized generation of clean energy directly within the built environment. We generate power with a preference for DC (direct current) to prevent conversion losses.',
        bullets: [
          'Solar panels on roofs and parking facilities (solar parking)',
          'Direct integration into the local DC direct current network',
          'Optional AC integration for legacy systems'
        ]
      }
    },
    ems: {
      nl: {
        title: 'Intelligent EMS',
        subtitle: 'Energie Management Systeem',
        description: 'Het slimme brein van het micro-grid dat real-time vraag, aanbod, opslag en netbelasting balanceert en optimaliseert.',
        bullets: [
          'Real-time sturing van lokale opwekking, batterij en EV-laden',
          'Voorspelt verbruik en weersomstandigheden voor proactief beheer',
          'Schakelt automatisch tussen energiebronnen voor maximale autonomie'
        ]
      },
      en: {
        title: 'Intelligent EMS',
        subtitle: 'Energy Management System',
        description: 'The smart brain of the microgrid that balances and optimizes real-time supply, demand, storage, and grid load.',
        bullets: [
          'Real-time control of local generation, battery, and EV charging',
          'Predicts consumption and weather conditions for proactive management',
          'Automatically switches between energy sources for maximum autonomy'
        ]
      }
    },
    batterij: {
      nl: {
        title: 'Buurtbatterij',
        subtitle: 'Kortetermijnopslag',
        description: 'Collectieve batterijopslag verdeeld over de wijk om dagelijkse pieken in opwek en verbruik te dempen.',
        bullets: [
          'Slaat overtollige zonne-energie overdag op voor de avonduren',
          'Stabiliseert de lokale netfrequentie',
          'Maakt het mogelijk om netaansluitingen met 60-70% te reduceren'
        ]
      },
      en: {
        title: 'Neighborhood Battery',
        subtitle: 'Short-term Storage',
        description: 'Collective battery storage distributed across the district to smooth daily peaks in generation and consumption.',
        bullets: [
          'Stores excess solar energy during the day for evening hours',
          'Stabilizes the local grid frequency',
          'Enables a 60-70% reduction in peak grid connection requirements'
        ]
      }
    },
    seizoen: {
      nl: {
        title: 'Seizoensopslag (H2 / Moleculen)',
        subtitle: 'Langetermijn Energiebuffer',
        description: 'Seizoensoverstijgende opslag in de vorm van waterstof of moleculaire dragers om de beruchte winter-dip op te vangen.',
        bullets: [
          'Slaat zomeroverschotten op voor gebruik in donkere wintermaanden',
          'Geproduceerd via lokale elektrolyse bij hoge zonne-opbrengst',
          'Biedt ultieme winterzekerheid voor het energiesysteem'
        ]
      },
      en: {
        title: 'Seasonal Storage (H2 / Molecules)',
        subtitle: 'Long-term Energy Buffer',
        description: 'Multi-month storage in the form of hydrogen or molecular carriers to bridge the notorious winter energy deficit.',
        bullets: [
          'Stores summer excess for use in dark winter months',
          'Produced via local electrolysis during peak solar output',
          'Provides ultimate winter security for the autonomous microgrid'
        ]
      }
    },
    woonbuurt: {
      nl: {
        title: 'Woonbuurt & Mobiliteit',
        subtitle: 'Gebruikers & Energiegemeenschap',
        description: 'De woningen en gedeelde mobiliteitshub fungeren als actieve energiegemeenschap die energie deelt en uitwisselt.',
        bullets: [
          'Slimme woningen die hun verbruik aanpassen aan de beschikbaarheid',
          'Elektrische voertuigen (EV) met Bidirectioneel laden (V2G)',
          'Gebruikers delen energie onderling om transport te minimaliseren'
        ]
      },
      en: {
        title: 'Neighborhood & Mobility',
        subtitle: 'Consumers & Energy Community',
        description: 'The residential homes and shared mobility hub function as an active energy community that shares and exchanges energy.',
        bullets: [
          'Smart homes that adapt their consumption to local energy availability',
          'Electric vehicles (EVs) capable of bidirectional charging (V2G)',
          'Users share energy peer-to-peer to minimize external transport'
        ]
      }
    },
    water: {
      nl: {
        title: 'Grijs Waterinstallatie',
        subtitle: 'Circulaire Waterkringloop',
        description: 'Een efficiënte grijswaterinstallatie in de buurt om waterverbruik te minimaliseren, aangedreven door het slimme DC-net.',
        bullets: [
          'Recyclet licht vervuild water voor toiletspoeling en tuinbesproeiing',
          'Maakt optimaal gebruik van lokale pompen op schone zonne-energie',
          'Verhoogt de algemene duurzaamheid en klimaatadaptatie van de wijk'
        ]
      },
      en: {
        title: 'Grey Water System',
        subtitle: 'Circular Water Loop',
        description: 'An efficient grey water treatment installation in the neighborhood to minimize fresh water usage, powered by the smart DC grid.',
        bullets: [
          'Recycles lightly polluted water for toilet flushing and irrigation',
          'Optimized pump schedules running on clean solar power',
          'Enhances overall neighborhood sustainability and climate adaptation'
        ]
      }
    },
    net: {
      nl: {
        title: 'Netaansluiting',
        subtitle: 'Beperkte Hoofdaansluiting (Fall-back)',
        description: 'Een minimale, stabiele koppeling met het bestaande distributienet. Dient puur als back-up en ontlast het landelijke elektriciteitsnet.',
        bullets: [
          'Tot 60-70% kleinere netaansluiting vereist',
          'Dubbele betrouwbaarheid met automatische AC fall-back',
          'Voorkomt netcongestieproblemen bij de lokale gebiedsontwikkeling'
        ]
      },
      en: {
        title: 'Grid Connection',
        subtitle: 'Minimized Backup Connection',
        description: 'A minimal, highly stable coupling with the existing public distribution grid. Serves purely as a backup, relieving grid congestion.',
        bullets: [
          'Requires up to a 60-70% smaller grid connection size',
          'Double reliability with an automatic AC fall-back switch',
          'Bypasses regional grid capacity and congestion issues entirely'
        ]
      }
    }
  };

  const getTranslated = (nodeId: SystemNodeId) => {
    const lang = t('nl', 'en') === 'nl' ? 'nl' : 'en';
    return nodeDetails[nodeId][lang];
  };

  const activeNodeInfo = getTranslated(selectedNode);

  return (
    <section id="energy-system-visualization" className="py-24 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              {t('Interactieve Flowchart', 'Interactive Flowchart')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {t('Visualisatie Energie-eiland', 'Energy Island Visualization')}
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              {t(
                'Ontdek hoe de energiestromen zich gedragen in de zomer en winter. Klik op de knoppen en onderdelen om het technisch concept in actie te zien.',
                'Discover how energy flows behave during summer and winter. Click on the buttons and components to see the technical concept in action.'
              )}
            </p>
          </motion.div>

          {/* Mode Selector Buttons */}
          <div className="inline-flex p-1.5 bg-slate-800 rounded-2xl mt-8 border border-slate-700 shadow-inner">
            <button
              onClick={() => setActiveMode('summer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeMode === 'summer'
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-slate-750'
              }`}
            >
              <Sun className="w-4 h-4 animate-spin-slow" />
              <span>{t('Zomer-Modus', 'Summer Mode')}</span>
            </button>
            <button
              onClick={() => setActiveMode('winter')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeMode === 'winter'
                  ? 'bg-blue-600 text-white shadow-lg scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-slate-750'
              }`}
            >
              <CloudSun className="w-4 h-4" />
              <span>{t('Winter-Modus', 'Winter Mode')}</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left / Middle: Interactive Flow Diagram (SVG canvas + custom nodes) */}
          <div className="lg:col-span-8 bg-slate-950/40 rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col justify-between min-h-[520px] relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            {/* Current Mode Status Pill */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-xs font-mono">
              <span className={`w-2 h-2 rounded-full ${activeMode === 'summer' ? 'bg-amber-500' : 'bg-blue-500'} animate-pulse`} />
              <span className="text-slate-300">
                {activeMode === 'summer' 
                  ? t('ZON-OPWEK EN BUFFERS VULLEN', 'SOLAR-POWERED GENERATION & STORING') 
                  : t('ONTOMPELD EN SCHONE WINTER-DECKING', 'DISCHARGING & WINTER BUFFER USAGE')}
              </span>
            </div>

            {/* Interactive Schematic Diagram */}
            <div className="relative w-full h-full my-auto flex items-center justify-center min-h-[400px]">
              
              {/* Dynamic SVG Connection Flows */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" fill="none" preserveAspectRatio="xMidYMid meet">
                
                {/* Connections radiating from EMS */}
                {/* 1. Opwek -> EMS */}
                <path d="M 160,110 L 400,225" stroke="#334155" strokeWidth="2.5" />
                
                {/* 2. EMS -> Batterij */}
                <path d="M 400,225 L 160,340" stroke="#334155" strokeWidth="2.5" />
                
                {/* 3. EMS -> Seizoensopslag */}
                <path d="M 400,225 L 400,70" stroke="#334155" strokeWidth="2.5" />
                
                {/* 4. EMS -> Woonbuurt */}
                <path d="M 400,225 L 640,225" stroke="#334155" strokeWidth="2.5" />
                
                {/* 5. EMS -> Water */}
                <path d="M 400,225 L 640,110" stroke="#334155" strokeWidth="2.5" />
                
                {/* 6. EMS -> Netaansluiting */}
                <path d="M 400,225 L 640,340" stroke="#334155" strokeWidth="2.5" />

                {/* Animated Flow Particles / Dotted Overlays based on activeMode */}
                {activeMode === 'summer' ? (
                  <>
                    {/* ZOMER STROMEN: Opwek genereert veel -> EMS verdeelt naar batterij, waterstof, woonbuurt & water */}
                    {/* Opwek -> EMS (Veel stroom) */}
                    <path d="M 160,110 L 400,225" stroke="#f59e0b" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_12s_linear_infinite]" />
                    
                    {/* EMS -> Batterij (Laadt op) */}
                    <path d="M 400,225 L 160,340" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 6" className="animate-[dash_reverse_15s_linear_infinite]" />
                    
                    {/* EMS -> Seizoensopslag (Produceert H2 overschot) */}
                    <path d="M 400,225 L 400,70" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 6" className="animate-[dash_reverse_18s_linear_infinite]" />
                    
                    {/* EMS -> Woonbuurt (Directe voeding) */}
                    <path d="M 400,225 L 640,225" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite]" />
                    
                    {/* EMS -> Water (Grijs water pomp draait) */}
                    <path d="M 400,225 L 640,110" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_12s_linear_infinite]" />
                    
                    {/* EMS <-> Net (Minimaal / Geen import, eventueel lichte export) */}
                    <path d="M 400,225 L 640,340" stroke="#10b981" strokeWidth="1.5" strokeDasharray="12 12" className="animate-[dash_30s_linear_infinite] opacity-40" />
                  </>
                ) : (
                  <>
                    {/* WINTER STROMEN: Weinig opwek. Energie stroomt uit Seizoensbuffer, Batterij, en minimaal back-up Net naar de Woonbuurt */}
                    {/* Opwek -> EMS (Minimaal) */}
                    <path d="M 160,110 L 400,225" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 12" className="animate-[dash_25s_linear_infinite]" />
                    
                    {/* Batterij -> EMS (Ontlaadt voor woonbuurt) */}
                    <path d="M 160,340 L 400,225" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 6" className="animate-[dash_12s_linear_infinite]" />
                    
                    {/* Seizoensopslag -> EMS (Waterstof omgezet naar elektriciteit / warmte) */}
                    <path d="M 400,70 L 400,225" stroke="#6366f1" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite]" />
                    
                    {/* EMS -> Woonbuurt (Gezamenlijke winter-dekking) */}
                    <path d="M 400,225 L 640,225" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite]" />
                    
                    {/* Netaansluiting -> EMS (Dunne stroom, mini back-up) */}
                    <path d="M 640,340 L 400,225" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite]" />
                  </>
                )}
              </svg>

              {/* NODE BUTTONS (Overlaid relative layout) */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 items-center justify-items-center p-4">
                
                {/* Row 1, Col 1: OPWEK */}
                <div className="row-start-1 col-start-1">
                  <motion.button
                    onClick={() => setSelectedNode('opwek')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'opwek'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex gap-1">
                      <Sun className={`w-5 h-5 ${selectedNode === 'opwek' ? 'text-slate-950' : 'text-amber-500'}`} />
                      <Wind className={`w-5 h-5 ${selectedNode === 'opwek' ? 'text-slate-950' : 'text-sky-400'}`} />
                    </div>
                    <span className="text-xs font-bold whitespace-nowrap">{t('Eigen Opwek', 'Own Generation')}</span>
                    {activeMode === 'summer' && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded font-bold">100% {t('Capaciteit', 'Capacity')}</span>
                    )}
                    {activeMode === 'winter' && (
                      <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-1.5 py-0.5 rounded">15% {t('Capaciteit', 'Capacity')}</span>
                    )}
                  </motion.button>
                </div>

                {/* Row 1, Col 2: SEIZOENSOPSLAG */}
                <div className="row-start-1 col-start-2">
                  <motion.button
                    onClick={() => setSelectedNode('seizoen')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'seizoen'
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Database className={`w-5 h-5 ${selectedNode === 'seizoen' ? 'text-white' : 'text-indigo-400'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{t('Seizoensopslag (H2)', 'Seasonal Buffer')}</span>
                    {activeMode === 'summer' && (
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-mono px-1.5 py-0.5 rounded animate-pulse">{t('Laden...', 'Storing...')}</span>
                    )}
                    {activeMode === 'winter' && (
                      <span className="text-[10px] bg-orange-500/20 text-orange-400 font-mono px-1.5 py-0.5 rounded">{t('Leveren', 'Supplying')}</span>
                    )}
                  </motion.button>
                </div>

                {/* Row 1, Col 3: GREY WATER */}
                <div className="row-start-1 col-start-3">
                  <motion.button
                    onClick={() => setSelectedNode('water')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'water'
                        ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Droplet className={`w-5 h-5 ${selectedNode === 'water' ? 'text-white' : 'text-cyan-400'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{t('Grijs Water', 'Grey Water')}</span>
                    <span className="text-[10px] bg-cyan-500/10 text-cyan-400 font-mono px-1.5 py-0.5 rounded">{t('Circulair', 'Circular')}</span>
                  </motion.button>
                </div>

                {/* Row 2, Col 2: EMS CENTER PIECE */}
                <div className="row-start-2 col-start-2">
                  <motion.button
                    onClick={() => setSelectedNode('ems')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col items-center justify-center p-5 rounded-full border transition-all duration-300 w-24 h-24 ${
                      selectedNode === 'ems'
                        ? 'bg-teal-500 text-slate-950 border-teal-300 shadow-2xl shadow-teal-400/30 ring-4 ring-teal-500/20'
                        : 'bg-slate-850 text-slate-100 border-teal-550/40 hover:border-teal-400 hover:shadow-lg'
                    }`}
                  >
                    <Cpu className={`w-8 h-8 mb-1 ${selectedNode === 'ems' ? 'text-slate-950' : 'text-teal-400 animate-pulse'}`} />
                    <span className="text-[10px] font-black tracking-widest">EMS</span>
                    {/* Ring animation */}
                    <div className="absolute -inset-1 rounded-full border border-teal-500/10 animate-ping pointer-events-none" />
                  </motion.button>
                </div>

                {/* Row 2, Col 3: WOONBUURT & MOBILITEIT */}
                <div className="row-start-2 col-start-3">
                  <motion.button
                    onClick={() => setSelectedNode('woonbuurt')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'woonbuurt'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex gap-1.5">
                      <Home className={`w-5 h-5 ${selectedNode === 'woonbuurt' ? 'text-white' : 'text-emerald-400'}`} />
                      <Car className={`w-5 h-5 ${selectedNode === 'woonbuurt' ? 'text-white' : 'text-emerald-400'}`} />
                    </div>
                    <span className="text-xs font-bold whitespace-nowrap">{t('Buurt & EV', 'Neighborhood & EV')}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded font-semibold">{t('Gedeeld Net', 'Shared Grid')}</span>
                  </motion.button>
                </div>

                {/* Row 3, Col 1: BUURTBATTERIJ */}
                <div className="row-start-3 col-start-1">
                  <motion.button
                    onClick={() => setSelectedNode('batterij')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'batterij'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Battery className={`w-5 h-5 ${selectedNode === 'batterij' ? 'text-slate-950' : 'text-emerald-400'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{t('Buurtbatterij', 'District Battery')}</span>
                    {activeMode === 'summer' && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded animate-pulse">{t('Laden...', 'Storing...')}</span>
                    )}
                    {activeMode === 'winter' && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">{t('Ontladen', 'Discharging')}</span>
                    )}
                  </motion.button>
                </div>

                {/* Row 3, Col 3: NET CONNECTION */}
                <div className="row-start-3 col-start-3">
                  <motion.button
                    onClick={() => setSelectedNode('net')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === 'net'
                        ? 'bg-purple-700 text-white border-purple-500 shadow-lg shadow-purple-500/20'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Globe className={`w-5 h-5 ${selectedNode === 'net' ? 'text-white' : 'text-purple-400'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{t('Netaansluiting', 'Grid Connection')}</span>
                    {activeMode === 'summer' && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">0% {t('Belasting', 'Load')}</span>
                    )}
                    {activeMode === 'winter' && (
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 font-mono px-1.5 py-0.5 rounded">{t('Minimale Back-up', 'Minimal Backup')}</span>
                    )}
                  </motion.button>
                </div>

              </div>
            </div>

            {/* Explanatory Legend / Modus description inside diagram card */}
            <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{t('Klik op een onderdeel voor gedetailleerde toelichting.', 'Click on any component for detailed explanation.')}</span>
              </div>
              <div className="flex gap-3 items-center font-mono text-[10px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-1 bg-amber-500 rounded-full inline-block" /> {t('Lokaal Opwek', 'Own Gen')}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-1 bg-emerald-500 rounded-full inline-block" /> {t('Kort opslag / EV', 'Short Storage')}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-1 bg-indigo-500 rounded-full inline-block" /> {t('Seizoensopslag', 'Season Buffer')}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Detailed Component Explanation Card */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-teal-400 tracking-wider uppercase">
                      {t('Geselecteerd onderdeel', 'Selected Component')}
                    </span>
                    <Sparkles className="w-4 h-4 text-teal-400" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white leading-tight mb-1">
                    {activeNodeInfo.title}
                  </h3>
                  <p className="text-teal-400 font-medium text-sm mb-5">
                    {activeNodeInfo.subtitle}
                  </p>

                  <div className="w-full h-px bg-slate-800 my-4" />

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {activeNodeInfo.description}
                  </p>

                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3.5">
                    {t('Belangrijke eigenschappen:', 'Key Features:')}
                  </h4>
                  <ul className="space-y-3">
                    {activeNodeInfo.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-350">
                        <ArrowRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro-simulation banner based on Zomer/Winter selection inside explanation card */}
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <div className={`p-4 rounded-2xl flex items-center gap-3.5 ${
                    activeMode === 'summer' 
                      ? 'bg-amber-500/10 border border-amber-500/20 text-amber-200' 
                      : 'bg-blue-600/10 border border-blue-500/20 text-blue-200'
                  }`}>
                    <div className="p-2 bg-slate-950/60 rounded-xl shrink-0">
                      {activeMode === 'summer' ? (
                        <Sun className="w-5 h-5 text-amber-500 animate-pulse" />
                      ) : (
                        <CloudSun className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <div className="text-xs">
                      <span className="font-bold block text-white mb-0.5">
                        {activeMode === 'summer' 
                          ? t('Zomer Simulatie Actief', 'Summer Simulation Active') 
                          : t('Winter Simulatie Actief', 'Winter Simulation Active')}
                      </span>
                      {activeMode === 'summer'
                        ? t('Maximale opwekking. Netbewust bouwen zorgt voor opslag van overschotten.', 'Peak energy generation. Grid-conscious construction enables storing high excess capacity.')
                        : t('Minder zon. Seizoensopslag (H2) treedt in werking voor winterzekerheid.', 'Low solar capacity. Seasonal hydrogen storage automatically deploys to ensure stability.')}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Embedded CSS animations for the flow dots */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-spin-slow {
          animation: spin 16s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
