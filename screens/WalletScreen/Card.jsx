import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { CustomText } from "../../components";
import { COLORS, ICONS } from "../../styles";

export const Card = ({number, cardType  }) => {
  const name = cardType + ' - ' + number.slice(0,4)
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={ICONS.card} style={styles.icon} />
        <CustomText weight="bold" style={styles.name}>
          {name}
        </CustomText>
      </View>
      <TouchableOpacity style={styles.row}>
        <Image source={ICONS.options} style={styles.options} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,.2)",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  row: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  options: {
    width: 20,
    height: 20,
  },
});
