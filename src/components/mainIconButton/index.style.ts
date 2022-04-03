import { theme } from "../../modules/theme";
import { Utils } from "../../services/utils";


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