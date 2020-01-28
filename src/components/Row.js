import { PropTypes } from 'prop-types';
import React from 'react';

const Row = ({ children }) => <div className="row">{children}</div>;

Row.propTypes = {
  children: PropTypes.isRequired,
};
export default Row;
