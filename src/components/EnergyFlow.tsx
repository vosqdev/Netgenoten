import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Sun, Wind, Battery, Zap, Store, Droplets, Snowflake, Flame, Database, FlaskConical, Waves, Activity, Home, Leaf, Sprout, Car, Building2, ArrowRight, ArrowRightCircle, Users } from 'lucide-react';

export default function EnergyFlow() {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 overflow-x-auto mt-20"
    >
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-slate-900">{t('Systeemintegratie', 'System Integration')}</h3>
        <p className="text-slate-500">{t('Visuele weergave van de energiestromen en crossovers.', 'Visual representation of energy flows and crossovers.')}</p>
      </div>

      <div className="min-w-[1000px] flex justify-between items-stretch gap-6">
        {/* Column 1: Source */}
        <div className="flex flex-col w-48 shrink-0">
          <div className="bg-slate-100 rounded-2xl p-6 h-full flex flex-col items-center justify-center border border-slate-200 relative shadow-sm">
            <Factory className="w-10 h-10 text-slate-700 mb-6" />
            <Sun className="w-10 h-10 text-yellow-500 mb-6" />
            <Wind className="w-10 h-10 text-teal-600 mb-6" />
            <div className="mt-auto text-center">
              <p className="font-bold text-slate-800">{t('Energie Netwerk', 'Energy Network')}</p>
              <p className="text-xs text-slate-500 font-mono">{t('regionaal netbeheerder MS-LS', 'regional grid operator MS-LS')}</p>
            </div>
            {/* Outgoing connection */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-yellow-500 bg-white rounded-full shadow-sm">
              <ArrowRightCircle className="w-6 h-6 fill-white" />
            </div>
          </div>
        </div>

        {/* Column 2: Hubs */}
        <div className="flex flex-col gap-8 w-64 shrink-0 justify-center">
          {/* Energy Hub */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col relative border border-slate-200">
            <div className="flex">
              <div className="w-1/2 bg-yellow-300 p-4 flex flex-col items-center">
                <Sun className="w-8 h-8 text-yellow-800 mb-2" />
                <span className="text-xs font-bold text-yellow-900">{t('Zomer', 'Summer')}</span>
              </div>
              <div className="w-1/2 bg-blue-400 p-4 flex flex-col items-center">
                <Zap className="w-8 h-8 text-blue-900 mb-2" />
                <span className="text-xs font-bold text-blue-900">{t('Winter', 'Winter')}</span>
              </div>
            </div>
            <div className="bg-slate-800 text-white p-4 text-center">
              <p className="font-bold text-sm mb-1">Energy hub</p>
              <p className="text-[10px] text-slate-300 flex items-center justify-center gap-1">
                <Sun className="w-3 h-3" /> Zon energie xxMW
              </p>
              <p className="text-[10px] text-slate-300 flex items-center justify-center gap-1 mt-1">
                <Battery className="w-3 h-3" /> Batterij / r-fuelcell
              </p>
            </div>
            {/* Flow indicators */}
            <div className="absolute -right-2 top-6 flex flex-col gap-1.5">
              <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-sm" title="Moleculen H2"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-white shadow-sm" title="Elektriciteit"></div>
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm" title="Warmte"></div>
            </div>
          </div>

          {/* Buurtsuper */}
          <div className="bg-slate-700 rounded-2xl p-5 text-white shadow-lg relative border border-slate-600">
            <div className="flex justify-between items-start mb-4">
              <Store className="w-10 h-10 text-slate-300" />
              <div className="flex gap-2">
                <Zap className="w-5 h-5 text-red-400" />
                <Zap className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <h4 className="font-bold mb-1">Buurtsuper</h4>
            <p className="text-[10px] text-slate-400 mb-2">{t('dubbel ruimtegebruik e-hub', 'dual space use e-hub')}</p>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2 rounded-lg w-fit">
              <Car className="w-4 h-4" title="Auto" />
              <Sun className="w-4 h-4" title="Zonnepanelen" />
              <Droplets className="w-4 h-4" title="Water" />
            </div>
            {/* Flow indicators */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
              <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm" title="Water"></div>
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm" title="Warmte"></div>
            </div>
          </div>
        </div>

        {/* Column 3: Systems */}
        <div className="flex flex-col gap-4 w-64 shrink-0 justify-center">
          <div className="bg-slate-900 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Zap className="w-5 h-5 text-green-400 shrink-0" />
            <span className="text-sm font-bold leading-tight">{t('grijs watersysteem & storage', 'grey water system & storage')}</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Snowflake className="w-5 h-5 text-blue-200 shrink-0" />
            <span className="text-sm font-bold leading-tight">{t('restwarmte koelen', 'residual heat cooling')}</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Flame className="w-5 h-5 text-orange-200 shrink-0" />
            <span className="text-sm font-bold leading-tight">{t('warmte opslag', 'heat storage')}</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-blue-700 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Database className="w-5 h-5 text-blue-300 shrink-0" />
            <span className="text-sm font-bold leading-tight">{t('Borg / storage', 'Deposit / storage')}</span>
          </div>
        </div>

        {/* Column 4: Outputs */}
        <div className="flex flex-col gap-4 w-56 shrink-0 justify-center">
          <div className="bg-orange-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <FlaskConical className="w-5 h-5 text-orange-200 shrink-0" />
            <span className="text-sm font-bold">{t('moleculen H2', 'molecules H2')}</span>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-orange-400 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Waves className="w-5 h-5 text-orange-100 shrink-0" />
            <span className="text-sm font-bold">{t('water', 'water')}</span>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Activity className="w-5 h-5 text-green-300 shrink-0" />
            <span className="text-sm font-bold">{t('flexibiliteit', 'flexibility')}</span>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-400 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-orange-600 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Home className="w-5 h-5 text-orange-200 shrink-0" />
            <span className="text-sm font-bold">{t('warmtevoorziening', 'heat supply')}</span>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative">
            <Droplets className="w-5 h-5 text-orange-200 shrink-0" />
            <span className="text-sm font-bold">{t('distributie', 'distribution')}</span>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm"></div>
          </div>
        </div>

        {/* Column 5: Crossovers */}
        <div className="flex flex-col justify-between w-40 shrink-0 py-4">
          <div className="text-center mb-4">
            <span className="font-bold text-slate-800 tracking-widest uppercase text-sm">Crossovers</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-green-600 shrink-0" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1 shadow-sm">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t('voedsel', 'food')}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-1 shadow-sm">
                  <Sprout className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t('circulair', 'circular')}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-pink-500 shrink-0" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-1 shadow-sm">
                  <Car className="w-6 h-6 text-pink-500" />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t('mobiliteit', 'mobility')}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-teal-700 shrink-0" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-1 shadow-sm">
                  <Building2 className="w-6 h-6 text-teal-700" />
                </div>
                <span className="text-xs font-semibold text-slate-600 text-center leading-tight">{t('bebouwde', 'built')}<br/>{t('omgeving', 'environment')}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-indigo-500 shrink-0" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-1 shadow-sm">
                  <Users className="w-6 h-6 text-indigo-500" />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t('gemeenschap', 'community')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-6 justify-center">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500 shadow-sm"></div><span className="text-xs font-medium text-slate-600 uppercase tracking-wider">{t('Moleculen H2', 'Molecules H2')}</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div><span className="text-xs font-medium text-slate-600 uppercase tracking-wider">{t('Elektriciteit', 'Electricity')}</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div><span className="text-xs font-medium text-slate-600 uppercase tracking-wider">{t('Warmte', 'Heat')}</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-400 shadow-sm"></div><span className="text-xs font-medium text-slate-600 uppercase tracking-wider">{t('Water', 'Water')}</span></div>
      </div>
    </motion.div>
  );
}
