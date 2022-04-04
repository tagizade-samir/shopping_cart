import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
    modal: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rootWrapper: {
        backgroundColor: 'white',
        maxWidth: 600,
        padding: '20px 50px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxHeight: '70%',
        overflowY: 'visible',
        [theme.breakpoints.down('sm')]: {
            maxWidth: 300,
            paddingX: '10px',
        },
    },
    headerTitle: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        },
    },
    price: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem'
        }
    },
    description: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        }
    },
    buttonWrapper: {
        display: 'flex',
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})