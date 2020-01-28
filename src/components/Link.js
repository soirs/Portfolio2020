import { PropTypes } from 'prop-types';
import React from 'react';
import LinkInternal from './LinkInternal';

const Link = ({ name, to, icon }) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const content = () => (
    <>
      {icon && React.cloneElement(icon, { className: 'link' })}
      {name}
    </>
  );

  if (isExternal) {
    return (
      <a className="link" target="_blank" rel="noopener noreferrer" href={to}>
        {content()}
      </a>
    );
  }

  return (
    <LinkInternal className="link" to={to}>
      {content()}
    </LinkInternal>
  );
};

Link.propTypes = {
  icon: PropTypes.isRequired,
  name: PropTypes.isRequired,
  to: PropTypes.isRequired,
};
export default Link;
