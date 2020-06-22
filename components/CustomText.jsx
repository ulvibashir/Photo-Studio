import React from 'react';
import { Text } from "react-native";
import { fonts } from '../styles/fonts';


export const CustomText = ({children, weight, style, ...rest}) => {
  return <Text {...rest} style={[{ fontFamily: fonts[weight] || fonts.light }, style]} >{children}</Text>
}