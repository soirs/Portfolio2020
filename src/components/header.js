// import { PropTypes } from 'prop-types';
import React from 'react';
import ProfileImage from '../assets/images/FrankSemakula2020.png';
import Link from './LinkInternal';
import Logo from './Logo';

const Header = ({ children }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__content">
        <img className="profile-image" src={ProfileImage} alt="" />
        <Link to="/" className="header__logo">
          <Logo text="frank.semakula" />
        </Link>
        <div className="header__navigation">{children}</div>
      </div>
    </div>
  </header>
);

// Header.propTypes = {
//   children: PropTypes.isRequired,
// };
export default Header;
