//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
//import { deepmerge } from '@mui/utils';
import { TurnedIn } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const themeColors = {
  //type: 'dark',
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
}

const themeOptions = {
  palette: themeColors,
  typography: {
    fontFamily: "Oswald",
    fontWeightLight: 300,
    projectTitle: {
      backgroundColor: 'transparent',
      color: themeColors.text.primary,
      noWrap: true,
    },
    projectDescr: {
      backgroundColor: 'transparent',
      color: themeColors.primary.contrastText,
      noWrap: false,
    },
  },
  components: {
    MuiBox: {
      variants: [
        {
          props: {variant: 'projectTitle'},
          style: {
            display: 'block',
          },
        },
        {
          props: {variant: 'projectDescr'},
          style: {
            display: 'block',
          },
        },
      ]
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'project' },
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: themeColors.primary.main,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'normal',
            //textAlign: 'left',
            border: '3px solid',
            borderColor: themeColors.primary.light,
            padding: '5px',
            '&:hover': {
              backgroundColor: themeColors.secondary.main,
              backgroundBlendMode: 'soft-light',
              border: '6px solid',
              borderColor: themeColors.primary.light,
              padding: '2px',
            }
          },
        },
      ],
    },
    MuiModal: {
      variants: [
        {
          props: {variant: 'msgSent'},
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid primary.main',
            boxShadow: 24,
            p: 4,
          },
        },
        {
          props: {variant: 'msgError'},
          style: {
            display: 'block',
          },
        },
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'nav'},
          style: {
            my: 1,
            color: themeColors.primary.contrastText, 
            display: 'block',
            backgroundColor: themeColors.primary.main,
            border: 'none',
            '&:hover': {
              backgroundColor: themeColors.secondary.main,
              border: 'none',
            }
          },
        },
      ],
    },
    
  },
};

const Theme1 = createTheme(themeOptions);
export default Theme1;