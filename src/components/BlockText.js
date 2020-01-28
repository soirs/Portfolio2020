import { PropTypes } from 'prop-types';
import React from 'react';
import Container from './Container';
import Row from './Row';

const BlockText = ({ heading, description, lastitem }) => (
  <Container>
    <div className="block">
      <Row>
        <div className="block__col">
          <h3 className="block__heading">{heading}</h3>
          <p className="block__description">{description}</p>
          {lastitem && <div className="last-item">{lastitem}</div>}
        </div>
      </Row>
    </div>
  </Container>
);

BlockText.propTypes = {
  description: PropTypes.isRequired,
  heading: PropTypes.isRequired,
};
export default BlockText;
