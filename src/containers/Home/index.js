import React from 'react';
import HeroSection from '../../components/HeroSection';
import Logos from '../../components/Logos';
import MyWorks from '../../components/MyWorks';
import Skills from '../../components/Skills';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <MyWorks />

      <Logos />
    </>
  );
};

export default Home;
