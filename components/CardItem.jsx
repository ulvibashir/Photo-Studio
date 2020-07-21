import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { CustomText } from "./CustomText";
import { COLORS, ICONS } from "../styles";
import { useNavigation } from "@react-navigation/native";

export const CardItem = ({  card , onPressIcon , onPress}) => {
  const  navigation = useNavigation()
  const name = card.cardType + ' - ' + card.number.slice(0,4)
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Image source={ICONS.card} style={styles.icon} />
        <CustomText weight="bold" style={styles.name}>
          {name}
        </CustomText>
      </View>
      <View style={styles.row}>
  <CustomText style={styles.label}>{card.preferred? "Preferred" : ""}</CustomText>
      <TouchableOpacity style={styles.row} onPress={onPressIcon}>
        <Image source={ICONS.options} style={styles.options} />
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    // marginHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  row: {
    marginLeft: 6,
    paddingHorizontal: 10,
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: 'space-between'
  },
 label: {
  color: "white",
  fontSize: 15,
  
  alignSelf: 'center'
 },
 options: {
   width: 5,
   height: 20
 }
});
