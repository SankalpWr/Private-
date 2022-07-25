import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./Saga/rootSaga";
import { cardReducer } from "./Reducers/card";


const rootReducer = combineReducers({
 cardReducer:cardReducer
});


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const sagamiddleware = createSagaMiddleware();

const middlewares = [sagamiddleware];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagamiddleware.run(watcherSaga);

export default store;