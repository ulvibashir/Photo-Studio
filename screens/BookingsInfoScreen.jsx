import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Layout } from '../commons';
import { CustomText as Text, GradientBTN } from '../components';
import { COLORS } from '../styles';
import { fullDate, fullTime } from '../utilities/extraFunctions';

export const BookingsInfoScreen = ({
  route: {
    params: { item },
  },
  navigation
}) => {
  return (
    <Layout back={true} title="Info">
      <View style={styles.container}>
        <View style={styles.imgPart}>
          <Image style={styles.img} source={{ uri: item.imgArray[0] }} />
        </View>
        <View style={styles.bodyPart}>
          <Text style={styles.detailText} weight="regular">
            {item.fields.city}
          </Text>
          <Text style={styles.detailText} weight="regular">
            {item.studioName}
          </Text>
          <Text style={styles.detailText} weight="regular">
            {fullDate(item.fields.date)}
          </Text>
          <Text style={styles.detailText} weight="regular">
            {fullTime(item.fields.startTime, item.fields.endTime)}
          </Text>
          <Text style={styles.priceText} weight="medium">{item.rentPrice}$</Text>
        <GradientBTN title="OK" onPress={navigation.goBack} style={styles.btn}/>
        <Text style={styles.additional}>*For additional information please contact studio administrator</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HEADER_COLOR
  },
  imgPart: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginHorizontal: 20
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 100
  },
  bodyPart: {
    
    flex: 1
  },
  detailText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
  },
  priceText: {
    color: 'lightgreen',
    fontSize: 20,
    textAlign: 'center'
},
btn: {
  width: Dimensions.get('window').width - 40,
  alignSelf: 'center',
  marginTop: 20
},
additional: {
  textAlign: "center",
  color: 'gray',
  marginTop: 10
}
})