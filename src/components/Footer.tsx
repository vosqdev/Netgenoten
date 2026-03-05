import { ArrowRight, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
              Ook interesse in een regeneratieve gebiedsontwikkeling in uw Gemeente. Of samen bouwen we aan een duurzame, sociale en energie-positieve toekomst. Neem contact met ons op!
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Uw e-mailadres" 
                className="bg-slate-800 border-none rounded-lg px-4 py-3 w-full max-w-xs focus:ring-2 focus:ring-teal-500 outline-none text-white"
              />
              <button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Volgen
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Ontwikkelaars</h4>
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
              <li>
                <a href="https://www.vovon.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                  <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">VOVON development</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <address className="not-italic space-y-4 text-slate-400">
              <p>info@netgenoten.nl</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Netgenoten | Vovon development BV. Alle rechten voorbehouden.</p>
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
