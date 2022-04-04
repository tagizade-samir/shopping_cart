import { Theme } from "@mui/material";
import { Utils } from "../../services/utils";

export const getStyles = (theme: Theme) => ({
    rootWrapper: {
        width: Utils.CONSTANTS.drawerWidth,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'flex-start',
        padding: 1,
        backgroundColor: '#dedede',
        [theme.breakpoints.down(300)]: {
            width: 100,
        },
    },
});