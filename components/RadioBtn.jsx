import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { COLORS } from "../styles";

export const RadioBtn = ({ options, value, onValueChange, style,  }) => (
  <View style={[styles.container, style]}>
    {options.map((option) => {
      const isSelected = value === option;
      return (
        <TouchableOpacity key={option} onPress={() => onValueChange(option)}>
          <View
            key={option}
            style={[
              styles.radioBtn,
              {
                opacity: isSelected ? 1 : 0.5,
                width: Dimensions.get('window').width / options.length
              },
            ]}
          >
            <Text
              style={[
                isSelected ? { fontWeight: "bold", borderBottomWidth: 2 } : {},
                styles.options,
                style,
              ]}
            >
              {option}
            </Text>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
 
  },
  radioBtn: {
    height: 42,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  options: {
    color: 'white',
    borderColor: 'white'
  }
});
