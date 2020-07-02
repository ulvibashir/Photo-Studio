import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { WalletScreen } from "../../screens";
import { CardForm } from '../../screens/WalletScreen/CardForm';
import { StudioDetail } from '../../screens/WalletScreen/StudioDetail';


const {Navigator, Screen} = createStackNavigator();

export const WalletStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="wallet-screen" component={WalletScreen}/>
          <Screen name="studio-screen" component={StudioDetail}/>
          <Screen name="form-screen" component={CardForm}/>
      </Navigator>
  )
}