import React from 'react';
import { Slide } from 'react-slideshow-image';
import dashboard from '../images/dashboard.png';
import ticketlog from '../images/ticketlog.png';
import board from '../images/board.png';

const LoggerCard = () => {
  const slideImages = [dashboard, ticketlog, board];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
  };
  return (
    <div>
      <div className="slide-container logger">
        <Slide {...properties}>
          <div className="each-slide">
            <div
              className="logger-image"
              style={{
                backgroundImage: `url(${slideImages[0]})`,
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="logger-image"
              style={{ backgroundImage: `url(${slideImages[1]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="logger-image"
              style={{ backgroundImage: `url(${slideImages[2]})` }}
            ></div>
          </div>
        </Slide>
      </div>
      {/* <img
        className="align-top logger"
        style={{ maxWidth: '500px' }}
        src={require('../images/dashboard.png')}
        alt="Logger"
      /> */}
      <div className="sub-title">Scrum Project Management</div>
      <a href="http://www.logger.phillipferreira.com">
        <h3 className="project-title">Logger</h3>
      </a>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
};

export default LoggerCard;
