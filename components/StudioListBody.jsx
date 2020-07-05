import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StudioListItem } from "./StudioListItem";
import { connect } from "react-redux";
import { getStudios } from "../store/studios";

export const StudioListBody = connect(null, { getStudios })(
  ({ data, getStudios, fields }) => {
    const [refreshed, setRefreshed] = useState(false);

    const onRefresh = () => {
      setRefreshed(true);
      getStudios(setRefreshed);
    };
    return (
      <View style={styles.container}>
        {!!data.length ? (
          <FlatList
            data={data}
            refreshing={refreshed}
            onRefresh={onRefresh}
            renderItem={({ item }) => <StudioListItem item={item} fields={fields} />}
          />
        ) : (
          <View style={styles.indicator}>
            <ActivityIndicator size={30} color="gray" />
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
