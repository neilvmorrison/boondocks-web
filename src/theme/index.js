import { indigo, amber } from './colors';
import Color from 'color';

const primary = Color(indigo);
const secondary = Color(amber);

const defaultTheme = {
  palette: {
    primary: {
      light: primary.lighten(0.15).hex(),
      main: primary.hex(),
      dark: primary.darken(0.15).hex(),
      contrastText: primary.luminosity() < 0.3 ? '#fff' : 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      light: secondary.lighten(0.15).hex(),
      main: secondary.hex(),
      dark: secondary.darken(0.15).hex(),
      contrastText:
        secondary.luminosity() < 0.3 ? '#fff' : 'rgba(0, 0, 0, 0.87)',
    },
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  },
  typography: {
    color: 'rgba(0, 0, 0, 0.87)',
    h1: {
      margin: 0,
      color: primary.hex(),
      fontSize: '2rem',
    },
    h2: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.75)',
      fontSize: '1.5rem',
    },
    h3: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '1.25rem',
    },
    h4: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '1rem',
    },
    h5: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '0.85rem',
    },
    h6: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '0.6rem',
    },
    p: {
      margin: 0,
      lineHeight: '1.5rem',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.87rem',
    },
  },
  spacing: (index) => 8 * index,
  shape: {
    radius: 4,
  },
  shadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    up: (key) =>
      `@media (min-width: ${defaultTheme.breakpoints.values[key]}px)`,
  },
  transition: 'all 0.2s ease-in-out',
};

export default defaultTheme;
