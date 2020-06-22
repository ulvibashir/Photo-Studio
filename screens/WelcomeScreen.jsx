import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  Btn as Button,
  CustomText as Text,
  WelcomeScrIndicators,
  WelcomeScrContent,
} from "../components";
import { connect } from "react-redux";
import { setWelcomeScreenEnabled } from "../store/studios";

export const WelcomeScreen = connect(null, {setWelcomeScreenEnabled})(({setWelcomeScreenEnabled}) => {
  const [step, setStep] = useState(0);
  const images = [
      "https://images.unsplash.com/photo-1520940115356-52e16be4351a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1512699347226-42125ac596cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1587613990174-1f14ba3be7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1587613981449-f3962dbba9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  ];

  const onPressHandler = () => {
    if (step + 1 === images.length) {
        setWelcomeScreenEnabled();
        //setStep(0)
    } else {
      setStep((v) => v + 1);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={false} />
      <ImageBackground
        imageStyle={styles.imgStyle}
        source={{
          uri: images[step],
        }}
        style={styles.img}
      >
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(0,0,0,0.9)", "rgba(255,255,255,0.3)"]}
        />

        <Text weight="bold" style={styles.headerTitle}>
          Hakuna Matata
        </Text>

        <WelcomeScrContent step={step}/>

        <View style={styles.indicatiorBtn}>
          <Button
            title="Skip"
            style={styles.btn}
            onPress={onPressHandler}
            titleStyle={styles.btnTitle}
          />
          <WelcomeScrIndicators stepCount={images.length} step={step + 1} />
        </View>
        <View />
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    zIndex: 2000,
  },
  btn: {
    width: Dimensions.get("window").width - 70,
    zIndex: 2000,
  },
  btnTitle: {
    color: "white",
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  headerTitle: {
    marginTop: 40,
    fontSize: 25,
    color: "white",
    position: "absolute",
    top: 0,
  },
});
