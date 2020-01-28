import { PropTypes } from 'prop-types';
import React from 'react';
import Container from './Container';
import Row from './Row';

const Intro = ({ children }) => (
  <Container>
    <div className="intro">
      <Row>
        <div className="intro__col">
          <p className="intro__looking">Currently Looking</p>
          <p className="intro__text">{children}</p>
        </div>
      </Row>
    </div>
  </Container>
);

Intro.propTypes = {
  children: PropTypes.isRequired,
};
export default Intro;
