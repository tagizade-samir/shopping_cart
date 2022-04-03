import { CartSagaActions, ICartPayload } from "./types";

export const updateCartItemsSaga = (payload: ICartPayload) => ({
    type: CartSagaActions.UPDATE_CART_ITEMS,
    payload
});