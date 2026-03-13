import { useState } from 'react';
import { ArrowRight, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LegalModal from './LegalModal';

type ModalType = 'privacy' | 'cookies' | 'disclaimer' | null;

export default function Footer() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
              {t('Ook interesse in een regeneratieve gebiedsontwikkeling in uw Gemeente. Of samen bouwen aan een duurzame, sociale en energie-positieve toekomst. Neem contact op met de ontwikkelaars.', 'Also interested in regenerative area development in your Municipality. Or building a sustainable, social and energy-positive future together. Contact the developers.')}
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
              <li>
                <a href="https://www.c8.nl/development-bv.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                  <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">Circul8 development</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Netgenoten | VOVON. {t('Alle rechten voorbehouden.', 'All rights reserved.')}</p>
          <div className="flex gap-6">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => setActiveModal('cookies')} className="hover:text-white transition-colors">Cookies</button>
            <button onClick={() => setActiveModal('disclaimer')} className="hover:text-white transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title={t('Privacyverklaring – Netgenoten', 'Privacy Statement – Netgenoten')}
      >
        <p>{t('De website van Netgenoten verwerkt of bewaart geen persoonsgegevens.', 'The Netgenoten website does not process or store personal data.')}</p>
        <p>{t('Via deze website worden geen persoonsgegevens verzameld, opgeslagen of geanalyseerd. Er worden geen formulieren gebruikt en er wordt geen gebruikersregistratie toegepast.', 'No personal data is collected, stored, or analyzed via this website. No forms are used and no user registration is applied.')}</p>
        <p>{t('Voor vragen, samenwerkingen of contact verwijzen wij naar de websites van de initiatiefnemers:', 'For questions, collaborations, or contact, we refer to the websites of the initiators:')}</p>
        <ul className="list-disc pl-5">
          <li>Circul8 Development</li>
          <li>Metropool Vastgoedontwikkeling</li>
        </ul>
        <p>{t('Wanneer u via deze websites contact opneemt, geldt het privacybeleid van de betreffende organisatie.', 'When you contact us via these websites, the privacy policy of the relevant organization applies.')}</p>
      </LegalModal>

      <LegalModal
        isOpen={activeModal === 'cookies'}
        onClose={() => setActiveModal(null)}
        title={t('Cookiebeleid – Netgenoten', 'Cookie Policy – Netgenoten')}
      >
        <p>{t('De website van Netgenoten maakt uitsluitend gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren van de website.', 'The Netgenoten website only uses functional cookies that are necessary for the proper functioning of the website.')}</p>
        <p>{t('Er worden geen marketingcookies, trackingcookies of persoonlijke data verzameld via deze website.', 'No marketing cookies, tracking cookies, or personal data are collected via this website.')}</p>
        <p>{t('Eventuele externe links naar andere websites kunnen hun eigen cookiebeleid hanteren. Wij adviseren u om de privacy- en cookieverklaringen van die websites te raadplegen.', 'Any external links to other websites may have their own cookie policy. We advise you to consult the privacy and cookie statements of those websites.')}</p>
      </LegalModal>

      <LegalModal
        isOpen={activeModal === 'disclaimer'}
        onClose={() => setActiveModal(null)}
        title={t('Disclaimer – Netgenoten', 'Disclaimer – Netgenoten')}
      >
        <p>{t('De informatie op deze website wordt met zorg samengesteld door Netgenoten, een gezamenlijke conceptontwikkeling van Circul8 Development en Metropool Vastgoedontwikkeling.', 'The information on this website has been carefully compiled by Netgenoten, a joint concept development of Circul8 Development and Metropool Vastgoedontwikkeling.')}</p>
        <p>{t('De inhoud van deze website is uitsluitend bedoeld voor algemene informatie over het project Netgenoten, de visie, conceptontwikkeling en mogelijke samenwerkingen. Aan de inhoud van deze website kunnen geen rechten worden ontleend.', 'The content of this website is intended solely for general information about the Netgenoten project, the vision, concept development, and possible collaborations. No rights can be derived from the content of this website.')}</p>
        <p>{t('Concepten, tekeningen, visualisaties en projectbeschrijvingen die op deze website worden getoond zijn indicatief en kunnen gedurende het ontwikkelproces wijzigen.', 'Concepts, drawings, visualizations, and project descriptions shown on this website are indicative and may change during the development process.')}</p>
        <p>{t('Netgenoten, Circul8 Development en Metropool Vastgoedontwikkeling aanvaarden geen aansprakelijkheid voor eventuele directe of indirecte schade die voortvloeit uit het gebruik van de informatie op deze website.', 'Netgenoten, Circul8 Development, and Metropool Vastgoedontwikkeling accept no liability for any direct or indirect damage resulting from the use of the information on this website.')}</p>
        <p>{t('Deze website kan verwijzingen bevatten naar externe websites van partners of betrokken organisaties. Netgenoten heeft geen controle over de inhoud van deze externe websites en kan niet verantwoordelijk worden gehouden voor de inhoud daarvan.', 'This website may contain references to external websites of partners or involved organizations. Netgenoten has no control over the content of these external websites and cannot be held responsible for their content.')}</p>
        <p>{t('Alle teksten, beelden en concepten op deze website zijn beschermd door auteursrechten en intellectuele eigendomsrechten. Gebruik of reproductie zonder voorafgaande toestemming is niet toegestaan.', 'All texts, images, and concepts on this website are protected by copyright and intellectual property rights. Use or reproduction without prior permission is not permitted.')}</p>
      </LegalModal>
    </footer>
  );
}
