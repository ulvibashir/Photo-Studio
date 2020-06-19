import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";

export const FavoritesScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>FavoritesScreen</Text>
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
