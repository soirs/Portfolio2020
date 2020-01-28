import { PropTypes } from 'prop-types';
import React from 'react';

const Container = ({ children }) => (
  <section className="container">{children}</section>
);

Container.propTypes = {
  children: PropTypes.isRequired,
};
export default Container;
