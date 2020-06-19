import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const SettingsStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="settings-screen" component={SettingsScreen}/>
      </Navigator>
  )
}