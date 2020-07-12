import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { StudioHistoryItem } from "./StudioHistoryItem";

export const StudioHistoryList = ({onPress, data}) => {
  return (
    <View style={styles.container} > 
   
        <FlatList
          data={data}
          renderItem={({ item }) => <StudioHistoryItem key={item.name} onPress={onPress} {...item} />}
          keyExtractor={(item)=> item.name}
        />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60
  }
})