import { PropTypes } from 'prop-types';
import React from 'react';
import Github from '../assets/svg/github.svg';
import AnchorLink from '../assets/svg/link.svg';
import Container from './Container';
import Row from './Row';

const PortfolioItems = ({
  title,
  description,
  links,
  website,
  github,
  lastitem,
}) => (
  <Container>
    <div className="portfolio">
      <Row>
        <div className="portfolio__col">
          <h3 className="portfolio__title">{title}</h3>
          <p className="portfolio__description">{description}</p>

          <a href={website} target="_blank" rel="noopener noreferrer">
            Github
            <Github className="portfolio__link link" />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            Demo
            <AnchorLink className="portfolio__link link" />
          </a>
          {lastitem && <div className="last-item">{lastitem}</div>}
        </div>
      </Row>
    </div>
  </Container>
);

PortfolioItems.propTypes = {
  description: PropTypes.isRequired,
  title: PropTypes.isRequired,
  website: PropTypes.isRequired,
  github: PropTypes.isRequired,
};
export default PortfolioItems;
