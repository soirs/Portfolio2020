/* eslint-disable no-console */
import React from 'react';
import Helmet from 'react-helmet';
import BlockText from '../components/BlockText';
import Highlight from '../components/Highlight';
import Intro from '../components/Intro';

class IndexPage extends React.Component {
    state = {
      hourOfDay: 'day,',
      isLoading: true,
    };

  componentDidMount() {
    const currentHour = new Date().getHours();

    this.setTimeOfDay(currentHour);
    this.setState({ isLoading: false });
  }

  setTimeOfDay(currentHour) {
    let time = 'day';

    if (currentHour < 4 || currentHour > 21) {
      time = 'night';
    } else if (currentHour < 12) {
      time = 'morning';
    } else if (currentHour < 18) {
      time = 'afternoon';
    } else if (currentHour < 21) {
      time = 'evening';
    }

    console.log('Time is: ', currentHour);
    this.setState({ hourOfDay: time });
  }

  render() {
    const { hourOfDay, isLoading } = this.state;

    return (
      <>
        <Helmet title="Frank Richard Semakula" />
        <Intro>
          {isLoading ? (
            <h3>Just a second...</h3>
          ) : (
            <span>
              Hi !,
              <br />
              Lovely <Highlight>{hourOfDay}</Highlight>
              , I´m Frank.
              <br />
              I´m a frontend developer living in Aarhus, Denmark.
              <br />
              I enjoy shaping experiences.
              <br />
              This is my <span className="intro__playground">playground.</span>
            </span>
          )}
        </Intro>
        <BlockText
        // heading="Who is this Frank?"
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
        {console.log(
          '%c|· Hire@FrankRS.dk ·|',
          `font-weight: bold;
            font-size: 24px;
            color: red;
            background-color: white;`
        )}
      </>
    );
  }
}

export default IndexPage;
