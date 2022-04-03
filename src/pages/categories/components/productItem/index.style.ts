import { theme } from "src/modules/theme";

export const styles = {
    rootWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardWrapper: {
        height: '100%',
        width: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    topContainer: {
        height: '80%'
    },
    contentContainer: {
        height: '50%'
    }
}