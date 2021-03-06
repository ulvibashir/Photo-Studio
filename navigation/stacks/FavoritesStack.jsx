import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { FavoritesScreen, SingleStudioScreen } from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const FavoritesStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="favorites-screen" component={FavoritesScreen}/>
          <Screen name="single-studio-screen-fav" component={SingleStudioScreen} />
      </Navigator>
  )
}