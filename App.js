import React, {useState} from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RootNavigation } from "./navigation/RootNavigation";

import store, { persistor } from "./store";
import { AppLoading } from "expo";
import { loadFonts } from "./styles/fonts";

export default function App() {

  const [loaded, setLoaded] = useState(false)
  
  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {setLoaded(true)}}
        onError={(e) => {console.log('Font loading error', e)}}
      />
    )
  }


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
