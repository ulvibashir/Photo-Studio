import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { ICONS } from "../styles";
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
        {left ? (
          <TouchableOpacity
            style={styles.headerLeftBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={ICONS[left]} style={styles.headerLeftImg} />
          </TouchableOpacity>
        ) : (
          <View />
        )}

        <Text>{title}</Text>

        {right ? (
          <TouchableOpacity style={styles.headerLeftBtn} onPress={onPressRightIcon}>
            <Image source={ICONS[right]} style={styles.headerLeftImg} />
          </TouchableOpacity>
        ) : (
          <View />
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
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
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
  headerLeftImg: {
    width: 20,
    height: 20,
  },
});
