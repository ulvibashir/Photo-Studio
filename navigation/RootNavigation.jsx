import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import {TabBarIcon } from "../components";
import { COLORS } from "../styles";
import { View } from "react-native";

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
  // tabBar={props => <CustomTabBar {...props}/>}
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, focused, color }) => {
            let iconName = null;
            switch (route.name) {
              case "settings-stack":
                iconName = "settings";
                break;
              case "wallet-stack":
                iconName = "wallet";
                break;

              case "bookings-stack":
                iconName = "bookings";
                break;

              case "favorites-stack":
                iconName = "favorites";
                break;

              case "home-stack":
                iconName = "home";
                break;

              default: 
                iconName = 'heart';
            }
            return <TabBarIcon name={iconName} focused={focused} size={size} />;
            
          }
        })}
        
        tabBarOptions={{
          style:{
            backgroundColor:  'red',
            borderTopWidth: 0
          },
          tabStyle: {
            backgroundColor: COLORS.TAB_COLOR,
            borderWidth: 0,
         
    
          },
          showLabel: false,
          activeTintColor: "red",
          inactiveTintColor: "red",
          keyboardHidesTabBar: true,
        }}
      >
        <Screen name="home-stack" component={HomeStack}/>
        <Screen name="favorites-stack" component={FavoritesStack} />
        <Screen name="bookings-stack" component={BookingsStack} />
        <Screen name="wallet-stack" component={WalletStack} />
        <Screen name="settings-stack" component={SettingsStack} />
      </Navigator>
    </NavigationContainer>
  );
});
