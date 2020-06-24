import React from 'react'
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

import { TAB_ICONS } from '../styles/ICONS'
import { COLORS } from '../styles';

export const TabBarIcon = ({ name, focused }) => {
   
  return (
    <View style={styles.container}>
        {/* { focused && <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
          start={[0.5, 0]}
          end={[0.5, 1]}
        />} */}
      <Image style={styles.img} source={focused ? TAB_ICONS[name].active : TAB_ICONS[name].inActive } />
        {focused && <View style={styles.dot}/>}
    </View>
  );
}; 
const styles = StyleSheet.create({
    container: {
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
    
    },
    img:{
        width: 20,
        height: 20
    },
    bgGradient: {
        ...StyleSheet.absoluteFillObject
    },
    dot: {
        borderRadius: 100,
        backgroundColor: COLORS.BTN_GRADIENT_2,
        width: 4,
        height: 4,
        marginTop: 6
    }
})