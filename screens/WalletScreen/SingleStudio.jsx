
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CustomText } from "../../components";

export const SingleStudio = ({ name, time,onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
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
      marginTop: 14,
      backgroundColor: 'grey',
      width: '100%',
      height: 170,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
  },
name: {
    color:'white',
    fontSize: 19,
},
time: {
    fontSize:21,
    color: 'white',
}
});