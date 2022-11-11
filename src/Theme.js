//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
//import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#ecca70',
      contrastText: '#351a1a',
      light: '#ffe8ac',
    },
    secondary: {
      main: '#ffc053',
      contrastText: '#351a1a',
    },
    background: {
      default: '#2c2b31',
      paper: '#5b4a34',
    },
    text: {
      primary: '#fff4d9',
    },
    error: {
      main: '#c14b46',
    },
    warning: {
      main: '#cc8a33',
    },
    info: {
      main: '#4470b1',
      contrastText: '#351a1a',
    },
    success: {
      main: '#e8b829',
    },
  },
  typography: {
    fontFamily: "Oswald",
    fontWeightLight: 300,
  },
};

const Theme1 = createTheme(themeOptions);
export default Theme1;