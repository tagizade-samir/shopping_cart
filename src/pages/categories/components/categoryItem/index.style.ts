import { theme } from "src/modules/theme";

export const styles = {
    root: {
        transition: 'all 0.3s',
        marginBottom: '20px',
        width: 1000,
        [theme.breakpoints.down('lg')]: {
            width: 700,
        },
        [theme.breakpoints.down('md')]: {
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            width: 200,
        },
        '&:first-child': {
            marginTop: '20px'
        },
        cursor: 'pointer',
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
    }
}