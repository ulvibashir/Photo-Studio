import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";

export const ConfirmationScreen = () => {
  return (
    <Layout back={true}>
      <View style={styles.container}>
        <Text>ConfirmationScreen</Text>
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
