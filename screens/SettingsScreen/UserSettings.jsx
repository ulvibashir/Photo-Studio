import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { connect } from "react-redux";

import { logOut, selectUserData } from "../../store/auth";
import { COLORS, ICONS } from "../../styles";
import { Btn } from "../../components";
import { useNavigation } from "@react-navigation/native";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});
export const UserSettings = connect(mapStateToProps, { logOut })(
  ({ logOut, user }) => {
    const navigation = useNavigation();
    const date = new Date(user?.creationTime);
    const fullDate =
      date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    const content = [
      {
        heading: "Settings",
        screens: [
          { name: "Notifications", route: "" },
          { name: "Phone Verification", route: "" },
        ],
      },
      {
        heading: "Information",
        screens: [
          { name: "About", route: "" },
          { name: "Terms of Use", route: "" },
        ],
      },
      {
        heading: "Other",
        screens: [
          { name: "Invite friend, get $30", route: "" },
          { name: "Rate the App", route: "" },
        ],
      },
    ];
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <TouchableOpacity
            style={styles.editWrapper}
            onPress={() => {
              navigation.navigate("edit-screen");
            }}
          >
            <Image style={styles.edit} source={ICONS.edit} />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={!!user?.image?.length ? { uri: user.image } : ICONS.avatar}
            />
          </View>
          <Text style={styles.userName}>
            {user.name} {user.surname}
          </Text>
          <Text style={styles.time}>Member since {fullDate}</Text>
          <Text style={styles.time}>
            {user?.speciality}
            {!!user?.city &&   !!user?.speciality  ?`, ` : ""}
            {user.city}
          </Text>
          <View style={styles.btnWrapper}>
            <Btn
              titleStyle={styles.btnText}
              style={[styles.contractsBtn, styles.btn]}
              title="Contracts"
              onPress={() => {}}
            />
            <Btn style={styles.btn} title="Support" onPress={() => {}} />
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.menu}
          data={content}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.menuHeader}>{item.heading}</Text>
              {item.screens.map((screen, i) => (
                <TouchableOpacity key={i}>
                  <Text style={styles.menuContent}>{screen.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          ListFooterComponent={
            <TouchableOpacity style={styles.logOut} onPress={logOut}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item, i) => i.toString()}
        />
      </View>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    paddingVertical: 22,
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.PRIMARY,
    height: 250,
    marginBottom: 8,
  },
  imgContainer: {
    width: 70,
    height: 67,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
    
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  editWrapper: {
    position: "absolute",
    top: 10,
    right: 5,
    alignSelf: "flex-end",
  },
  edit: {
    width: 30,
    height: 30,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    width: 180,
  },
  contractsBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 2,
    borderColor: "black",
  },
  btnText: {
    color: "black",
  },
  menu: {
    paddingHorizontal: 20,
  },
  menuHeader: {
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 7,
  },
  menuContent: {
    fontSize: 16,
    paddingVertical: 4,
  },
  logOut: {
    // paddingVertical: 5,
    marginTop: 15,
  },
});
