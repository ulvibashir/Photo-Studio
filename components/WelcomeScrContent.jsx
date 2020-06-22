import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { CustomText as Text } from "./CustomText";


export const WelcomeScrContent = ({ step }) => {

  const texts = [
    {
      main: "Rental Photo Studio",
      desc:
        "Every month roundup the freshest new web sites that have been released in the previous four weeks, with an eye-out for new ideas",
    },
    [
      {
        main: "30+",
        desc: "Photo Studios",
      },
      {
        main: "64 000",
        desc: "Sq.ft of Space",
      },
      {
        main: "20 153",
        desc: "Happy Customer",
      },
      {
        main: "75 321",
        desc: "Succesful Photos",
      },
    ],
    {
      main: "Best Photo Place",
      desc:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, .",
    },

    {
      main: "Lorem Ipsum dolor sit amet",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <View style={styles.container}>
      {step !== 1 && (
        <>
          <Text weight="medium" style={styles.title}>
            {texts[step].main}
          </Text>
          <Text weight="regular" style={styles.desc}>
            {texts[step].desc}
          </Text>
        </>
      )}
      {step === 1 && (
        <View style={styles.wrapper}>
          {texts[step].map((item, i) => (
            <View key={i} style={styles.wrapperItem}>
              <Text weight="medium" style={styles.title}>
                {item.main}
              </Text>
              <Text weight="regular" style={styles.desc}>
                {item.desc}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginBottom: 170,
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 18,
  },
  desc: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 25
  },
  wrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
  },
  wrapperItem: {
      width: Dimensions.get("window").width  / 4 + 10,
      marginBottom: 30
      
  }
});
