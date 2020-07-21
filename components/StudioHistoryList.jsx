import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { StudioHistoryItem } from "./StudioHistoryItem";

export const StudioHistoryList = ({ data}) => {
  return (
    <View style={styles.container} > 
   
        <FlatList
          data={data.slice(0).reverse()}
          renderItem={({ item }) => <StudioHistoryItem key={item.id} {...item} />}
          keyExtractor={(item)=> item.id}
        />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
    marginTop: 15,
  }
})