import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardWrapper: {
        transition: 'all 0.3s',
        height: 300,
        width: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down(300)]: {
            height: 320,
        },
        '&:hover': {
            backgroundColor: 'rgba(137, 176, 174, 0.4)'
        }
    },
    topContainer: {
        height: 250,
    },
    contentContainer: {
        height: 110,
    },
    buttonContainer: {
        height: 50,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: '1.3rem',
        [theme.breakpoints.down(300)]: {
            fontSize: '0.8rem',
        }
    },
    itemPrice: {
        fontSize: '1.1rem',
        [theme.breakpoints.down(300)]: {
            fontSize: '0.6rem',
        }
    }
});