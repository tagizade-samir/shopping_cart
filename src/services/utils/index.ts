import { IProduct } from "../../modules/redux/reducers/products/types";

const drawerWidth = 200;
const headerChangeWidth = 250;
const cartItemsKey = 'CART_ITEMS';

const groupCartItems = (items: Array<IProduct>) => {
    let cartData: any = {};

    items.forEach((item: IProduct) => {
        if (cartData[item.id]) {
            cartData = {
                ...cartData,
                [item.id]: {
                    ...cartData[item.id],
                    count: cartData[item.id].count + 1
                }
            }
        } else {
            cartData = {
                ...cartData,
                [item.id]: {
                    ...cartData[item.id],
                    count: 1,
                    item,
                }
            }
        }
    });

    return cartData;
}

export const Utils = {
    CONSTANTS: {
        drawerWidth,
        headerChangeWidth,
        cartItemsKey
    },
    HELPERS: {
        groupCartItems
    }
};