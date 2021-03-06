import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
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
        },
        h5: {
            fontSize: '1.2rem'
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