import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Services = lazy(() => import('./components/Services'));
const Benefits = lazy(() => import('./components/Benefits'));
const HowIWork = lazy(() => import('./components/HowIWork'));
const Projects = lazy(() => import('./components/Projects'));
const FAQ = lazy(() => import('./components/FAQ'));
const CtaFinal = lazy(() => import('./components/CtaFinal'));

function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-gray-100 font-sans selection:bg-brand-neon/30 cursor-default">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Benefits />
          <HowIWork />
          <Projects />
          <FAQ />
          <CtaFinal />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
