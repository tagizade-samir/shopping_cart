import { theme } from "../../modules/theme";
import { Utils } from "../../services/utils";


export const styles = {
    root: {
        backgroundColor: '#89b0ae',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: '10px 20px',
        [theme.breakpoints.down(Utils.CONSTANTS.headerChangeWidth)]: {
            flexDirection: 'column',
            gap: 2,
        },
    },
    rightButtonsWrapper: {
        display: 'flex',
        gap: 2,
        [theme.breakpoints.down(Utils.CONSTANTS.headerChangeWidth)]: {
            flexDirection: 'column'
        },
    }
}