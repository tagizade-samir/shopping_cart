import { RootState } from "../..";
import { IProduct } from "../products/types";

export const selectCartItems = ((state: RootState): Array<IProduct> | [] => state.cart.items);

export const selectCartItemsIds = ((state: RootState): Array<number> | [] => {
    return state.cart.items.length ? state.cart.items.map((item: IProduct) => item.id) : [];
});