import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Button, ColorPropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Layout } from "../commons";
import { StudioListBody, CustomText as Text} from "../components";
import { COLORS } from "../styles";
import { fullTime, fullDate } from "../utilities/extraFunctions";
import { connect } from "react-redux";
import { getStudios, selectStudios, selectFields } from "../store/studios";

const mapStateToProps = state => ({
  studios: selectStudios(state),
  fields: selectFields(state)
})
export const HomeScreen = connect(mapStateToProps, {getStudios})(({
  navigation,
  getStudios,
  studios,
  fields
}) => {

  useEffect(() => {
    getStudios();
  }, [])

  return (
    <Layout back={true} title={fields.city}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.bgGradient}
          colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />

        <View style={styles.filterContainer}>
          <View style={styles.filterItem}>
            <Text style={styles.filterText}>{fullDate(fields.date, true)}</Text>
          </View>
          <View style={[styles.filterItem, styles.border]}>
            <Text style={styles.filterText}>{fields.startTime && fields.endTime ? fullTime(fields.startTime,fields.endTime) : '--:--'}</Text>
          </View>
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <StudioListBody data={studios}/>
      </View>
    </Layout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  bgGradient: {
    //...StyleSheet.absoluteFill
  },
  filterContainer: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.BG_GRADIENT_2
  },
  filterItem: {
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',

    height: '100%',
    justifyContent: 'center'
  },
  filterText: {
    fontSize: 16,
    color: 'white'
  },
  border: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gray'
  }
});
