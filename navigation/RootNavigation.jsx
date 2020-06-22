import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";

import {
  HomeStack,
  FavoritesStack,
  BookingsStack,
  WalletStack,
  SettingsStack,
} from "./stacks";
import {
  selectWelcomeScreenEnabled,
  setWelcomeScreenEnabled,
} from "../store/studios";
import { WelcomeScreen } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();

const mapStateToProps = (state) => ({
  welcomeScreenEnabled: selectWelcomeScreenEnabled(state),
});

export const RootNavigation = connect(mapStateToProps, {
  setWelcomeScreenEnabled,
})(({ setWelcomeScreenEnabled, welcomeScreenEnabled }) => {


  if(welcomeScreenEnabled) {
    return <WelcomeScreen/>
  }
  
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
});
