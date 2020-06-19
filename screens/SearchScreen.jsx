import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const SearchScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text>Date, time, country inputs</Text>
        <Button title="search" onPress={() => navigation.navigate('home-screen')}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
