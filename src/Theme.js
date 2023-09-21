//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
//import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

const themeColors = {
  //type: 'dark',
  primary: {
    main: "#E39F17",
    light: "#FFDA91",
    dark: "#967533",
    //contrastText: '#351a1a',
  },
  secondary: {
    main: "#003C96",
    light:"#3479E3",
    dark: "#002357",
    //contrastText: '#351a1a',
  },
  tertiary: {
    main: "#252525",
    //contrastText: '#351a1a',
  },
  text: {
    primary: '#fff4d9',
  },
  error: {
    main: "#ff6361",
  },
  warning: {
    main: "#bc5090",
  },
  info: {
    main: "#2c4875",
    //contrastText: '#351a1a',
  },
  success: {
    main: "#ffa600",
  },
}

const themeOptions = {
  palette: { ...themeColors, tonalOffset: 0.3 },
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
            borderRadius: '16px',
            padding: '8px',
            '&:hover': {
              backgroundColor: themeColors.primary.main,
              backgroundBlendMode: 'soft-light',
              //border: '6px solid',
              boxShadow: `0 0 10px 10px ${ themeColors.primary.light } inset`,
              // borderColor: themeColors.primary.light,
            }
          },
        },
        {
          props: { variant: 'page' },
          style: {
            backgroundColor: themeColors.secondary.dark,
          }
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: 'projectTitle' },
          style: {
            borderRadius: '8px',
            backgroundColor: themeColors.primary.main,
            color: 'black',
          }
        },
        {
          props: { variant: 'projectTitleHover' },
          style: {
            borderRadius: '8px',
            backgroundColor: themeColors.secondary.main,
            color: themeColors.secondary.contrastText,
          }
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
    MuiChip: {
      variants: [
        {
          props: {variant: 'techListItem'},
          style: {
            display: 'inline-flex',
            color: themeColors.secondary.contrastText, 
            backgroundColor: themeColors.secondary.light,
            paddingLeft: '4px',
            paddingRight: '4px',
            justifyContent:'center',
          },
        },
      ]
    },
    MuiSvgIcon: {
      style:{
        height:'1em',
      },
    },

  },
};

const Theme1 = createTheme(themeOptions);
export default Theme1;