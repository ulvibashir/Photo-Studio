import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { COLORS } from "../styles";
import { CustomText as Text } from "../components";
import {dummyCities, pickerValues as pick} from '../utilities/dummyCity'
import { fullDate, fullTime, timeConvert } from "../utilities/extraFunctions";
export const SearchScreen = ({ navigation }) => {
  const [fields, setFields] = useState({
    city: "Daxi",
    date: null,
    startTime: null,
    endTime: null,
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState({
    show: false,
    mode: 'date',
    fieldType: 'start'
  });

  const validate = () => {
    if (
      fields.date === null
      //  || fields.startTime === null ||
      // fields.endTime === null
    )
      return false;
    return true;
  };
  const onSearchHandler = () => {
    // if(validate()) {
    //   navigation.navigate("home-screen", {fields});
    // } else {
    //   Alert.alert('Select date')
    // }


    navigation.navigate("home-screen", {fields});

  };

  const filedsChangeHandler = (name, value) => {
    setFields((v) => ({
      ...v,
      [name]: value,
    }));
  };

  let pickerValues = pick()
  
  const showDatePicker = (mode, fieldType) => {
    setDatePickerVisibility(v => ({
      ...v,
      show: true,
      mode,
      fieldType
    }));
    
  };
  const hideDatePicker = () => {
    setDatePickerVisibility((v) => ({
      ...v,
      show: false,
    }));
  };

  const handleConfirm = (newDate) => {
    hideDatePicker();
    if (isDatePickerVisible.fieldType === "start") {
      filedsChangeHandler("startTime", newDate);
    } else if (isDatePickerVisible.fieldType === "end") {
      filedsChangeHandler("endTime", newDate);
    } else if (isDatePickerVisible.fieldType === "date") {
      filedsChangeHandler("date", newDate);
    }
  };
  
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

      <DateTimePickerModal
        isVisible={isDatePickerVisible.show}
        mode={isDatePickerVisible.mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="OK"
        is24Hour={true}
      />
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => showDatePicker("date", 'date')}
      >
        <Text style={styles.dateText}>
          {fields.date ? fullDate(fields.date) : 'Select date'}
        </Text>
      </TouchableOpacity>

      <View style={styles.timeContainer}>
        <TouchableOpacity
          style={styles.timeInnerContainer}
          onPress={() => showDatePicker("time", 'start')}
        >
          <Text style={styles.timeLabel}>Start time</Text>

          <Text style={styles.timeText}>
            {fields.startTime ? timeConvert(fields.startTime) : "-- : --"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeInnerContainer}
          onPress={() => showDatePicker("time", 'end')}
        >
          <Text style={styles.timeLabel}>End time</Text>
          <Text style={styles.timeText}>
            {fields.endTime ? timeConvert(fields.endTime) : "-- : --"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={onSearchHandler}>
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Text style={styles.btnTitle} weight="medium">
          Search
        </Text>
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
    borderWidth: 0,
  },
  picker: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  labelStyle: {
    color: "white",
    fontFamily: "RobotoRegular",
    fontSize: 14,
  },
  searchBtn: {
    height: 50,
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    overflow: "hidden",
    marginTop: 120
  
  },
  btnTitle: {
    color: "white",
  },
  dateContainer: {
    alignItems: "center",
    borderBottomColor: COLORS.SECONDARY,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderWidth: 1,
    height: 50,
    marginTop: 50,
  },
  dateText: {
    color: "white",
    fontSize: 25,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50
  },
  timeText: {
    color: 'white',
    fontSize: 33
  },
  timeLabel: {
    color: COLORS.SECONDARY,
    marginBottom: 20
  }
});
