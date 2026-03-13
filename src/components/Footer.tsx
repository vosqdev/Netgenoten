import { ArrowRight, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 w-fit">
              <div className="relative w-8 h-8">
                <Share2 className="w-8 h-8 text-teal-500 transition-colors duration-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white transition-colors duration-300">
                netgenoten
              </span>
            </a>
            <p className="max-w-md text-slate-400 mb-8">
              {t('Ook interesse in een regeneratieve gebiedsontwikkeling in uw Gemeente. Of samen bouwen we aan een duurzame, sociale en energie-positieve toekomst.', 'Also interested in regenerative area development in your Municipality. Or together we build a sustainable, social and energy-positive future.')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('Ontwikkelaars', 'Developers')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://metropoolvastgoedontwikkeling.nl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                  <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">Metropool vastgoedontwikkeling</span>
                </a>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                <span className="group-hover:text-white transition-colors">Circul8 development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Netgenoten | Vovon development BV. {t('Alle rechten voorbehouden.', 'All rights reserved.')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
