import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants"
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc} from "../components"
import React from "react"

const DetailsHeader = ({ data, navigation}) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={{uri: data.url}}
      resizeMode="cover"
      style={{ width: '100%', height: '100%'}}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <View style={{ width: 45, height: 8}}/>
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details