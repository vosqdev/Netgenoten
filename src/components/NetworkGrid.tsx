import { motion } from 'framer-motion';
import { Zap, Users, Trees, Car } from 'lucide-react';

const networks = [
  {
    id: 'energie',
    title: 'Energie',
    icon: Zap,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Slimme combinaties van energievragers en dragers zorgen voor een energiepositief en -onafhankelijk buurtschap.',
    points: ['Lokale opwek', 'Slimme netten en opslag', 'Energie delen', 'Micro grids'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2342&auto=format&fit=crop'
  },
  {
    id: 'gemeenschap',
    title: 'Gemeenschap',
    icon: Users,
    color: 'bg-pink-600',
    lightColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    description: 'Een goede stedenbouwkundige opzet en inzet op gezamenlijke plekken zorgt voor een hechte gemeenschap.',
    points: ['Voor alle lagen van de samenleving', 'Plekken die uitnodigen tot samenkomen', 'Gezond samenleven', 'Sociale cohesie'],
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'landschap',
    title: 'Landschap',
    icon: Trees,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    description: 'Een doordacht ontwerp zorgt ervoor dat het landschap omarmt en versterkt wordt, meekleurend met de identiteit van de plek.',
    points: ['Bodem en water zijn leidend', 'Natuurinclusief en biodivers', 'Klimaatadaptief', 'Identiteit van de plek'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'mobiliteit',
    title: 'Mobiliteit',
    icon: Car,
    color: 'bg-amber-400',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    description: 'Duurzame, passende verbindingen met de omgeving op meerdere niveaus.',
    points: ['Koppelkansen energienetwerk', 'Slimme mobiliteit en deelvervoer', 'Logische verkeersroutes', 'Solarparking'],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2340&auto=format&fit=crop'
  }
];

export default function NetworkGrid() {
  return (
    <section id="netwerken" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Vier Netwerken</h2>
          <p className="text-lg text-slate-600">
            Het concept Netgenoten verbindt vier essentiële pijlers om een toekomstbestendige leefomgeving te creëren.
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
