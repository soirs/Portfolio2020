const projects = [
  // Portfolip
  {
    className: `portfolio`,
    description: `This very website is made in GatsbyJS. It is deployed on Netlify for quick deployment. It uses Google Analytics, FontAwesome and is my primary playground for when I want to try new things.`,
    links: {
      website: `https://frankrs.dk`,
      github: `https://github.com/soirs/Portfolio`,
    },
    slug: `portfolio`,
    title: `This portfolio`,
    colors: {
      background: `var(--colorBlack)`,
      light: true,
    },
  },
  // FrankOverflow
  {
    className: `frankoverflow`,
    description: `Q&A app made with the MERN stack; MongoDB, Express, React, Node. Hosted on Heroku with MongoDB Atlas as Database. Still a work in progress`,
    links: {
      website: `https://franksemakula-frameworks.herokuapp.com/`,
      github: `https://github.com/soirs/sweetpumpkins`,
    },
    slug: `frankoverflow`,
    title: `Q&A app(Work in progress)`,
    colors: {
      background: `var(--colorBlack)`,
      light: true,
    },
  },
  // MovieDatabase
  {
    className: `movie`,
    description: `Movie Database lookup based on TMdB's API. Based on a tutorial`,
    links: {
      website: `https://frankrs-moviedb.netlify.com/`,
      github: `https://github.com/soirs/sweetpumpkins`,
    },
    slug: `movie`,
    title: `Movie Database`,
    colors: {
      background: `var(--colorBlack)`,
      light: true,
    },
  },
  // QUOTE
  {
    className: `quote`,
    description: `Quote generator that uses CodeOnDesign's API to display quotes on design`,
    links: {
      website: `https://frankrs-quote-generator.netlify.com/`,
      github: `https://github.com/soirs/quote-generator`,
    },
    slug: `quote`,
    title: `Design Quote Generator`,
    colors: {
      background: `var(--colorWhite)`,
      light: true,
    },
  },
  // WIKIPEDIA SEARCHER
  {
    className: `wiki`,
    description: `Wikipedia searcher that finds articles that matches the input`,
    links: {
      website: `https://frankrs-wikipedia-searcher.netlify.com/`,
      github: `https://github.com/soirs/wikipedia-searcher`,
    },
    slug: `wiki`,
    title: `Wikipedia Searcher`,
    colors: {
      background: `var(--colorBlack)`,
      light: false,
    },
  },
];

export default projects;
