import { Theme } from "@mui/material";
import { Utils } from "../../services/utils";

const { drawerWidth, drawerChangeWidth, smallerDrawerWidth } = Utils.CONSTANTS;

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        width: drawerWidth,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'flex-start',
        padding: 1,
        backgroundColor: '#dedede',
        [theme.breakpoints.down(drawerChangeWidth)]: {
            width: smallerDrawerWidth,
        },
    },
});