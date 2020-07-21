import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { BookingsScreen, BookingsInfoScreen } from "../../screens";


const {Navigator, Screen} = createStackNavigator();

export const BookingsStack = () => {
  return(
      <Navigator headerMode="none">
          <Screen name="bookings-screen" component={BookingsScreen}/>
          <Screen name="bookings-info" component={BookingsInfoScreen}/>
      </Navigator>
  )
}