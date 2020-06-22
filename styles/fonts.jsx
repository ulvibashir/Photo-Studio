import * as Font from 'expo-font'

import RobotoRegular from '../assets/Fonts/Roboto-Regular.ttf'
import RobotoMedium from '../assets/Fonts/Roboto-Medium.ttf'
import RobotoBold from '../assets/Fonts/Roboto-Bold.ttf'
import RobotoLight from '../assets/Fonts/Roboto-Light.ttf'

export const fonts = {
    light: 'RobotoLight',
    regular: 'RobotoRegular',
    medium: 'RobotoMedium',
    bold: 'RobotoBold'
    
}

export const loadFonts = () => {
    return Font.loadAsync({
        RobotoBold,
        RobotoMedium,
        RobotoRegular,
        RobotoLight
    })
};