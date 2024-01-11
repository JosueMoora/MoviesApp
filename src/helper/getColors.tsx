import { getColors } from 'react-native-image-colors';

export const getColor = async (uri: string) => {
    const colors = await getColors(uri, {})
    let primary
    let secondary
    let third
    if (colors.platform === 'android'){
        primary = colors.dominant
        secondary = colors.average
        third = colors.lightVibrant
    } else if (colors.platform === 'ios') {
        primary = colors.primary
        secondary = colors.secondary
        third = colors.background
    }
    return [primary, secondary, third]


  };
