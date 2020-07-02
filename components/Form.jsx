import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";

import { CustomText } from "./CustomText";
import { COLORS } from "../styles";

export const Form = ({ fields, inputs }) => {
  // const [fields, setFields] = useState({
  //   name,
  //   surname,
  //   password,
  //   email,
  //   phone,
  //   image,
  //   city,
  //   speciality,
  // });



  return (
    <View style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={inputs}
        renderItem={({ item }) => (
          <View style={styles.inputWrapper}>
            <CustomText style={styles.label}>{item.label}</CustomText>
            <TextInput
              blurOnSubmit={false}
              key={item.value}
              keyboardType={item.value == "phone" ? "number-pad" : "default"}
              secureTextEntry={item.value === "password"}
              onChangeText={item.onChangeText}
              value={fields[item.value]}
              style={styles.input}
            />
          </View>
        )}
        keyExtractor={(item, i) => i.toString()}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    
 
  },
  inputWrapper: {
    marginTop: 12,
  },
  label:{
    color: COLORS.PRIMARY,
    fontSize: 14,
    fontFamily: 'RobotoRegular'
  },
  inputWrapper: {
    marginTop: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.BG_GRADIENT_2,
    width: "100%",
    height: 38,
    color: 'white',
    fontFamily: 'RobotoLight'
  },
});
