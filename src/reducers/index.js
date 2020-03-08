import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
// local files
import provider from './provider';
import providers from './providers';

const reducer = combineReducers({
  provider,
  providers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

export const store = createStore(reducer, composeEnhancers(middleware));
