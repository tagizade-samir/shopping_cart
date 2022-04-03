import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../saga";
import reducers from "./reducers";

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;