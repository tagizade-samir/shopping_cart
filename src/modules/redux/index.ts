import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { applyMiddleware, createStore, Store } from "redux";

import reducers from "./reducers";
import { rootSaga } from "../saga";

const saga: SagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;