import { Theme } from "@mui/material";
import { Utils } from "../../services/utils";

const { fullCartChangeWidth, emptyCartChangeWidth, headerChangeWidth } = Utils.CONSTANTS;

export const getStyles = (theme: Theme, count: number) => ({
    rootWrapper: {
        minWidth: 300,
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        maxHeight: 450,
        overflowY: 'scroll',
        border: '1px solid black',
        backgroundColor: 'white',
        borderRadius: '0 0 5px 5px',
        '&::-webkit-scrollbar': {
            width: 0
        },
        [theme.breakpoints.down(count ? fullCartChangeWidth : emptyCartChangeWidth)]: {
            width: 200,
            minWidth: 200,
        },
        [theme.breakpoints.down(headerChangeWidth)]: {
            width: 140,
            minWidth: 140,
        }
    },
    headerWrapper: {
        display: 'flex',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px 10px',
        [theme.breakpoints.down(headerChangeWidth)]: {
            paddingX: 0,
            justifyContent: 'center',
            '& h6': {
                display: 'none'
            }
        }
    }
});