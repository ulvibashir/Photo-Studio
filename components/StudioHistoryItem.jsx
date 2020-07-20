import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CustomText } from "./CustomText";
import { useNavigation } from "@react-navigation/native";

export const StudioHistoryItem = ({ studioName, imgArray, fields }) => {
  const navigation  = useNavigation()
  const endTime = new Date(fields.endTime).getHours();
  const startTime = new Date(fields.startTime).getHours();
  const hours = endTime - startTime;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.studio}
        onPress={() => navigation.navigate("studio-screen", { fields,hours , studioName})}
      >
        <ImageBackground
          style={styles.imgContainer}
          imageStyle={{ opacity: 0.5 }}
          source={{ uri: imgArray[0] }}
        >
          <CustomText weight="medium" style={styles.name}>
            {studioName}
          </CustomText>
          <CustomText weight="bold" style={styles.time}>
            {hours} hours
          </CustomText>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  studio: {
    width: "100%",
    height: 80,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  imgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    resizeMode: "stretch",
  },
  name: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  time: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
