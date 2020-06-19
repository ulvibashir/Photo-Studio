import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { WalletScreen } from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const WalletStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="wallet-screen" component={WalletScreen}/>
      </Navigator>
  )
}