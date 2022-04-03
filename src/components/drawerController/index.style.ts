import { Theme } from "@mui/material";
import { Utils } from "src/services/utils";

export const getStyles = (theme: Theme, isDrawerOpen: boolean) => ({
    mainWrapper: {
        marginLeft: isDrawerOpen ? Utils.CONSTANTS.drawerWidth : 0,
        transition: 'all 0.3s',
        [theme.breakpoints.down(300)]: {
            marginLeft: isDrawerOpen ? 100 : 0,
        }
    }
});