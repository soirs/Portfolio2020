/* eslint-disable react/jsx-props-no-spreading */
import { PropTypes } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Github from '../assets/svg/github.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Mail from '../assets/svg/mail.svg';
// import Dribbble from 'assets/svg/dribbble.svg';
// import Twitter from 'assets/svg/twitter.svg';
// import Instagram from 'assets/svg/instagram.svg';
// import Facebook from 'assets/svg/facebook.svg';
import helmet from '../utils/helmet';
import Footer from './Footer';
import Header from './Header';
import HeaderLink from './Link';
import Logo from './Logo';

// https://github.com/greglobinski/gatsby-starter-hero-blog/blob/master/src/layouts/index.js
class Layout extends React.Component {
  // Define a state object to hold our app's state
  constructor(props) {
    super(props);
    this.state = {
      // Boolean attribute that will allow us to toggle the switch
      // Keep the switch on if the theme is dark
      checked: null,
      /**
       * When a user activates the dark theme we will store the value
       * on localstorage or set default value to light if it is neither dark
       * nor light
       */
      theme: null,
    };
  }

  componentDidMount() {
    this.setState({
      checked: localStorage.getItem('theme') === 'dark',
    });
    this.setState({ theme: localStorage.getItem('theme') });
    // Update the data-theme attribute of our html tag
    const themeSwitch = document.getElementById('themeSwitch');

    const loaded = localStorage.getItem('theme');

    document.body.setAttribute(
      'data-theme',
      loaded ? localStorage.getItem('theme') : 'dark',
    );
    this.initTheme();
  }

  initTheme = () => {
    const darkThemeSelected =
      localStorage.getItem('theme') !== null &&
      localStorage.getItem('theme') === 'dark';

    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  };

  // Class method allowing us to toggle the theme change
  toggleThemeChange = () => {
    const { checked } = this.state;

    // If theme is light then change to dark
    if (checked === false) {
      // Update localstorage
      localStorage.setItem('theme', 'dark');
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value
       */
      // Update the data-theme attribute of our html tag
      document.body.setAttribute('data-theme', localStorage.getItem('theme'));
      // Update our state
      this.setState({
        // Ensure our switch is on if we change to dark theme
        checked: true,
      });
    } else {
      // Update localstorage
      localStorage.setItem('theme', 'default');
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value until the App is mounted and we change
       * the state of the switch so we will need to introduce
       * a React lifecycle called ˝componentDidMount()˝
       */
      // Update the data-theme attribute of our html tag
      document.body.setAttribute('data-theme', localStorage.getItem('theme'));
      // Update our state
      this.setState({
        // Ensure our switch is off if we change to light theme
        checked: false,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { checked } = this.state;

    // let defaultTheme = 'default';
    // let darkTheme = 'dark';
    // let value = !dark ? darkTheme : defaultTheme;
    // const theme = value;

    // const prefersDark =
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = () => {
      const isDarkTheme = !checked ? '💤' : '🔆';

      return <span className="spinning">{isDarkTheme}</span>;
    };

    return (
      <div className="layout">
        <Helmet {...helmet} />

        <Header>
          <HeaderLink name="about" to="/about" />
          <HeaderLink name="work" to="/work" />
          <input
            type="checkbox"
            id="themeSwitch"
            // checked={this.state.checked}
            defaultChecked={checked}
            onChange={() => this.toggleThemeChange()}
          />
        </Header>

        {children}

        <Footer
          className="footer"
          logo={<Logo text="FRS" />}
          social={[
            { icon: <Github />, to: 'https://github.com/soirs/' },
            {
              icon: <Linkedin />,
              to: 'https://www.linkedin.com/in/frankrichardsemakula',
            },
            {
              icon: <Mail />,
              to: 'mailto:Hello@frankrs.dk?subject=Hello%20Frank!',
            },
            { icon: isDark(), onClick: this.toggleThemeChange },
          ]}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.isRequired,
};

export default Layout;
