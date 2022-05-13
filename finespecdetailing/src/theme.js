import { createTheme } from '@mui/material/styles';
import { blue, green, pink, red, yellow } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#9ea7aa',      
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffffff',
      dark: '#484848',
      contrastText: '#000',
    },
    // text: {
    //   disabled: red[900],
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#201e1e',
    //   paper: '#333131',
    // },
  },
  text: {
    primary: '#7c00ff',
    secondary: '#6200ea',
  }
//   components: {
//       MuiFormControl: {
//         styleOverrides: {
//             colorInherit: {
//                 backgroundColor: "#393D3F",
//             },
//         },
//         defaultProps: {
//             color: "#393D3F",
//         },
//     },
// },
});

export default theme;
