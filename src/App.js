import './App.css';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import News from './components/News';
import Footer from './common/Footer';

function App() {
  return (
    <>
        <Hero/>
        <OurStory/>
        <About/>
        <Roadmap/>
        <Team/>
        <Faq/>
        <News/>
        <Footer/>
    </>
  );
}

export default App;
