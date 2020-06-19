import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import { useSafeArea } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {ICONS} from '../styles'
export const Layout = ({
  children,
  back = false,
  cancel = false,
  title = "",
}) => {
  const insets = useSafeArea();
  const navigation = useNavigation();

  const left = back ? 'back' : cancel ? 'cancel' : false
  const right = false;
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        {left ? (
          <TouchableOpacity style={styles.headerLeftBtn} onPress={() => {navigation.goBack()}}>
            <Image source={ICONS[left]} style={styles.headerLeftImg} />
          </TouchableOpacity>
        ) : (
          <View />
        )}

        <Text>{title}</Text>

        <View />
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
    paddingHorizontal: 20
  },
  body: {
    flex: 1,
  },
  headerLeftBtn: {
      height: 30,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center'
  },
  headerLeftImg: {
      width: 20,
      height: 20
  }
});
