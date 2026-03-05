import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import NetworkGrid from './components/NetworkGrid';
import Technology from './components/Technology';
import ProjectDetails from './components/ProjectDetails';
import Partners from './components/Partners';
import Process from './components/Process';
import Stats from './components/Stats';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <NetworkGrid />
        <Technology />
        <ProjectDetails />
        <Process />
        <Stats />
        <Location />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
