import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#393D3F',
    },
    secondary: {
      main: '#6200ea',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
