import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";

export const SettingsScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
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
