import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LocationComp from './components/Main';

export default function App() {
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
    image.uri = "https://petapixel.com/assets/uploads/2019/01/eyesauronfeat.jpg"
  }
  if(status === "пасмурно" && period === "day" || status === "overcast clouds" && period === "day") {
    image.uri = "https://227527-695547-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/Dark-clouds-hover-over-Kolkata-on-an-overcast-day-1.jpg"
  }
  if(status === "пасмурно" && period === "night" || status === "overcast clouds" && period === "night") {
    image.uri = "https://i.pinimg.com/originals/ce/2b/93/ce2b932990c92ea3f8de4930311e4547.jpg"
  }
  const imageSelecter = () => {
    switch(status) {
      case "light rain":
        image.uri = "https://diplo.com.br/storage/2019/02/problemas-aeroportos-overbooking.jpeg"
        case "few clouds":
      image.uri = "https://www.goodfreephotos.com/albums/sky-and-clouds/clouds-on-a-mostly-clear-sky.jpg"
        case "broken clouds":
      image.uri = "https://i1.wp.com/centrefor.wales/wp-content/uploads/2020/04/adi-constantin-C8Z5DvtWQMw-unsplash.jpg?resize=1080%2C675&ssl=1"
      default: image.uri = ""
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}> 
      <LocationComp setStatus={setStatus} setPeriod={setPeriod} />
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center"
  }
});
