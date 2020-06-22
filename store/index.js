import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { MODULE_NAME as authModuleName, reducer as authReducer } from "./auth";
import { AsyncStorage } from "react-native";

const config = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  [authModuleName]: authReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);
const store = createStore(
  rootPersistReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export default store