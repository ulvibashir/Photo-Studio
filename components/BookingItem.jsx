import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Image } from "react-native";
import { CustomText as Text } from "./CustomText";
import { fullTime, fullDate } from "../utilities/extraFunctions";

export const BookingItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.leftSide}>
          <Image source={{ uri: item.imgArray[0] }} style={styles.img} />
        </View>
        <View style={styles.centerSide}>
          {/* <Text style={styles.detailText} weight="regular">{item.fields.city}</Text> */}
          <Text style={styles.detailText} weight="regular">{item.studioName}</Text>
          <Text style={styles.detailText} weight="regular">{fullDate(item.fields.date)}</Text>
          {/* <Text style={styles.detailText} weight="regular">{fullTime(item.fields.startTime, item.fields.endTime)}</Text> */}
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.priceText} weight="medium">{item.rentPrice}$</Text>
         
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
  },
  leftSide: {
    justifyContent: "center",
    marginHorizontal: 20,
    flex: 1,
  },
  centerSide: {
    justifyContent: "center",
    flex: 2,
  },

  rightSide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  detailText: {
      color: 'white',
      fontSize: 16
  },
  priceText: {
      color: 'lightgreen',
      fontSize: 20
  }
});
