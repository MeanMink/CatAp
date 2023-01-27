import { Text, View, SafeAreaView, FlatList } from "react-native";
import { COLORS } from '../constants';
import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { UseGetAllCats } from "../hooks/getAllCatsQuery";


const Home = () => {

  const {data, isLoading} = UseGetAllCats();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}/>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({item}) => <Card data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>

        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{height: 300, backgroundColor: COLORS.primary}}/>
          <View style={{flex: 1, backgroundColor: COLORS.white}}/>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home