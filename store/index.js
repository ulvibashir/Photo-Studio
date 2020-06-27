import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { MODULE_NAME as authModuleName, reducer as authReducer } from "./auth";
import {MODULE_NAME as studioModuleName, reducer as studiosReducer} from './studios'
import { AsyncStorage } from "react-native";

const config = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [authModuleName]
};
const rootReducer = combineReducers({
  [authModuleName]: authReducer,
  [studioModuleName]: studiosReducer
});

const rootPersistReducer = persistReducer(config, rootReducer);
const store = createStore(
  rootPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
// persistor.purge();
export default store