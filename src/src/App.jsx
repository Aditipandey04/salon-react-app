import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './bootstrap.css';
import './animate.css';
import './animate1.css';
import './App.css';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Team from './components/Team.jsx';
import Testimonial from './components/Testimonial.jsx';
import T404 from './components/T404.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CopyRight from './components/CopyRight.jsx';

function App(){ 
  return (
    <BrowserRouter>

      <Nav />

      <Routes>
      
        <Route path="/" element={<Hero />} />

        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
		
        <Route path="*" element={<T404 />} />
		
      </Routes>

      <Footer />
      <CopyRight />

    </BrowserRouter>
  );
}

export default App;