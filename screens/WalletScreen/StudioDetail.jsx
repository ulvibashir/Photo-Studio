import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CustomText } from "../../components";
import { Layout } from "../../commons";
import { COLORS } from "../../styles";

export const StudioDetail = (params) => {
  return (
    <Layout cancel={true}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      <View style={styles.container}>

      <CustomText style={{color: 'white'}}>single studio</CustomText>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
});