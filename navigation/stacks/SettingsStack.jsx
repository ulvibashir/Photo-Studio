import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../screens";
import { EditUser } from '../../screens/SettingsScreen/EditUser';


const {Navigator, Screen} = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="settings-screen" component={SettingsScreen} />
      <Screen name="edit-screen" component={EditUser} />
    </Navigator>
  );
};