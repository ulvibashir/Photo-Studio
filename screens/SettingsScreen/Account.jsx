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
import { Btn, GradientBTN } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});
export const Account = connect(mapStateToProps, { logOut })(
  ({ logOut, user }) => {
    const navigation = useNavigation();
    const date = new Date(user?.creationTime);
    const fullDate =
      date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    const content = [
      {
        heading: "Settings",
        screens: [
          { name: "Notifications", route: "notification-screen" },
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
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
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
              source={
                !!user?.image?.length ? { uri: user.image } : ICONS.avatar
              }
            />
          </View>
          <Text style={styles.userName}>
            {user.name} {user.surname}
          </Text>
          <Text style={styles.about}>Member since {fullDate}</Text>
          {!!user?.speciality || !!user?.city ? (
            <Text style={styles.about}>
              {user?.speciality}
              {!!user?.city && !!user?.speciality ? `, ` : ""}
              {user.city}
            </Text>
          ) : (
            <View />
          )}
          <View style={styles.btnWrapper}>
            <LinearGradient
              style={styles.btn}
              colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
              start={[0, 0.5]}
              end={[1, 0.5]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("contracts-screen")}
                style={styles.contractsBtn}
              >
                <Image source={ICONS.contracts} style={styles.icon} />

                <Text style={styles.btnTitle} weight="medium">
                  Contracts
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <GradientBTN
              title="Support"
              iconPath={ICONS.support}
              style={styles.btn}
            />
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.menu}
          data={content}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.menuHeader}>{item.heading}</Text>
              {item.screens.map((screen, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    if (screen.route) navigation.navigate(screen.route);
                  }}
                >
                  <Text style={styles.menuContent}>{screen.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          ListFooterComponent={
            <TouchableOpacity style={styles.logOut} onPress={logOut}>
              <Text style={styles.logOutTitle}>Sign Out</Text>
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
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  heading: {
    paddingVertical: 22,
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.HEADER_COLOR,
    height: 280,
    
  },
  imgContainer: {
    width: 70,
    height: 67,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
    overflow: "hidden",
  },
  img: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 8,
  },
  about: {
    color: "white",
    paddingVertical: 5,
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

  contractsBtn: {
    backgroundColor: COLORS.HEADER_COLOR,
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 55,
    borderRadius: 50,
    width: "48%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    overflow: "hidden",
    marginBottom: 16,
  },
  btnTitle: {
    fontSize: 15,
    color: "white",
    paddingLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  cricleGradient: {
    margin: 1,
    borderRadius: 5,
  },
  menu: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  menuHeader: {
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 9,
    color: "white",
  },
  menuContent: {
    fontSize: 16,
    paddingVertical: 6,
    color: "white",
  },
  logOut: {
    color: "white",
    paddingVertical: 15,
  },
  logOutTitle: {
    color: "white",
  },
});
