import { combineReducers } from "redux";
import { appReducer } from "./app";
import { cartReducer } from "./cart";
import { categoriesReducer } from "./categories";
import { productsReducer } from "./products";
import { subCategoriesReducer } from "./subCategories";

const reducers = combineReducers({
    cart: cartReducer,
    app: appReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    products: productsReducer,
});

export default reducers;