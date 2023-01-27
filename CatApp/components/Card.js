import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { RectButton } from './Button'
import { useNavigation } from '@react-navigation/native'
import { NFTTitle } from './SubInfo'

const Card = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>
      <View style={{width: "100%", height: 250}}>
        <Image
          source={{uri:data.url}}
          resizeMode="cover"
          style={{
            width: "100%", 
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        
      </View>
      
      <View style={{ width: 45, height: 8}}/>

      <View style={{width: "100%", padding: SIZES.font}}>
          <NFTTitle 
            title={data.id}
            titleSize={SIZES.large}
          />
          <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
          }}>
            <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })}/>
          </View>
      </View>
    </View>
  )
}

export default Card