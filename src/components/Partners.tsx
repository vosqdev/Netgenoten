import { motion } from 'framer-motion';

const partners = [
  { 
    id: 'borg',
    name: 'borg', 
    className: 'bg-gray-500 text-white px-4 py-1 font-bold lowercase tracking-tight rounded-sm text-xl' 
  },
  { 
    id: 'rable',
    name: 'RABLE', 
    className: 'text-slate-600 font-black tracking-widest relative after:content-["."] after:text-yellow-400 after:absolute after:-top-2 after:-right-3 after:text-4xl after:leading-none text-xl' 
  },
  { 
    id: 'bywatt',
    name: 'bywatt', 
    className: 'text-purple-800 font-bold lowercase tracking-tighter italic text-2xl' 
  },
  { 
    id: 'circul8',
    name: 'CIRCUL8', 
    subtitle: 'development', 
    className: 'text-slate-900 font-black tracking-tight text-xl',
    subClassName: 'text-cyan-500 font-light tracking-widest text-[10px] uppercase'
  },
  { 
    id: 'bjz',
    name: 'BJZ.nu', 
    subtitle: 'ruimtelijke plannen en advies', 
    className: 'text-orange-500 font-bold tracking-tight border-l-4 border-blue-900 pl-2 text-xl',
    subClassName: 'text-slate-500 text-[9px] font-medium mt-1'
  },
  { 
    id: 'metropool',
    name: 'Metropool', 
    subtitle: 'VASTGOEDONTWIKKELING', 
    className: 'text-blue-700 font-serif font-bold tracking-wide flex items-center gap-1 before:content-["✶"] before:text-cyan-400 before:text-2xl text-xl',
    subClassName: 'text-blue-900 text-[8px] tracking-widest font-bold mt-1'
  },
  { 
    id: 'moonwatt',
    name: 'MOONWATT', 
    className: 'text-slate-800 font-mono font-medium tracking-widest border border-slate-800 px-2 py-1 text-sm' 
  },
  { 
    id: 'imoss',
    name: 'IMOSS', 
    subtitle: 'STEDENBOUW LANDSCHAP BUITENRUIMTE', 
    className: 'text-black font-black text-3xl tracking-tighter',
    subClassName: 'text-black text-[7px] font-bold tracking-widest mt-1 leading-tight max-w-[120px] text-center'
  },
  { 
    id: 'lidl',
    name: 'LIDL', 
    className: 'bg-blue-700 text-yellow-400 font-black italic px-2 py-1 border-4 border-red-600 rounded-full transform -rotate-3 shadow-sm text-xl' 
  },
  { 
    id: 'firan',
    name: 'Firan', 
    className: 'text-green-500 font-sans font-medium text-3xl tracking-tight' 
  },
  { 
    id: 'futureit',
    name: 'FUTURE IT', 
    className: 'bg-blue-800 text-white font-bold px-3 py-1 tracking-widest text-sm' 
  },
  { 
    id: 'helaf',
    name: 'HELAF', 
    className: 'text-red-600 font-black text-2xl tracking-tighter border-2 border-blue-800 px-2 py-0.5 rounded-sm' 
  },
  { 
    id: 'adsensys',
    name: 'Adsensys', 
    subtitle: 'advanced sensor systems', 
    className: 'text-cyan-700 font-bold text-xl flex items-center gap-1',
    subClassName: 'text-slate-500 text-[9px] font-light tracking-wide'
  },
  { 
    id: 'fier',
    name: 'Fier', 
    subtitle: 'architecten', 
    className: 'text-slate-800 font-thin text-3xl tracking-widest uppercase',
    subClassName: 'text-slate-500 font-light tracking-widest text-[10px] -mt-1 lowercase'
  },
  { 
    id: 'aurah',
    name: 'AURAH', 
    className: 'text-slate-400 font-light tracking-[0.2em] text-lg border-2 border-slate-300 px-4 py-1 rounded-full' 
  },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Op weg naar de toekomst</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Samen met onze partners realiseren we de ambities van Netgenoten.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center group w-full h-full min-h-[80px]"
            >
              <div className={partner.className}>{partner.name}</div>
              {partner.subtitle && (
                <div className={partner.subClassName}>{partner.subtitle}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
