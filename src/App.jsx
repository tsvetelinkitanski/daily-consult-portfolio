import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [privacyModal, setPrivacyModal] = useState({ isOpen: false, type: 'privacy' });

  const openPrivacyModal = (type) => {
    setPrivacyModal({ isOpen: true, type });
  };

  const closePrivacyModal = () => {
    setPrivacyModal({ ...privacyModal, isOpen: false });
  };

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-animate').forEach(el => {
      observer.observe(el);
    });

    // Navbar background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar openPrivacyModal={openPrivacyModal} />
      <Hero />
      <Stats />
      <About />
      <Services />
      <HowWeWork />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer openPrivacyModal={openPrivacyModal} />
      <CookieBanner onOpenPrivacy={openPrivacyModal} />
      <PrivacyModal
        isOpen={privacyModal.isOpen}
        onClose={closePrivacyModal}
        type={privacyModal.type}
      />
    </div>
  );
}

export default App;
