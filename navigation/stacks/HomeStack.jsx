import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SearchScreen, SingleStudioScreen } from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const HomeStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="search-screen" component={SearchScreen}/>
          <Screen name="single-studio-screen" component={SingleStudioScreen}/>
          <Screen name="home-screen" component={HomeScreen}/>
      </Navigator>
  )
}