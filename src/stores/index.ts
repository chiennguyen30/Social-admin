import { createStore, combineReducers, applyMiddleware , compose } from "redux";
import { accountReducer } from "./account/reducers";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  account: accountReducer
});
declare global{
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore(){
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(rootReducer, composeEnhancers(middlewareEnhancer));
}
