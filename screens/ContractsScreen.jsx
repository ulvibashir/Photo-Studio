import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Layout } from "../commons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ICONS } from "../styles";
import { CustomText as Text } from "../components";

export const ContractsScreen = () => {
  const [selected, setSelected] = useState("");

  const contracts = ["Rent Agreement", "Pet Weiver", "Rooftop Agreement"];
  return (
    <Layout title="Contracts" back={true}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />

        <Text weight="bold" style={styles.heading}>
          You shouldn't sign a contract for each booking
        </Text>
        <Text style={styles.description}>Sign only contract that you need</Text>
        {contracts.map((contract, i) => (
          <TouchableOpacity
            style={styles.row}
            key={i}
            onPress={() => setSelected(contract)}
          >
            <Text
              style={[
                { opacity: selected == contract ? 0.5 : 1 },
                styles.option,
              ]}
            >
              {contract}
            </Text>
            {selected == contract ? (
              <Image source={ICONS.ok} style={styles.icon} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  heading: {
    color: "white",
    fontSize: 23,
    textAlign: "center",

    paddingHorizontal: 16,
  },
  description: {
    fontSize: 20,
    paddingVertical: 28,
    color: "white",
    width: "100%",
    paddingHorizontal: 16,
    textAlign: "center",
    borderBottomColor: COLORS.HEADER_COLOR,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.HEADER_COLOR,
  },
  icon: {
    height: 20,
    width: 20,
  },
  option: {
    fontSize: 16,
    color: "white",
  },
});
