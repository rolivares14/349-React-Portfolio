// src/theme.js
import { createTheme } from '@mui/material/styles';
//03284A
//17679F
//0F73B6
//5DB0DE
//BADCF2
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0F73B6',
    },
    secondary: {
      main: '#347BB7',
    },
    background: {
      default: '#121212',
      paper: '#03284A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#2957a4',
          }
        }
      }
    }
  }
});

export default theme;
