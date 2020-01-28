import { PropTypes } from 'prop-types';
import React from 'react';
import Container from './Container';

const Segment = props => {
  const { children, container } = props;
  const content = container ? <Container>{children}</Container> : children;

  return <section className="segment">{content}</section>;
};

Segment.propTypes = {
  children: PropTypes.isRequired,
  container: PropTypes.isRequired,
};
export default Segment;
