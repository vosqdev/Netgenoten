import { useState, useEffect } from 'react';
import { Menu, X, Share2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['home', 'about', 'visie', 'technology', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t('Home', 'Home'), href: '#home', id: 'home' },
    { name: t('Over ons', 'About us'), href: '#about', id: 'about' },
    { name: t('Visie', 'Vision'), href: '#visie', id: 'visie' },
    { name: t('Technologie', 'Technology'), href: '#technology', id: 'technology' },
    { name: t('Projecten', 'Projects'), href: '#projects', id: 'projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <Share2 className={`w-10 h-10 ${scrolled ? 'text-teal-600' : 'text-white'} transition-colors duration-300`} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'} transition-colors duration-300`}>
            netgenoten
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === link.id
                  ? 'text-teal-600'
                  : scrolled
                  ? 'text-slate-600 hover:text-teal-500'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              scrolled
                ? 'bg-teal-600 text-white hover:bg-teal-700'
                : 'bg-white text-teal-900 hover:bg-white/90'
            }`}
          >
            Contact
          </a>
          <button
            onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/90 hover:text-white'
            }`}
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/90 hover:text-white'
            }`}
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    activeSection === link.id ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-teal-600 text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-teal-700"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
