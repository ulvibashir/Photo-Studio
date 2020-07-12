import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Layout } from "../commons";
import { connect } from "react-redux";
import { selectFavorites } from "../store/studios";
import { StudioListItem } from "../components/StudioListItem";
import { COLORS } from "../styles";

const mapStateToProps = state => ({
  favorites: selectFavorites(state)
})

export const FavoritesScreen = connect(mapStateToProps)(({favorites}) => {
  const fields = {} // need to write fields to state
  return (
    <Layout back={true} title="Favorites">
     <View style={styles.container}>

          <FlatList
            data={favorites}
            renderItem={({ item }) => <StudioListItem isFav={true} item={item} fields={fields} />}
          />
      </View>
  </Layout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HEADER_COLOR
  },
  bgGradient: {
    //...StyleSheet.absoluteFill
  },
 
});
