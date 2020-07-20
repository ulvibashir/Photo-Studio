import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CustomText } from "../components";
import { Layout } from "../commons";
import { COLORS, ICONS } from "../styles";
import { TAB_ICONS } from "../styles/ICONS";

export const StudioHoursScreen = ({
  route: {
    params: { fields, hours, studioName },
  },
}) => {
  const date = new Date(fields.date);
  const fullDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  return (
    <Layout cancel={true} title={studioName}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <CustomText weight="bold" style={styles.balance}>
            Bought:
          </CustomText>
          <CustomText style={styles.date}>{fullDate}</CustomText>
          <CustomText weight="light" style={styles.balance}>
            {hours} h
          </CustomText>
        </View>
        <View style={styles.row}>
          <CustomText weight="bold" style={styles.balance}>
            Spent:
          </CustomText>
          <CustomText style={styles.date}> </CustomText>
          <CustomText weight="light" style={styles.balance}>
            0 h
          </CustomText>
        </View>
        <View style={styles.row}>
          <CustomText weight="bold" style={styles.balance}>
            Balance:
          </CustomText>
          <View style={styles.imgbalance}>
            <Image style={styles.icon} source={TAB_ICONS.wallet.inActive} />
            <CustomText style={styles.balance}>{hours} h </CustomText>
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
    borderColor: "#5a615a",
  },
  balance: {
    fontSize: 16,
    padding: 16,
    color: "white",
  },
  date: {
    fontSize: 14,
    padding: 16,
    color: "white",
    marginHorizontal: 10,
    color: "lightgray",
  },
  imgbalance: {
    backgroundColor: COLORS.HEADER_COLOR,
    flexDirection: "row",
    alignItems: "center",
    borderLeftColor: "#5a615a",
    borderLeftWidth: 1,
    paddingLeft: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
