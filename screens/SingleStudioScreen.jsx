import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fullTime } from "../utilities/extraFunctions";
import {
  CustomText as Text,
  WelcomeScrIndicators,
  GradientBTN,
} from "../components";
import uuid from "react-uuid";
import { ICONS, COLORS } from "../styles";
import { connect } from "react-redux";
import { addFavorites, removeFavorites, selectFavorites } from "../store/studios";

const mapStateToProps = state => ({
  favorites: selectFavorites(state)
})

export const SingleStudioScreen = connect(mapStateToProps, {addFavorites, removeFavorites})(({
  route: {
    params: { item: studio },
  },
  navigation,
  favorites,
  removeFavorites,
  addFavorites
}) => {
  const options = ["Studio", "Contact"];
  const [section, setSection] = useState(options[0]);
  
  const checkIsFav = () => {
    for(let item of favorites) {
      if(item.id === studio.id) {
        return true;
      }
    }
    return false;
  }
  let isFav = checkIsFav();

  const continueHandler = () => {
    navigation.navigate("confirmation-screen", { studio });
  };

  const favoritesHandler = () => {
    if (isFav) {
      removeFavorites(studio);
    } else {
      addFavorites(studio);
    }
  };
  
  const shareHandler = () => {
    console.log('share btn')
  }
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.container}>
      <View style={styles.imgPart}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image style={styles.icon} source={ICONS.back} />
          </TouchableOpacity>
          <View style={styles.leftHeader}>
            <TouchableOpacity onPress={shareHandler}>
              <Image style={styles.icon} source={ICONS.share} />
            </TouchableOpacity>
            <TouchableOpacity onPress={favoritesHandler}>
              <Image style={styles.icon} source={isFav ? ICONS.fav : ICONS.unfav} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={studio.imgArray}
          renderItem={({ item }) => {
            return (
              <>
                <LinearGradient
                  style={styles.bgGradient}
                  colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]}
                  start={[0.5, 1]}
                  end={[0.5, 0]}
                />
                <Image style={styles.img} source={{ uri: item }} />
              </>
            );
          }}
          horizontal={true}
          keyExtractor={() => uuid()}
        />
      </View>
      <View style={styles.studioInfo}>
        <Text weight="bold" style={styles.studioInfoHead}>
          Studio: {studio.studioName}
        </Text>
        <Text weight="medium" style={styles.studioInfoTime}>
          {studio.openTime} - {studio.closeTime}
        </Text>
      </View>
      
      <View style={styles.body}>
        <View
          style={[styles.dot, { left: section === options[0] ? "24%" : "74%" }]}
        />
        <View style={styles.bodyHeading}>
          {options.map((option) => (
            <TouchableOpacity key={uuid()} onPress={() => setSection(option)}>
              <Text
                style={[
                  styles.option,
                  {
                    color: option === section ? COLORS.BTN_GRADIENT_2 : "white",
                  },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bodyContent}>
          
          {
            section === 'Studio' ? 
            <Text style={styles.studioSectionText}>Every month roundup the freshest new web sites that have been
            released in the previous four weeks, with an eye-out for new
            ideas.</Text>
            :
            <View style={styles.contactSection}>
                <Text style={styles.contact}>{studio.adminstratorName}</Text>
                <Text style={styles.contact}>{studio.Number}</Text>
                <Text style={styles.contact}>{studio.Email}</Text>
            </View>
          }


          <View style={styles.footer}>
            <Text weight="medium" style={styles.totalText}>
              Total: {studio.rentPrice}$
            </Text>
            <GradientBTN
              style={styles.btn}
              title="Continue"
              onPress={continueHandler}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HEADER_COLOR
  },
  imgPart: {
    width: "100%",
    height: 300,
  },
  img: {
    width: Dimensions.get("window").width,
    resizeMode: "cover",
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  header: {
    position: "absolute",
    zIndex: 2,
    height: 80,
    alignItems: "center",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 60,
  },
  body: {
    flex: 1,
  },
  bodyHeading: {
    height: 50,
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
    backgroundColor: COLORS.BTN_GRADIENT_2,
    width: 4,
    height: 4,
    marginVertical: 10,
  },
  option: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
  footer: {
    height: 70,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.HEADER_COLOR,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  btn: {
    width: 150,
    height: 50,
  },
  bodyContent: {
    flex: 1,
    width: "100%",
    zIndex: 3,
  },
  studioInfo: {
    height: 60,
    backgroundColor: COLORS.HEADER_COLOR,
  },
  studioInfoHead: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  studioInfoTime: {
    color: "gray",
    textAlign: "center",
  },
  totalText: {
    color: "white",
    fontSize: 20,
  },
  studioSectionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 25,
    marginTop: 20
  },
  contact: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    color: 'white'
  },
  contactSection: {
    marginTop: 13
  }
});
