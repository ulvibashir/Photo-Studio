import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { CustomText as Text } from "./CustomText";
import { COLORS } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
export const GradientBTN = ({ onPress, title, iconPath, style }) => {
  return (
    <TouchableOpacity style={[styles.addBtn, style]} onPress={onPress}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      {!!iconPath && <Image source={iconPath} style={styles.icon} />}
      <Text style={styles.btnTitle} weight="medium">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    height: 55,
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  btnTitle: {
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
});
