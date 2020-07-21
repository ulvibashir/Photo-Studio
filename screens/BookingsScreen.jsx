import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Layout } from "../commons";
import { connect } from "react-redux";
import { selectBookings, loadBook } from "../store/bookings";
import { selectUserID } from "../store/auth";
import { BookingItem } from "../components";
import { COLORS } from "../styles";

const mapStateToProps = (state) => ({
  bookings: selectBookings(state),
  userID: selectUserID(state),
});
export const BookingsScreen = connect(mapStateToProps, { loadBook })(
  ({ bookings, loadBook, userID, navigation }) => {
    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
      loadBook();
    }, [userID,bookings]);

    const onRefresh = () => {
      setRefreshed(true);
      loadBook(setRefreshed);
    };
    const onPressHandler = (item) => {
      navigation.navigate('bookings-info', {item});
    }
    return (
      <Layout title="Bookings">
        <View style={styles.container}>
          <FlatList
            data={bookings.slice(0).reverse()}
            refreshing={refreshed}
            onRefresh={onRefresh}
            renderItem={({ item }) => <BookingItem item={item} onPress={() => onPressHandler(item)}/>}
          />
        </View>
      </Layout>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HEADER_COLOR
  },
});
