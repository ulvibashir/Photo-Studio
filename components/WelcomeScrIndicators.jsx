import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export const WelcomeScrIndicators = ({ stepCount, step }) => {
  const indicators = [];
  for (let i = 1; i <= stepCount; i++) {
    if (i === step) {
      indicators.push("activeCircle");
    } else {
      indicators.push("circle");
    }
  }
  return <View style={styles.container}>
      {
          indicators.map((item, i) => {
            return(
                <View style={item === 'activeCircle' ? styles.activeCircle : styles.circle} key={i}/>
            )
          })
      }
  </View>;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  circle: {
      backgroundColor: 'gray',
      width: 8,
      height: 8,
      borderRadius: 100,
      marginHorizontal: 3

  },
  activeCircle: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 100,
    marginHorizontal: 3

  },
});
