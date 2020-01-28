/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import BlockText from '../components/BlockText';
import Intro from '../components/Intro';
import PortfolioItems from '../components/PortfolioItems';
import projects from '../data/projects';

class Work extends Component {
  render() {
    return (
      <>
        <Helmet title="Work" />
        <Intro>My Work</Intro>
        {projects.map(item => (
          <PortfolioItems
            title={item.title}
            description={item.description}
            links={item.links}
            github={item.links.github}
            website={item.links.website}
          />
        ))}
        <BlockText
          heading="Latest"
          // description={
          //   <>
          //     <h4>I know my way around:</h4>
          //     <p>Bootstrap, CSS, HTML, Sass</p>
          //     <p>React, GatsbyJS, jQuery</p>
          //     <p>SQL, MongoDB, Firebase</p>
          //     <p>Git, SQL, Node, C#, ASP.Net</p>
          //   </>
          // }
        />
      </>
    );
  }
}

export default Work;
