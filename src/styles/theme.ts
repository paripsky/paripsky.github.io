import { extendTheme } from '@chakra-ui/react';

const availableColorTints = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const tokenToColorMap = {
  primary: 'blue',
  accent: 'teal',
  success: 'green',
  warning: 'orange',
  error: 'red',
  neutral: 'gray',
};

const colors = Object.entries(tokenToColorMap).reduce((acc, [token, color]) => {
  availableColorTints.forEach((tint, index) => {
    acc[`${token}.${tint}`] = {
      default: `${color}.${availableColorTints[availableColorTints.length - 1 - index]}`,
      _dark: `${color}.${tint}`,
    };
  });
  return acc;
}, {} as Record<string, { default: string; _dark: string }>);

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      ...colors,
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
      },
    },
  },
});

export default theme;
