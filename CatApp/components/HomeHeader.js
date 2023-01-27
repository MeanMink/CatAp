import { View, Text, Image, TextInput } from 'react-native'
import { FONTS, COLORS, SIZES, assets } from '../constants'

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large,
        color: COLORS.white, marginTop: SIZES.base / 2 }}>
          CATS
        </Text>
        
        <View style={{ width: 45, height: 45}}/>
          
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small,
        color: COLORS.white}}>
          Hello👋
        </Text>

        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large,
        color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Let's find you a cat
        </Text>

      </View>
    </View>
  )
}

export default HomeHeader
