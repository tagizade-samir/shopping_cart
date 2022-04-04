import { Theme } from "@mui/material";
import { Utils } from "../../../../services/utils";

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        padding: '5px',
        backgroundColor: '#89b0ae',
        margin: '5px 0px',
        display: 'flex',
        [theme.breakpoints.down(Utils.CONSTANTS.fullCartChangeWidth)]: {
            flexDirection: 'column'
        }
    },
    itemWrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonsWrapper: {
        width: 80,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1,
        [theme.breakpoints.down(500)]: {
            flexDirection: 'row'
        }
    }
});