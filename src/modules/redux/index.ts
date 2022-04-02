import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "src/modules/redux/reducers";
import { rootSaga } from "../saga";

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;