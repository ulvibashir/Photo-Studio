import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Switch,
  FlatList,
  TouchableOpacity,
} from "react-native";
import uuid from 'react-uuid'
import { CustomText } from "../components";
import { Layout } from "../commons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles";
const notifications = [
  {label: "E-mail", isEnabled: false },
  {label: "Push notifications", isEnabled: false },
  {label: "Phone", isEnabled: false },
  {label: "News and offers to e-mail", isEnabled: false },
];
export const NotificationScreen = (params) => {
  
  const [options, setOptions] = useState(notifications);
  
  const toggleSwitch = (value) => {
    setOptions(
      options.map((option) => {
        if (option.label == value) {
          return {
            ...option,
            isEnabled: !option.isEnabled,
          };
        }
        return option
      }),
    );
  };

  return (
    <Layout title="Notifications" back={true}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <FlatList
          data={options}
          keyExtractor={() => uuid()}
          renderItem={({ item }) => (
            <View  style={styles.row}>
              <CustomText style={styles.label}>{item.label}</CustomText>
              <Switch
                trackColor={{ false: "#767577", true: "#fff" }}
                thumbColor={item.isEnabled ? COLORS.BTN_GRADIENT_1 : "white"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(item.label)}
                value={item.isEnabled}
              />
            </View>
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  row: {
      flexDirection: "row",
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.HEADER_COLOR,
      padding: 17,

  },
  label: {
      color: 'white',
      fontSize: 16
  }
});
