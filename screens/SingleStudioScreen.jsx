import React from 'react';
import { View } from 'react-native';
import { CustomText as Text } from '../components';

export const SingleStudioScreen = ({route: {params: {item}}}) => {
  return(
      <View>
          <Text>
            {item?.studioName}
          </Text>
      </View>
  )
}