import React from 'react';
import LoggerCard from '../components/LoggerCard';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <h1 className="title px-3">
        Phillip Ferreira <div className="line" /> Software
        <span className="title-span"> Engineer</span>
      </h1>
      <LoggerCard />
      <Footer />
    </div>
  );
};

export default Landing;
