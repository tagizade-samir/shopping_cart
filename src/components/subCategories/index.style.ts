import { theme } from "../../modules/theme";

export const styles = {
    rootWrapper: {
        display: 'flex',
        width: '80%',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: 600,
        alignSelf: 'center',
        paddingY: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            gap: 1,
            alignItems: 'stretch',
            paddingY: '10px',
        }
    },
}