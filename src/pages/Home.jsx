import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BioSection from '../components/BioSection';
import Filmography from '../components/Filmography';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <BioSection />
      <Filmography />
      <Gallery />
      <Footer />
     
    </div>
  );
};

export default Home;