import './App.css';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import AboutUs from './components/AboutUs';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './common/Footer';
import Faq from './components/Faq';
import News from './components/News';
import Preloader from './common/Preloader';
import BackToTop from './common/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: false,
        offset: 100,
      });
    }, []);
  return (
    <div className='overflow-hidden'>
        <Preloader/>
        <Hero/>
        <OurStory/>
        <AboutUs/>
        <Roadmap/>
         <Team />
        <Faq />
        <News />
       <Footer />
       <BackToTop/>
    </div>
  );
}

export default App;
