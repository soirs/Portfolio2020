import favicon from '../assets/images/favicon.png';
import share from '../assets/images/share.png';

const title = 'Frank Richard Semakula';
const description = 'Web developer with flair for frontend.';

const typekit = 'https://use.typekit.net/qcn8ytc.css';
// eslint-disable-next-line no-unused-vars
const helmet = {
  title,
  titleTemplate: '%s - Frontend Developer',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: '@happyhoima' },
    { name: 'twitter:creator', content: '@happyhoima' },
    { name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'stylesheet', href: typekit },
  ],
};
export default helmet;
