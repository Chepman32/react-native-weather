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
    image.uri = "data:image/jpeg;base64,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"
  }
  if(status === "ясно" && period === "night" || status === "Clear" && period === "night") {
    image.uri = "https://pbs.twimg.com/media/DEZlBqjXcAErN8Z.jpg"
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
