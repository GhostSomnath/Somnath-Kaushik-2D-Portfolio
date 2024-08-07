import React, { useState, useEffect } from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';
import VisitWebsitePopup from './components/VisitWebsitePopup'; // Import your new popup component

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showVisitWebsitePopup, setShowVisitWebsitePopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setTimeout(() => {
          setShowVisitWebsitePopup(true);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseVisitWebsitePopup = () => {
    setShowVisitWebsitePopup(false);
  };

  return (
    <div className='overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className='fixed top-0 w-full h-full -z-10'>
        <div className="relative w-full h-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div> 
      </div>
           
      <div className="container px-8 mx-auto ">
        <BackgroundMusic />
        {showPopup && <WelcomePopup onClose={handleClosePopup} />}
        {showVisitWebsitePopup && <VisitWebsitePopup onClose={handleCloseVisitWebsitePopup} />}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
