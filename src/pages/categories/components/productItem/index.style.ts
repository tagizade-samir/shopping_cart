import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardWrapper: {
        height: 300,
        width: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down(300)]: {
            height: 320,
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