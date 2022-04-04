import { combineReducers } from "redux";

import { appReducer } from "./app";
import { userReducer } from "./user";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";
import { categoriesReducer } from "./categories";
import { subCategoriesReducer } from "./subCategories";

const reducers = combineReducers({
    cart: cartReducer,
    app: appReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    products: productsReducer,
    user: userReducer,
});

export default reducers;