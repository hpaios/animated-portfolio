import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';

import './app.scss'

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Service/>
    </section>
    <section id="Portfoli">
      <Parallax type="portfolio"/>
    </section>
    <div id="Portfolio">
      <Portfolio />
    </div>
    <section id="Contacts">
      <Contact />
    </section>
  </div>;
};

export default App;
