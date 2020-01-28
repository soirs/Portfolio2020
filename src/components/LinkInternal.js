/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import React from 'react';

const LinkInternal = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);

LinkInternal.propTypes = {
  children: PropTypes.isRequired,
};
export default LinkInternal;
