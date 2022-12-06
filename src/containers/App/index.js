import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Home from '../Home';
import Contact from '../Contact';
import Projects from '../Projects';
import HowWork from '../HowWork';

const App = () => {
  return (
    <>
      <Navbar />

      <main className='darkTheme'>
        <section className='contentWrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/how' element={<HowWork />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
