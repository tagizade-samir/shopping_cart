import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffc43d',
        },
        secondary: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h2: {
            color: '#fff',
            textAlign: 'center'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 196, 61, 0.4)'
                    }
                }
            }
        }
    }
});

// overrides: {
//     MuiButton: {
//      root: {
//       "&:hover": {
//         backgroundColor: palette.primary.active,
//       },
//      }
//     }
//    }