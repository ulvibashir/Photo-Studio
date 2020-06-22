import React, { useState } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../styles";
import { CustomText as Text } from "../components";

export const SearchScreen = ({ navigation }) => {
  const [fields, setFields] = useState({
    city: "Baku",
    day: null,
    startTime: null,
    endTime: null,
  });
  const onSearchHandler = () => navigation.navigate("home-screen");

  const filedsChangeHandler = (name, value) => {
    setFields((v) => ({
      ...v,
      [name]: value,
    }));
  };

  const pickerValues = [
    { label: "Baku", value: "Baku" },
    { label: "Sumgayit", value: "Sumgayit" },
  ]
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      <StatusBar barStyle="light-content" />
      <Text style={styles.header} weight="bold">
        Find a studio{" "}
      </Text>

      <DropDownPicker
        items={pickerValues}
        defaultValue={fields.city}
        containerStyle={styles.pickerInnerContaier}
        style={styles.picker}
        dropDownStyle={styles.pickerDropDown}
        labelStyle={styles.labelStyle}
        onChangeItem={(item) => filedsChangeHandler("city", item.value)}
      />

      <TouchableOpacity style={styles.searchBtn} onPress={onSearchHandler}>
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Text style={styles.btnTitle} weight="medium">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  header: {
    fontSize: 23,
    marginTop: 40,
    color: "white",
    textAlign: "center",
  },
 
  pickerInnerContaier: {
    marginTop: 20,
    height: 50,
    
  },
  pickerDropDown: {
    backgroundColor: COLORS.SECONDARY,
    borderWidth: 0
  },
  picker: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0

  },
  labelStyle: {
    color: 'white',
    fontFamily: 'RobotoRegular',
    fontSize: 14
  },
  searchBtn: {
    height: 50,
    borderRadius: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    overflow: 'hidden'
  },
  btnTitle: {
    color: 'white'
  }

});
