import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// defined as a function to be called at app entry to create store each time app runs
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    //the devTools calls to apply middleware to enhence the redux performance with specific middleware Fn called reduxImmutableStateInvariant, optional
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
