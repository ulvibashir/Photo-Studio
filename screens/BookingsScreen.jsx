import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Layout } from "../commons";
import { connect } from "react-redux";
import { selectBookings, loadBook } from "../store/bookings";

const mapStateToProps = (state) => ({
  bookings: selectBookings(state)
})
export const BookingsScreen = connect(mapStateToProps, {loadBook})(({bookings, loadBook}) => {

  useEffect(() => {
    loadBook()
  }, [])
  console.log(bookings)
  return (
    <Layout>
      <View style={styles.container}>
        <Text>BookingsScreen</Text>
      </View>
    </Layout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
