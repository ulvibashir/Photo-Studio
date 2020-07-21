import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { CustomText } from "./CustomText";
import { ICONS } from "../styles";
import { CardItem } from "./CardItem";
import { deleteUserCard } from "../store/auth";

export const CardList = ({ onPress, cards, deleteUserCard, addNewCard }) => {
  return (
    <View>
      {!!cards.length && (
        <FlatList
          data={cards.slice(0).reverse()}
          keyExtractor={(item) => item.number}
          renderItem={({ item }) => (
            <CardItem
              key={item.number}
              card={item}
              onPress={onPress}
              onPressIcon={() => deleteUserCard(item.id)}
            />
          )}
          ListFooterComponent={
            <TouchableOpacity style={styles.add} onPress={addNewCard}>
              <Image source={ICONS.add} style={styles.icon} />
              <CustomText style={styles.addTitle}>Add new card</CustomText>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  add: {
    flexDirection: "row",
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,.2)",
    marginBottom: 65,
  },
  icon: {
    width: 20,
    height: 25,
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
    marginBottom: 65,
  },
  addTitle: {
    color: "#a4a1a1",
    fontSize: 17,
  },
});
