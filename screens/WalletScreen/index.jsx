import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { COLORS, ICONS } from "../../styles";
import {
  CustomText as Text,
  CustomText,
} from "../../components";
import { SingleStudio } from "./SingleStudio";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "./Card";
import { connect } from "react-redux";
import { selectUsersCards, selectAuthStatus } from "../../store/auth";

const options = ["My Wallet", "Payment"];

const mapStateToProps = (state) => ({
  cards: selectUsersCards(state),
  status: selectAuthStatus(state)
});

export const WalletScreen = connect(mapStateToProps)(
  ({ navigation, cards , status}) => {
    const [section, setSection] = useState(options[0]);
    const data = [
      { name: "Studio D: Bookshelf", time: "5 hours" },
      { name: "Studio D: Bookshelf", time: "5 hours" },
      { name: "Studio D: Bookshelf", time: "5 hours" },
      { name: "Studio D: Bookshelf", time: "5 hours" },
      { name: "Studio D: Bookshelf", time: "5 hours" },
    ];

   /*  const borderStyle = {
      height: 68,
      borderColor: COLORS.BG_GRADIENT_2,
      marginBottom: 5,
    }; */
  
    const navigateCardForm = () =>{
      if (status) {
        navigation.navigate("form-screen");
      }
     else{ Alert.alert('Please sign in or sign up','',[
        {
          text: 'OK',
          onPress: ()=> navigation.navigate('settings-screen')
        },
        {
          text: 'Cancel',
          onPress: ()=>console.log('wallet-screen')
        }
      ])}
    }
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
        {/* <RadioBtn
        options={options}
        value={section}
        onValueChange={(v) => setSection(v)}
        style={[
          styles.radio,
          styles.border,
          borderStyle,
          section === options[0]
            ? { borderRightWidth: 1 }
            : { borderLeftWidth: 1 },
        ]}
      /> */}

        <View style={styles.heading}>
          {options.map((option) => (
            <TouchableOpacity onPress={() => setSection(option)}>
              <Text style={[styles.option]}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

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
              data={cards.slice(0).reverse()}
              renderItem={({ item }) => <Card {...item} />}
              ListFooterComponent={
                <TouchableOpacity
                  style={styles.add}
                  onPress={() => {
                    navigateCardForm()
                  }}
                >
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

              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => {
                 navigateCardForm()
                }}
              >
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
  }
);

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
    width: "100%",
    textAlign: "center",
    justifyContent: "space-between",
    fontSize: 20,
    fontWeight: "bold",
    opacity: 1,
    borderBottomWidth: 0,
    paddingVertical: 17,
    backgroundColor: COLORS.HEADER_COLOR,
  },
  heading: {
    height: 65,
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
    backgroundColor: "white",
    width: 4,
    height: 4,
    marginVertical: 8,
  },
  option: {
    color: "white",
    fontSize: 20,
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
    marginBottom: 65
  },
  addTitle: {
    color: "#a4a1a1",
    fontSize: 17,
  },
});
