import { motion } from 'framer-motion';
import { Leaf, Users, Zap, Bike } from 'lucide-react';

const features = [
  {
    title: "Regeneratieve gebiedsontwikkeling",
    description: "Een buurt die meer teruggeeft dan het neemt, met focus op herstel van natuur en sociale structuren.",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Energiepositieve woonomgeving",
    description: "Zelfvoorzienend in energie door slimme netwerken, lokale opwek en opslag.",
    icon: Zap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Sterke sociale samenhang",
    description: "Voorzieningen dichtbij en gedeelde ruimtes die ontmoeting stimuleren.",
    icon: Users,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Klimaatadaptief en circulair",
    description: "Gebouwd voor de toekomst met respect voor water, bodem en materialen.",
    icon: Bike,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function Vision() {
  return (
    <section id="visie" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Over Netgenoten</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              Een nieuw, zelfdragend gebiedsconcept.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Netgenoten is een schaalbare woonbuurt gebaseerd op een zelfvoorzienend energienetwerk. 
              Een buurthub zorgt voor balans in het systeem. Bewoners delen niet alleen energie, 
              maar ook hun woonomgeving, wat zorgt voor een sterke gemeenschap.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We koppelen verschillende opgaven in het landschap, waaronder mobiliteit, en bieden 
              een nieuwe kijk op oplossingen voor netcongestie en de woningbouwopgave.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop" 
                alt="Diverse community group" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-slate-800 font-medium italic">
                "De een heeft meer geluk gehad in het leven dan de ander. Juist in de combinatie van deze mensen kun je met elkaar prettig wonen."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
