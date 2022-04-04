import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
    root: {
        transition: 'all 0.3s',
        marginBottom: '20px',
        width: '70%',
        cursor: 'pointer',
        '&:first-of-type': {
            marginTop: '20px'
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }
    },
    title: {
        paddingY: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        wordSpacing: 5,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
        },
    }
});