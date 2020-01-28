import { PropTypes } from 'prop-types';
import React from 'react';
import Container from './Container';

const Footer = ({ logo, social }) => (
  <div className="footer">
    <Container>
      <div className="footer__content">
        <span className="footer__logo">{logo}</span>
        <ul className="footer__list">
          {social.map((item, index) => (
            <li key={index} className="footer__item link">
              <a
                href={item.to}
                onClick={item.onClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);

Footer.propTypes = {
  logo: PropTypes.isRequired,
  social: PropTypes.isRequired,
};
export default Footer;
