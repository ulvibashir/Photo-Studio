import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../styles";

export const Field = ({ style, ...rest }) => (
  <View>
    <TextInput  {...rest} style={[styles.field, style]} />
  </View>
);
const styles = StyleSheet.create({
  field: {
    backgroundColor: COLORS.HEADER_COLOR,
    height: 48,
    paddingHorizontal: 18,
    fontSize: 15,
    borderRadius: 25,
    marginTop: 18,
    color: 'white',
   
  },
});
