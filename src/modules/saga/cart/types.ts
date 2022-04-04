import { IProduct } from "../../redux/reducers/products/types";

export const CartSagaActions = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
};

export interface ICartPayload {
    type: 'add' | 'delete' | 'removeItems';
    data: number | IProduct ;
}