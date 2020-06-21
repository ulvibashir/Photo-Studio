import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../../commons";
import { Auth } from "./Auth";
import { connect } from "react-redux";
import { selectAuthStatus } from "../../store/auth";
import { UserSettings } from "./UserSettings";

const mapStateToProps = (state) => ({
  status: selectAuthStatus(state),
});
export const SettingsScreen = connect(mapStateToProps)(({ status }) => {
 
  return (
    <Layout >
      <View style={styles.container}>
        {status ? <UserSettings /> : <Auth />}
      </View>
    </Layout>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
   justifyContent: "space-between",
    // alignItems: "center",
  },
});
