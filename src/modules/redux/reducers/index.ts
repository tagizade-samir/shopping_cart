import { combineReducers } from "redux";
import { appReducer } from "./app";
import { cartReducer } from "./cart";
import { categoriesReducer } from "./categories";

const reducers = combineReducers({
    cart: cartReducer,
    app: appReducer,
    categories: categoriesReducer,
});

export default reducers;