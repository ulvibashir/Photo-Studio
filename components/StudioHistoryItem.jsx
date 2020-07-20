
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CustomText } from "./CustomText";

export const StudioHistoryItem = ({ name, time,onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.studio} onPress={onPress}>
          <CustomText style={styles.name}>
              {name}
          </CustomText>
          <CustomText weight='bold' style={styles.time}>
              {time}
          </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
  studio: {
      //marginTop: 14,
      backgroundColor: 'grey',
      width: '100%',
      height: 80,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      
  },
name: {
    color:'white',
    fontSize: 16,
},
time: {
    fontSize:18,
    color: 'white',
}
});