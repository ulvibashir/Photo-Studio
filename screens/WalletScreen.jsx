import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import uuid from "react-uuid";

import { COLORS, ICONS } from "../styles";
import {
  CustomText as Text,
  GradientBTN,
  StudioHistoryList,
  CardList,
} from "../components";
import {
  selectUsersCards,
  selectAuthStatus,
  deleteUserCard,
} from "../store/auth";

const options = ["My Wallet", "Payment"];

const mapStateToProps = (state) => ({
  cards: selectUsersCards(state),
  status: selectAuthStatus(state),
});

export const WalletScreen = connect(mapStateToProps, { deleteUserCard })(
  ({ navigation, cards, status, deleteUserCard }) => {
    const [section, setSection] = useState(options[0]);
    const data = [
      { name: "Studio A: Bookshelf", time: "5 hours" },
      { name: "Studio B: Bookshelf", time: "5 hours" },
      { name: "Studio C: Bookshelf", time: "5 hours" },
      { name: "Studio D: Bookshelf", time: "5 hours" },
      { name: "Studio R: Bookshelf", time: "5 hours" },
    ];

    const navigateCardForm = () => {
      if (status) {
        navigation.navigate("form-screen");
      } else {
        Alert.alert("Please sign in or sign up", "", [
          {
            text: "OK",
            onPress: () => navigation.navigate("settings-stack"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("wallet-screen"),
          },
        ]);
      }
    };
    const handleDelete = (id) => {
      Alert.alert("Do you want to remove this card from your wallet?", "", [
        { text: "OK", onPress: () => deleteUserCard(id) },
        { text: "Cancel", onPress: () => console.log("cancel") },
      ]);
    };
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

        <View style={styles.heading}>
          {options.map((option) => (
            <TouchableOpacity key={uuid()} onPress={() => setSection(option)}>
              <Text
                style={[
                  styles.option,
                  {
                    color: option === section ? COLORS.BTN_GRADIENT_2 : "white",
                  },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.content}>
          {section === "My Wallet" ? (
            <StudioHistoryList
              data={data}
              onPress={() => navigation.navigate("studio-screen")}
            />
          ) : !!cards.length ? (
            <CardList
              key={() => uuid()}
              cards={cards}
              deleteUserCard={handleDelete}
              onPress={() => {
                navigateCardForm();
              }}
            />
          ) : (
            <View style={styles.btnContainer}>
              <Text style={styles.text}>
                Every month roundup the freshest new web sites that have been
                released in the previous four weeks, with an eye-out for new
                ideas.
              </Text>

              <GradientBTN
                style={{ marginTop: 18 }}
                title="Payment Card"
                iconPath={ICONS.card}
                onPress={navigateCardForm}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgGradient: {
    ...StyleSheet.absoluteFill,
  },

  heading: {
    height: 65,
    paddingVertical: 16,
    color: "white",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.HEADER_COLOR,
  },
  dot: {
    position: "absolute",
    zIndex: 1,
    borderRadius: 100,
    backgroundColor: COLORS.BTN_GRADIENT_2,
    width: 4,
    height: 4,
    marginVertical: 8,
  },
  option: {
    color: "white",
    fontSize: 20,
    padding: 20,
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
});
