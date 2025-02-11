import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowltWorks';
import FeaturedProducts from './components/FeaturedProducts';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;