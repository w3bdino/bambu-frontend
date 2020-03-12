import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/root.reducer';
import rootSaga from "./sagas/root.sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
