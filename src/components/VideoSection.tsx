import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section id="demo-video" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Play className="w-3 h-3 fill-current" />
              {t('Demonstratie', 'Demonstration')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t('Bekijk netgenoten.nl', 'Discover netgenoten.nl')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              {t(
                'Ontdek hoe wij samenwerken aan een regeneratieve, circulaire en netbewuste toekomst voor gebiedsontwikkeling.',
                'Discover how we work together on a regenerative, circular, and grid-conscious future for area development.'
              )}
            </p>
          </motion.div>
        </div>

        {/* Video Embed Iframe Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-150 relative">
            <iframe
              id="youtube-video-iframe"
              src="https://www.youtube.com/embed/C1dZs0CDkQ8"
              title="Netgenoten Video Demonstration"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
