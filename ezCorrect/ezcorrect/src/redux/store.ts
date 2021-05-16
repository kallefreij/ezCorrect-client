import { compose, createStore } from "redux";
import middleware from "./middleware";
import rootReducer from "./rootReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
