import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/phillipjferreira/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          color="#eceded"
          className="social-icons"
        />
      </a>
      <a
        href="https://github.com/phillipjferreira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          color="#eceded"
          className="social-icons"
        />
      </a>
    </div>
  );
};

export default Footer;
