import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history)
      ),
    ),
  );
}