import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen, NotificationScreen, ContractsScreen, EditUser } from "../../screens";



const {Navigator, Screen} = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="settings-screen" component={SettingsScreen} />
      <Screen name="edit-screen" component={EditUser} />

      <Screen name="notification-screen" component={NotificationScreen} />
      <Screen name="contracts-screen" component={ContractsScreen} />

    </Navigator>
  );
};