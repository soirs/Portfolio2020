import React from 'react';
import Helmet from 'react-helmet';
import BlockText from '../components/BlockText';
import Intro from '../components/Intro';

const About = () => (
  <>
    <Helmet title="About" />
    <Intro>Hello World!</Intro>
    <BlockText
      heading="Who is this Frank?"
      description={
        <span>
          I am currently looking for my next position! If you have a role that
          may suit, feel free to contact me
        </span>
      }
    />
    <BlockText
      heading="Education"
      lastitem
      description={
        <>
          <span>
            Bachelor in Webdevelopment
            <br />
            <sup>─── 2018/2020 @ Business Academy Aarhus</sup>
          </span>
          <br />
          <span>
            Webdevelopment certificate
            <br />
            <sup>─── 2016/2017 @ Viden Djurs</sup>
          </span>
          <br />
          <span>
            AP degree in Marketing Management <small>&</small> Innovation
            <br />
            <sup>─── 2013/2015 @ Business Academy Aarhus</sup>
          </span>
        </>
      }
    />
  </>
);

export default About;
