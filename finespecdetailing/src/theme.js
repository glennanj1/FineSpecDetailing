import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C0C0C0',
    },
    secondary: {
      main: '#6200ea',
    },
    error: {
      main: red.A400,
    },
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
