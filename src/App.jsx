import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

// Lazy load below-the-fold components for better performance
const TrustSection = lazy(() => import('./components/TrustSection'));
const Services = lazy(() => import('./components/Services'));
const Plans = lazy(() => import('./components/Plans'));
const Technologies = lazy(() => import('./components/Technologies'));
const Founder = lazy(() => import('./components/Founder'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="section-padding bg-dark-section" style={{ minHeight: '50vh' }}></div>}>
          <TrustSection />
          <Services />
          <Plans />
          <Technologies />
          <Founder />
          <Portfolio />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}

export default App;
