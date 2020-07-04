import React from 'react';
import LoggerCard from '../components/LoggerCard';

const Landing = () => {
  return (
    <div>
      {/* <a href="http://www.logger.phillipferreira.com">View Logger</a> */}
      <h1 className="title">
        Phillip Ferreira <div className="line" /> Software
        <span className="title-span"> Engineer</span>
      </h1>
      <LoggerCard />
    </div>
  );
};

export default Landing;
