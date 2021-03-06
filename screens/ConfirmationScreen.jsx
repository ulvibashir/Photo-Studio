import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Layout } from "../commons";
import { GradientBTN, CustomText as Text } from "../components";
import { COLORS } from "../styles";
import { setStudios, selectFields } from "../store/studios";
import { fullDate, fullTime } from "../utilities/extraFunctions";
import { connect } from "react-redux";
import { createBook } from "../store/bookings";
import { selectAuthStatus } from "../store/auth";

const mapStateToProps = (state) => ({
  fields: selectFields(state),
  authStatus: selectAuthStatus(state),
});
export const ConfirmationScreen = connect(mapStateToProps, { createBook })(
  ({
    route: {
      params: { studio },
    },
    fields,
    navigation,
    createBook,
    authStatus,
  }) => {
    const bookHandler = () => {
      if (authStatus) {
        createBook(studio, fields);
        navigation.popToTop();
        navigation.navigate("bookings-stack");
      } else {
        Alert.alert("Please Log in");
      }
    };
    return (
      <Layout back={true}>
        <ScrollView contentContainerStyle={styles.container}>
          <LinearGradient
            style={styles.bgGradient}
            colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          />
          <View style={styles.fieldRow}>
            <Text style={styles.label}>City</Text>
            <Text weight="medium" style={styles.text}>
              {studio.locatedCity}
            </Text>
          </View>
          <View style={styles.fieldRow}>
            <Text style={styles.label}>Adress</Text>
            <Text weight="medium" style={styles.text}>
              {studio.Adress}
            </Text>
          </View>
          <View style={styles.fieldRow}>
            <Text style={styles.label}>Studio</Text>
            <Text weight="medium" style={styles.text}>
              {studio.studioName}
            </Text>
          </View>
          <View style={styles.fieldRow}>
            <Text style={styles.label}>Date</Text>
            <Text weight="medium" style={styles.text}>
              {fullDate(fields.date)}
            </Text>
          </View>
          <View style={styles.fieldRow}>
            <Text style={styles.label}>Time</Text>
            <Text weight="medium" style={styles.text}>
              {fullTime(fields.startTime, fields.endTime)}
            </Text>
          </View>
          <View style={styles.fieldRow}>
            <Text style={styles.label}>Price</Text>
            <Text weight="medium" style={styles.text}>
              {studio.rentPrice}$
            </Text>
          </View>

          <GradientBTN style={styles.btn} title="Book" onPress={bookHandler} />
        </ScrollView>
      </Layout>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  btn: {
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
  },
  fieldRow: {
    // flexDirection: 'row',
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
