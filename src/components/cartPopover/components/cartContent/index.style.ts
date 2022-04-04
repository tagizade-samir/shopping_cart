import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        width: 500,
        display: 'flex',
        overflow: 'scroll',
        flexDirection: 'column',
        '&::-webkit-scrollbar': {
            width: 0
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    contentWrapper: {
        width: '100%',
        paddingX: '10px',
        height: '100%',
        [theme.breakpoints.down(500)]: {
            flexDirection: 'column',
            paddingTop: 45
        }
    },
    priceWrapper: {
        width: '100%',
        padding: 2,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1
    }
});