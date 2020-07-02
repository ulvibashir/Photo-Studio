import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import { CustomText as Text, WelcomeScrIndicators } from "../components";
import uuid from 'react-uuid'
export const SingleStudioScreen = ({
  route: {
    params: { item: studio },
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgPart}>
        <View style={styles.header}>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
        <FlatList
          data={studio.imgArray}
          renderItem={({ item }) => {
            return <Image style={styles.img} source={{ uri: item }} />;
          }}
          horizontal={true}
          keyExtractor={() => uuid()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPart: {
    width: "100%",
    height: 350,
  },
  img: {
    width: Dimensions.get("window").width,
  },
});
