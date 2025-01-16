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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
