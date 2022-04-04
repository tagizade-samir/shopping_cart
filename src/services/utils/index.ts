import { IProduct } from "../../modules/redux/reducers/products/types";

const drawerWidth: number = 200;
const headerChangeWidth: number = 250;
const headerChangeWidthDrawerOpen: number = 440;
const cartItemsKey: string = 'CART_ITEMS';
const userItemKey: string = 'USER';
const emptyCartChangeWidth: number = 350;
const fullCartChangeWidth: number = 500;
const drawerChangeWidth: number = 300;
const smallerDrawerWidth: number = 100;
const appTitle: string = 'Foody';

const ROUTES = {
    root: '/',
    categories: '/categories',
    signUp: '/signUp',
    profile: '/profile',
    confirmOrder: '/confirmOrder',
}

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

const getUser = () => ({
    isAuthorized: true,
    name: 'Samir',
    gender: 'male',
    id: '1',
});

const getEmptyUser = () => ({
    isAuthorized: false,
    name: '',
    gender: '',
    id: '',
});

export const Utils = {
    CONSTANTS: {
        drawerWidth,
        headerChangeWidth,
        cartItemsKey,
        userItemKey,
        emptyCartChangeWidth,
        fullCartChangeWidth,
        drawerChangeWidth,
        smallerDrawerWidth,
        headerChangeWidthDrawerOpen,
        appTitle
    },
    HELPERS: {
        groupCartItems,
        getUser,
        getEmptyUser
    },
    ROUTES
};