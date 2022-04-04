import { Theme } from "@mui/material";
import { Utils } from "../../services/utils";

const { drawerWidth, drawerChangeWidth, smallerDrawerWidth } = Utils.CONSTANTS;

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        width: drawerWidth,
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        alignItems: 'center',
        padding: 1,
        flexDirection: 'column',
        backgroundColor: '#dedede',
        gap: 1,
        [theme.breakpoints.down(drawerChangeWidth)]: {
            width: smallerDrawerWidth,
        },
    },
});