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
    <section>
      <Parallax type="services"/>
    </section>
    <section id="Skills">
      <Service/>
    </section>
    <section>
      <Parallax type="experience"/>
    </section>
    <div id="Work">
      <Portfolio />
    </div>
    <section id="Contacts">
      <Contact />
    </section>
  </div>;
};

export default App;
