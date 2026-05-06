import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Webinar from './components/Webinar';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Dupoin from './components/Dupoin';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bg-[#060b13] text-white min-h-screen selection:bg-[#00d1ff]/30 scroll-smooth">
      {/* Navbar gets the trigger for the 'Join' or 'Contact' link */}
      <Navbar onAction={toggleModal} />
      
      <main>
        <Hero onAction={toggleModal} />
        <About onAction={toggleModal} /> {/* Added trigger here */}
        <Webinar onAction={toggleModal} />
        <Testimonials onAction={toggleModal} />
        <FAQ onAction={toggleModal} />
        <Dupoin onAction={toggleModal} />
      </main>

      <Footer onAction={toggleModal} />

      {/* The Central Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;