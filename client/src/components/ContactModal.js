import React from 'react';
import { Row, Col, Button, Modal } from 'shards-react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactModal = ({ open, toggle }) => {
  return (
    <Modal open={open} toggle={toggle} size="md">
      <Row form className="mx-4">
        <Col md="12" className="my-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="1x"
            color="#eceded"
            className=""
          />
          &nbsp;&nbsp;phillipjferreira@gmail.com
          <br />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="1x"
            color="#eceded"
            className=""
          />
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/phillipjferreira"
            className="no-style"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/phillipjferreira
          </a>
          <br />
          <FontAwesomeIcon
            icon={faGithub}
            size="1x"
            color="#eceded"
            className=""
          />
          &nbsp;&nbsp;
          <a
            href="https://www.github.com/phillipjferreira/logger"
            className="no-style"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/phillipjferreira
          </a>
        </Col>
        <Col md="12" className="form-group button-view">
          <Button onClick={toggle} className="nav-button light m-0">
            Close
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default ContactModal;
