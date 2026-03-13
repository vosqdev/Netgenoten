import { motion } from 'framer-motion';
import { Zap, Users, Trees, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NetworkGrid() {
  const { t } = useLanguage();

  const networks = [
    {
      id: 'energie',
      title: t('Energie', 'Energy'),
      icon: Zap,
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      description: t('Slimme combinaties van energievragers en dragers zorgen voor een energiepositief en -onafhankelijk buurtschap.', 'Smart combinations of energy demanders and carriers ensure an energy-positive and independent neighborhood.'),
      points: [t('Lokale opwek', 'Local generation'), t('Slimme netten en opslag', 'Smart grids and storage'), t('Energie delen', 'Energy sharing'), t('Micro grids', 'Micro grids')],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2342&auto=format&fit=crop'
    },
    {
      id: 'gemeenschap',
      title: t('Gemeenschap', 'Community'),
      icon: Users,
      color: 'bg-pink-600',
      lightColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      description: t('Een goede stedenbouwkundige opzet en inzet op gezamenlijke plekken zorgt voor een hechte gemeenschap.', 'A good urban design and focus on shared spaces ensure a close-knit community.'),
      points: [t('Voor alle lagen van de samenleving', 'For all layers of society'), t('Plekken die uitnodigen tot samenkomen', 'Places that invite gathering'), t('Gezond samenleven', 'Healthy living together'), t('Sociale cohesie', 'Social cohesion')],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2340&auto=format&fit=crop'
    },
    {
      id: 'landschap',
      title: t('Landschap', 'Landscape'),
      icon: Trees,
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      description: t('Een doordacht ontwerp zorgt ervoor dat het landschap omarmt en versterkt wordt, meekleurend met de identiteit van de plek.', 'A thoughtful design ensures that the landscape is embraced and strengthened, coloring with the identity of the place.'),
      points: [t('Bodem en water zijn leidend', 'Soil and water are leading'), t('Natuurinclusief en biodivers', 'Nature-inclusive and biodiverse'), t('Klimaatadaptief', 'Climate-adaptive'), t('Identiteit van de plek', 'Identity of the place')],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2340&auto=format&fit=crop'
    },
    {
      id: 'mobiliteit',
      title: t('Mobiliteit', 'Mobility'),
      icon: Car,
      color: 'bg-amber-400',
      lightColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      description: t('Duurzame, passende verbindingen met de omgeving op meerdere niveaus.', 'Sustainable, appropriate connections with the environment on multiple levels.'),
      points: [t('Koppelkansen energienetwerk', 'Linking opportunities energy network'), t('Slimme mobiliteit en deelvervoer', 'Smart mobility and shared transport'), t('Logische verkeersroutes', 'Logical traffic routes'), t('Solarparking en laadinfrastructuur', 'Solar parking and charging infrastructure')],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2344&auto=format&fit=crop'
    }
  ];

  return (
    <section id="netwerken" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('Vier Netwerken', 'Four Networks')}</h2>
          <p className="text-lg text-slate-600">
            {t('Het concept Netgenoten verbindt vier essentiële pijlers om een toekomstbestendige leefomgeving te creëren.', 'The Netgenoten concept connects four essential pillars to create a future-proof living environment.')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {networks.map((network, index) => (
            <motion.div
              key={network.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 ${network.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity z-10`} />
                <img 
                  src={network.image} 
                  alt={network.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20 bg-white p-3 rounded-xl shadow-sm">
                  <network.icon className={`w-6 h-6 ${network.textColor}`} />
                </div>
                <h3 className="absolute bottom-6 left-6 z-20 text-3xl font-bold text-white tracking-tight">
                  {network.title}
                </h3>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {network.description}
                </p>
                <ul className="space-y-3">
                  {network.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className={`w-2 h-2 rounded-full ${network.color}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
