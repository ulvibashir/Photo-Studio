import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Layout } from "../../commons";
import { Auth } from "./Auth";
import { selectAuthStatus } from "../../store/auth";
import { Account } from "./Account";

const mapStateToProps = (state) => ({
  status: selectAuthStatus(state),
});
export const SettingsScreen = connect(mapStateToProps)(({ status }) => {
  return (
    <View style={styles.container}>
      {status ? <Account /> : <Auth />}
      </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
   
  },
});
