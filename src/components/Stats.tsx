import { motion } from 'framer-motion';

const stats = [
  { value: "100%", label: "Groene energie", sub: "Paris Proof" },
  { value: "Net Zero", label: "2050", sub: "The road to carbon zero" },
  { value: "30%", label: "Meer groen", sub: "Biodiversiteit" },
  { value: "80%", label: "CO2 Reductie", sub: "Duurzaam bouwen" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
