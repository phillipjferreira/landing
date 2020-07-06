import React from 'react';
import { Button } from 'shards-react';
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
            <h5 className="slide-caption">Logger: Dashboard</h5>
          </div>
          <div className="each-slide">
            <div
              className="logger-image"
              style={{ backgroundImage: `url(${slideImages[1]})` }}
            ></div>
            <h5 className="slide-caption">Logger: Ticket Log</h5>
          </div>
          <div className="each-slide">
            <div
              className="logger-image"
              style={{ backgroundImage: `url(${slideImages[2]})` }}
            ></div>
            <h5 className="slide-caption">Logger: Sprint Board</h5>
          </div>
        </Slide>
        <div className="slide-button">
          <Button
            href="https://www.logger.phillipferreira.com"
            target="_blank"
            className="nav-button mb-2"
          >
            View App
          </Button>
        </div>
      </div>
      <div className="sub-title">Scrum Project Management</div>
      <h3 className="project-title">Logger</h3>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
};

export default LoggerCard;
