import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Vision from './components/Vision';
import NetworkGrid from './components/NetworkGrid';
import Technology from './components/Technology';
import EnergySystemVisualization from './components/EnergySystemVisualization';
import GridChainVisualization from './components/GridChainVisualization';
import TechnicalConcept from './components/TechnicalConcept';
import ProjectDetails from './components/ProjectDetails';
import Partners from './components/Partners';
import Process from './components/Process';
import Stats from './components/Stats';
import Location from './components/Location';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main>
          <Hero />
          <VideoSection />
          <About />
          <Vision />
          <NetworkGrid />
          <Technology />
          <EnergySystemVisualization />
          <GridChainVisualization />
          <TechnicalConcept />
          <ProjectDetails />
          <Process />
          <Stats />
          <Location />
          <Partners />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
