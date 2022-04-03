import { theme } from "src/modules/theme";
import { Utils } from "src/services/utils";

export const styles = {
    wrapper: {
        transition: 'all 0.6s',
        '& .title': {
            display: 'none',
        },
        [theme.breakpoints.down(Utils.CONSTANTS.headerChangeWidth)]: {
            '& .title': {
                display: 'block'
            },
            '& svg': {
                display: 'none'
            }
        }
    }
}