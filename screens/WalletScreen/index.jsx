import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { COLORS, ICONS } from "../../styles";
import {
  CustomText as Text,
  RadioBtn,
  Btn,
  CustomText,
} from "../../components";
import { SingleStudio } from "./SingleStudio";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "./Card";

const options = ["My Wallet", "Payment"];
//{ name: "Visa - 1405" }, { name: "Mastercard - 7080" }
export const WalletScreen = ({ navigation }) => {
  const [section, setSection] = useState(options[0]);
  const data = [
    { name: "Studio D: Bookshelf", time: "5 hours" },
    { name: "Studio D: Bookshelf", time: "5 hours" },
    { name: "Studio D: Bookshelf", time: "5 hours" },
    { name: "Studio D: Bookshelf", time: "5 hours" },
    { name: "Studio D: Bookshelf", time: "5 hours" },
  ];

  const cards = [{ name: "Visa - 1405" }, { name: "Mastercard - 7080" }];
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
      <View
        style={[styles.dot, { left: section === options[0] ? "25%" : "75%" }]}
      />
      <RadioBtn
        options={options}
        value={section}
        onValueChange={(v) => setSection(v)}
        style={styles.radio}
      />
      <View style={styles.content}>
        {section === "My Wallet" ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <SingleStudio
                {...item}
                onPress={() => navigation.navigate("studio-screen")}
              />
            )}
          />
        ) : !!cards.length ? (
          <FlatList
            data={cards}
            renderItem={({ item }) => <Card {...item} />}
            ListFooterComponent={
              <TouchableOpacity style={styles.add} onPress={()=>{navigation.navigate('card-screen')}}>
                <Image source={ICONS.add} style={styles.icon} />
                <CustomText style={styles.addTitle}>Add new card</CustomText>
              </TouchableOpacity>
            }
          />
        ) : (
          <View style={styles.btnContainer}>
            <CustomText style={styles.text}>
              Every month roundup the freshest new web sites that have been
              released in the previous four weeks, with an eye-out for new
              ideas.
            </CustomText>
            <TouchableOpacity style={styles.addBtn}  onPress={()=>{navigation.navigate('card-screen')}}>
              <LinearGradient
                style={styles.bgGradient}
                colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
                start={[0, 0.5]}
                end={[1, 0.5]}
              />
              <Image source={ICONS.card} style={styles.icon} />
              <Text style={styles.btnTitle} weight="medium">
                Payment Card
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: "center",
    //alignItems: "center",
  },

  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  radio: {
    color: "white",
    justifyContent: "space-around",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 1,
    borderBottomWidth: 0,
    paddingVertical: 10,
    backgroundColor: COLORS.HEADER_COLOR,
  },
  dot: {
    position: "absolute",
    zIndex: 1,
    borderRadius: 100,
    backgroundColor: "white",
    width: 4,
    height: 4,
    marginVertical: 10,
  },
  btnContainer: {
    paddingHorizontal: 20,
    marginTop: "50%",
  },
  text: {
    textAlign: "center",
    color: "white",
    lineHeight: 25,
    fontSize: 17,
  },
  addBtn: {
    height: 55,
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    overflow: "hidden",
  },
  btnTitle: {
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  add: {
    flexDirection: "row",
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,.2)",
  },
  addTitle: {
    color: "#a4a1a1",
    fontSize: 17,
  },
});