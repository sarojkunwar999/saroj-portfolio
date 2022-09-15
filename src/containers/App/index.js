import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbbar from '../../components/Navbbar';
import Footer from '../../components/Footer';

import Home from '../Home';

const App = () => {
  return (
    <>
      {/* <Navbar/> */}

      <main>
        <section className='contentWrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
