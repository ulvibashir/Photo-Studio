import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from '../styles';
import { CustomText as Text } from './CustomText';
import { useNavigation } from '@react-navigation/native';

export const StudioListItem = ({ item, fields = {}, isFav = false }) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    if (isFav) {
      navigation.navigate("single-studio-screen-fav", { item, fields });
    } else {
      navigation.navigate("single-studio-screen", { item, fields });
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <ImageBackground
        style={styles.imgContainer}
        source={{ uri: item.imgArray[0] }}
      >
        <LinearGradient
          style={styles.bgGradient}
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]}
          start={[0.5, 0]}
          end={[0.5, 1]}
        />
        <View style={styles.footer}>
          <LinearGradient
            style={styles.bgGradient}
            colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          />
          <View style={styles.row}>
            <View>
              <Text weight="bold" style={[styles.main, styles.space]}>
                Studio: {item.studioName}
              </Text>
              <Text style={styles.desc}>{item.Adress}</Text>
            </View>
            <View>
              <Text style={[styles.desc, styles.space]}>from</Text>
              <Text weight="bold" style={styles.main}>
                {item.rentPrice}$
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  },
  footer: {
    height: 70,
    width: '100%',
    backgroundColor: 'gray'
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
  },
   main: {
     color:'white',
     fontSize: 18
   },
   desc: {
     color: 'gray'
   },
   space: {
     marginBottom: 10
   }
})