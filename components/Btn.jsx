import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CustomText as Text } from "./CustomText";

export const Btn = ({ onPress, title, style,titleStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, style]}>
        <Text weight="medium" style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
     width: "100%",
    backgroundColor: "black",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  title: {
    fontSize: 14,
    color: "white",
  },
});
