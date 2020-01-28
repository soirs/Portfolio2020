import React from 'react';
import Link from './LinkInternal';

export const Button ({ to, children, className, disabled, ...rest }) => {
  const passProps = { ...rest };
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  passProps.className = button, className, { disabled };

  if (isExternal) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to} {...passProps}>
        {children}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link to={to || '#'} {...passProps}>
        {children}
      </Link>
    );
  }

  passProps.disabled = disabled;

  return <button {...passProps}>{children}</button>;
};
