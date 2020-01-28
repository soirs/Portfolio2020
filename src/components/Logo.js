import { PropTypes } from 'prop-types';
import React from 'react';

const Logo = ({ text }) => (
  <p data-text={text} className="logo__style">
    {text || 'frank'}
  </p>
);

Logo.propTypes = {
  text: PropTypes.isRequired,
};

export default Logo;
