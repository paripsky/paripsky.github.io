import { ColorMode } from '@chakra-ui/react';
import {
  SiAerospike,
  SiAmazonaws,
  SiAngularjs,
  SiAntdesign,
  SiChai,
  SiChakraui,
  SiCss3,
  SiDocker,
  SiElectron,
  SiEslint,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJest,
  SiJss,
  SiMaterialui,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNodemon,
  SiNpm,
  SiPhp,
  SiPostcss,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiSass,
  SiSinglestore,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';

const skills = (theme: ColorMode) => [
  {
    hoverColor: '#61DAFB',
    icon: SiReact,
    'aria-label': 'React',
    href: 'https://reactjs.org/',
  },
  {
    hoverColor: '#764ABC',
    icon: SiRedux,
    'aria-label': 'Redux',
    href: 'https://redux.js.org/',
  },
  {
    hoverColor: '#4FC08D',
    icon: SiVuedotjs,
    'aria-label': 'Vue',
    href: 'https://vuejs.org/',
  },
  {
    hoverColor: '#007fff',
    icon: SiMaterialui,
    'aria-label': 'Material UI',
    href: 'https://material-ui.com/',
  },
  {
    hoverColor: '#0170FE',
    icon: SiAntdesign,
    'aria-label': 'Ant Design',
    href: 'https://ant.design/',
  },
  {
    hoverColor: '#3178C6',
    icon: SiTypescript,
    'aria-label': 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    hoverColor: '#06B6D4',
    icon: SiTailwindcss,
    'aria-label': 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    hoverColor: '#DD3A0A',
    icon: SiPostcss,
    'aria-label': 'PostCSS',
    href: 'https://postcss.org/',
  },
  {
    hoverColor: '#1572B6',
    icon: SiCss3,
    'aria-label': 'CSS3',
    href: 'https://www.w3.org/Style/CSS/',
  },
  {
    hoverColor: '#E34F26',
    icon: SiHtml5,
    'aria-label': 'HTML5',
    href: 'https://www.w3.org/MarkUp/',
  },
  {
    hoverColor: '#E10098',
    icon: SiGraphql,
    'aria-label': 'GraphQL',
    href: 'https://graphql.org/',
  },
  {
    hoverColor: '#F7DF1E',
    icon: SiJavascript,
    'aria-label': 'JavaScript',
    href: 'https://www.javascript.com/',
  },
  {
    hoverColor: '#C21325',
    icon: SiJest,
    'aria-label': 'Jest',
    href: 'https://jestjs.io/',
  },
  {
    hoverColor: '#76D04B',
    icon: SiNodemon,
    'aria-label': 'Nodemon',
    href: 'https://nodemon.io/',
  },
  {
    hoverColor: '#CB3837',
    icon: SiNpm,
    'aria-label': 'NPM',
    href: 'https://www.npmjs.com/',
  },
  {
    hoverColor: '#339933',
    icon: SiNodedotjs,
    'aria-label': 'Node.js',
    href: 'https://nodejs.org/',
  },
  {
    hoverColor: '#40B5A4',
    icon: SiPuppeteer,
    'aria-label': 'Puppeteer',
    href: 'https://puppeteer.dev/',
  },
  {
    hoverColor: '#4479A1',
    icon: SiMysql,
    'aria-label': 'MySQL',
    href: 'https://www.mysql.com/',
  },
  {
    hoverColor: '#8DD6F9',
    icon: SiWebpack,
    'aria-label': 'Webpack',
    href: 'https://webpack.js.org/',
  },
  {
    hoverColor: '#646CFF',
    icon: SiVite,
    'aria-label': 'Vite',
    href: 'https://vite.netlify.com/',
  },
  {
    hoverColor: '#f8981d',
    icon: SiJava,
    'aria-label': 'Java',
    href: 'https://www.java.com/',
  },
  {
    hoverColor: '#777BB4',
    icon: SiPhp,
    'aria-label': 'PHP',
    href: 'https://www.php.net/',
  },
  {
    hoverColor: '#ffd344',
    icon: SiPython,
    'aria-label': 'Python',
    href: 'https://www.python.org/',
  },
  {
    hoverColor: '#E23237',
    icon: SiAngularjs,
    'aria-label': 'Angular',
    href: 'https://angularjs.org/',
  },
  {
    hoverColor: '#A30701',
    icon: SiChai,
    'aria-label': 'Chai',
    href: 'https://chaijs.com/',
  },
  {
    hoverColor: '#8D6748',
    icon: SiMocha,
    'aria-label': 'Mocha',
    href: 'https://mochajs.org/',
  },
  {
    hoverColor: theme === 'dark' ? 'white' : 'black',
    icon: SiNextdotjs,
    'aria-label': 'Next.js',
    href: 'https://nextjs.org/',
  },
  {
    hoverColor: '#47848F',
    icon: SiElectron,
    'aria-label': 'Electron',
    href: 'https://electronjs.org/',
  },
  {
    hoverColor: '#DC382D',
    icon: SiRedis,
    'aria-label': 'Redis',
    href: 'https://redis.io/',
  },
  {
    hoverColor: '#FF4785',
    icon: SiStorybook,
    'aria-label': 'Storybook',
    href: 'https://storybook.js.org/',
  },
  {
    hoverColor: '#47A248',
    icon: SiMongodb,
    'aria-label': 'MongoDB',
    href: 'https://www.mongodb.com/',
  },
  {
    hoverColor: '#319795',
    icon: SiChakraui,
    'aria-label': 'Chakra UI',
    href: 'https://chakra-ui.com/',
  },
  {
    hoverColor: '#4B32C3',
    icon: SiEslint,
    'aria-label': 'ESLint',
    href: 'https://eslint.org/',
  },
  {
    hoverColor: '#DB7093',
    icon: SiStyledcomponents,
    'aria-label': 'Styled Components',
    href: 'https://styled-components.com/',
  },
  {
    hoverColor: '#F9A828',
    icon: SiAmazonaws,
    'aria-label': 'Amazon AWS',
    href: 'https://aws.amazon.com/',
  },
  {
    hoverColor: '#2496ED',
    icon: SiDocker,
    'aria-label': 'Docker',
    href: 'https://www.docker.com/',
  },
  {
    hoverColor: '#CC6699',
    icon: SiSass,
    'aria-label': 'Sass',
    href: 'https://sass-lang.com/',
  },
  {
    hoverColor: '#CA4245',
    icon: SiReactrouter,
    'aria-label': 'React Router',
    href: 'https://reacttraining.com/react-router/',
  },
  {
    hoverColor: '#2088FF',
    icon: SiGithubactions,
    'aria-label': 'GitHub Actions',
    href: 'https://github.com/features/actions',
  },
  {
    hoverColor: '#C41E25',
    icon: SiAerospike,
    'aria-label': 'Aerospike',
    href: 'https://www.aerospike.com/',
  },
  {
    hoverColor: '#AA00FF',
    icon: SiSinglestore,
    'aria-label': 'Single Store',
    href: 'https://www.singlestore.com/',
  },
  {
    hoverColor: '#F7DF1E',
    icon: SiJss,
    'aria-label': 'JSS',
    href: 'https://cssinjs.org/',
  },
];

export default skills;
