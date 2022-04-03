import { Theme } from "@mui/material";
import { Utils } from "src/services/utils";

export const getStyles = (theme: Theme) => ({
    header: {
        width: Utils.CONSTANTS.drawerWidth,
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down(300)]: {
            width: 100,
        }
    },
    buttonWrapper: {
        display: 'flex',
        flex: 1,
        borderRadius: 0,
        justifyContent: 'flex-end'
    }
});