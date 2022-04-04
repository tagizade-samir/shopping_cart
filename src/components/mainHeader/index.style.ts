import { Theme } from "@mui/material";
import { Utils } from "../../services/utils";

const { headerChangeWidth, headerChangeWidthDrawerOpen } = Utils.CONSTANTS;

export const getStyles = (theme: Theme, isDrawerOpen: boolean) => ({
    root: {
        backgroundColor: '#89b0ae',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: '10px 20px',
        height: '55px',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 10,
        [theme.breakpoints.down(isDrawerOpen ? headerChangeWidthDrawerOpen : headerChangeWidth)]: {
            flexDirection: 'column',
            gap: 2,
            height: '100%',
        },
    },
    rightButtonsWrapper: {
        display: 'flex',
        gap: 2,
        [theme.breakpoints.down(isDrawerOpen ? headerChangeWidthDrawerOpen : headerChangeWidth)]: {
            flexDirection: 'column'
        },
    }
});