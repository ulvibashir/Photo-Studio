import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { WalletScreen ,CardForm,StudioHoursScreen} from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const WalletStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="wallet-screen" component={WalletScreen}/>
          <Screen name="studio-screen" component={StudioHoursScreen}/>
          <Screen name="form-screen" component={CardForm}/>
      </Navigator>
  )
}