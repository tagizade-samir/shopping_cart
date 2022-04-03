import { RootState } from "../..";
import { IProduct } from "../products/types";

export const selectCartItems = ((state: RootState): { items: Array<IProduct | null> } => state.cart);