import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";

export const WalletScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>WalletScreen</Text>
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
