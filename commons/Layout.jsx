import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


import { ICONS, COLORS } from "../styles";
import { CustomText as Text } from "../components";
export const Layout = ({
  children,
  back = false,
  cancel = false,
  ok = false,
  title = "",
  onPressRightIcon,
}) => {
  const insets = useSafeArea();
  const navigation = useNavigation();

  const left = back ? "back" : cancel ? "cancel" : false;
  const right = ok ? "ok" : "";
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
      <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
        {left ? (
          <TouchableOpacity
            style={styles.headerLeftBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={ICONS[left]} style={styles.headerImg} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyView}/>
        )}

        <Text weight="medium" style={styles.title}>{title}</Text>

        {right ? (
          <TouchableOpacity style={styles.headerLeftBtn} onPress={onPressRightIcon}>
            <Image source={ICONS[right]} style={styles.headerImg} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyView}/>
        )}
      </View>
      <View style={styles.body}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject
  },
  body: {
    flex: 1,
  },
  headerLeftBtn: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImg: {
    width: 20,
    height: 20,
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  emptyView: {
    height: 30,
    width: 30
  }
});
