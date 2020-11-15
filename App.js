import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, Dimensions, SafeAreaView } from 'react-native';
import * as Font from "expo-font"
import { AppLoading } from "expo"
import { Ionicons } from '@expo/vector-icons';
import LocationComp from './components/Main';
const { width, height } = Dimensions.get("window")
export default function App() {
  useEffect(() => {
    imageSelecter()
  }, [])
  const [isReady, setIsready] = useState(false)
  const [status, setStatus] = useState("")
  const [period, setPeriod] = useState("")
  const image = { uri: "" };
  if(status === "light rain" && period === "day" || status === "небольшой дождь" && period === "day") {
    image.uri = "https://diplo.com.br/storage/2019/02/problemas-aeroportos-overbooking.jpeg"
  }
  if(status === "light rain" && period === "night" || status === "небольшой дождь" && period === "night") {
    image.uri = "https://img4.goodfon.com/wallpaper/nbig/a/e9/art-yuumei-gorod-perekrestok-dvoe-noch-most-zont-dozhd-ogni.jpg"
  }
  if(status === "few clouds" && period === "day" || status === "небольшая облачность" && period === "day") {
    image.uri = "https://www.goodfreephotos.com/albums/sky-and-clouds/clouds-on-a-mostly-clear-sky.jpg"
  }
  if(status === "few clouds" && period === "night" || status === "небольшая облачность" && period === "night") {
    image.uri = "https://s3-ap-northeast-1.amazonaws.com/thegate/2020/08/06/19/51/06/unkai.jpg"
  }
  if(status === "broken clouds" && period === "night") {
    image.uri = "https://i1.wp.com/centrefor.wales/wp-content/uploads/2020/04/adi-constantin-C8Z5DvtWQMw-unsplash.jpg?resize=1080%2C675&ssl=1"
  }
  if(status === "broken clouds" && period === "day") {
    image.uri = "https://techcrunch.com/wp-content/uploads/2012/04/clouds.jpg"
  }
  if( status === "scattered clouds") {
    image.uri = "https://rv-ryazan.ru/wp-content/uploads/2020/03/hK-QgWhNz-g.jpg"
  }
  if(status === "пасмурно" && period === "day" || status === "overcast clouds" && period === "day") {
    image.uri = "https://vsarov.ru/wp-content/uploads/2019/08/69481087_125237678775897_4922468119616268445_n.jpg"
  }
  if(status === "пасмурно" && period === "night" || status === "overcast clouds" && period === "night") {
    image.uri = "https://i.pinimg.com/originals/ce/2b/93/ce2b932990c92ea3f8de4930311e4547.jpg"
  }
  if(status === "переменная облачность" && period === "day" || status === "overcast clouds" && period === "day") {
    image.uri = "https://227527-695547-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/Dark-clouds-hover-over-Kolkata-on-an-overcast-day-1.jpg"
  }
  if(status === "переменная облачность" && period === "night" || status === "overcast clouds" && period === "night") {
    image.uri = "https://i.pinimg.com/originals/ce/2b/93/ce2b932990c92ea3f8de4930311e4547.jpg"
  }
  if(status === "ясно" && period === "day" || status === "Clear" && period === "day") {
    image.uri = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Clear_sky_Mountain.jpg"
  }
  if(status === "ясно" && period === "night" || status === "Clear" && period === "night") {
    image.uri = "https://pbs.twimg.com/media/DEZlBqjXcAErN8Z.jpg"
  }
  if(status === "облачно с прояснениями") {
    image.uri = "https://novostipmr.com/sites/default/files/field/image/202005/20201505236.jpg"
  }
  const imageSelecter = () => {
    switch(status) {
      case "light rain":
        image.uri = "https://diplo.com.br/storage/2019/02/problemas-aeroportos-overbooking.jpeg"
        case "few clouds":
      image.uri = "https://www.goodfreephotos.com/albums/sky-and-clouds/clouds-on-a-mostly-clear-sky.jpg"
        case "broken clouds":
      image.uri = "https://i1.wp.com/centrefor.wales/wp-content/uploads/2020/04/adi-constantin-C8Z5DvtWQMw-unsplash.jpg?resize=1080%2C675&ssl=1"
      case "облачно с прояснениями":
      image.uri = "https://i1.wp.com/centrefor.wales/wp-content/uploads/2020/04/adi-constantin-C8Z5DvtWQMw-unsplash.jpg?resize=1080%2C675&ssl=1"
      default: image.uri = ""
    }
  }
  const Wrapper = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity
  async function loadApp() {
    await Font.loadAsync({
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf")
    })
  }
  if(!isReady) {
    return (
      <AppLoading startAsync={loadApp} onFinish={() => setIsready(true)}/>
    )
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.container} >
        <Wrapper onPress={() => console.log("pressed")} style={styles.btn} >
          <View>
          <Ionicons name="ios-settings" size = {64} color = "#F2965B" >
        </Ionicons>
          </View>
        </Wrapper>
      <LocationComp setPeriod={setPeriod} setStatus={setStatus}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: width >= 1920 ? height * 0.01 : height * 0.03,
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center"
  },
  btn: {
    position: "absolute",
    top: 10,
    right: 40
  }
});
