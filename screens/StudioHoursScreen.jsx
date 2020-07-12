import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CustomText } from "../components";
import { Layout } from "../commons";
import { COLORS } from "../styles";

export const StudioHoursScreen = (params) => {
  return (
    <Layout cancel={true} title='Studios'>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <CustomText style={styles.balance}>Bought: </CustomText>
        </View>
        <View style={styles.row}>
          <CustomText style={styles.balance}>Spent: </CustomText>
        </View>
        <View style={styles.row}>
          <CustomText style={styles.balance}>Balance: </CustomText>
          <View style={styles.imgbalance}>
            <Image />
            <CustomText style={styles.balance}>4 h </CustomText>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  balance: {
    fontSize: 16,
    padding: 16,
    color: "white",

    fontFamily: "RobotoBold",
  },
  imgbalance: {
    backgroundColor: COLORS.HEADER_COLOR,
    alignItems: "center",
    borderLeftColor: "grey",
    borderLeftWidth: 1,
  },
});
