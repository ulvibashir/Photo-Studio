import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeStack,
  FavoritesStack,
  BookingsStack,
  WalletStack,
  SettingsStack,
} from "./stacks";

const { Navigator, Screen } = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home-stack" component={HomeStack} />
        <Screen name="favorites-stack" component={FavoritesStack} />
        <Screen name="bookings-stack" component={BookingsStack} />
        <Screen name="wallet-stack" component={WalletStack} />
        <Screen name="settings-stack" component={SettingsStack} />
      </Navigator>
    </NavigationContainer>
  );
};
