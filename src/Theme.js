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
            padding: '10px',
            boxShadow: `0 0 8px 4px ${ themeColors.secondary.light } inset`,
            '&:hover': {
              backgroundColor: themeColors.primary.light,
              backgroundBlendMode: 'overlay',
              //border: '6px solid',
              boxShadow: `0 0 12px 12px ${ themeColors.primary.light } inset`,
              // borderColor: themeColors.primary.light,
            }
          },
        },
        {
          props: { variant: 'page' },
          style: {
            borderRadius: '12px',
            backgroundColor: themeColors.secondary.dark,
          }
        },
      ],
    },
    MuiList: {
      defaultProps:{
        dense: true,
        style: {
          backgroundColor: themeColors.primary.dark,
          color: 'black',
          padding: '0px',
          
        },
      }
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: 'projectTitle' },
          style: {
            borderRadius: '8px',
            backgroundColor: themeColors.primary.main,
            color: 'black',
            margin: '2px',
          }
        },
        {
          props: { variant: 'projectTitleHover' },
          style: {
            borderRadius: '8px',
            backgroundColor: themeColors.secondary.main,
            color: 'white',
            margin: '2px',
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
            height: '100%',
            color: themeColors.primary.contrastText, 
            display: 'block',
            backgroundColor: themeColors.primary.main,
            border: 'none',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: themeColors.primary.light,
              border: 'none',
            }
          },
        },
        {
          props: { variant: 'navDropdown' },
          style: {
            color: themeColors.primary.contrastText, 
            display: 'block',
            backgroundColor: themeColors.primary.light,
            border: 'none',
            borderRadius: 0,
            width:'100%',
            height: '100%',
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:hover': {
              backgroundColor: themeColors.secondary.light,
              color: 'white',
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
            color: 'themeColors.secondary.contrastText', 
            backgroundColor: themeColors.secondary.main,
            paddingLeft: '4px',
            paddingRight: '4px',
            justifyContent:'center',
          },
        },
      ]
    },
    MuiSvgIcon: {
      defaultProps: {
        height:1,
      },
    },

  },
};

const Theme1 = createTheme(themeOptions);
export default Theme1;