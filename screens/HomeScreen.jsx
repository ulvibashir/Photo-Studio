import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";
import { StudioListBody } from "../components";

export const HomeScreen = () => {
  return (
    <Layout back={true} title="Los Angeles">
      <View style={styles.container}>
        <View>{/* Filter section */}</View>
        <Text>HomeScreen</Text>

        <StudioListBody />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
