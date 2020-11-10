import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { constants } from "../constants"
import { GetDates, unixConverter } from "../scripts"
import { DayItem } from './DayItem';
import { WeatherApiCom } from './WeatherApiCom';
import { WeatherStack } from './WeatherStack';

export default function LocationComp({ setStatus, setPeriod }) {
  const [longitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [temp, setTemp] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [temp_min, setTemp_min] = useState("")
  const [temp_max, setTemp_max] = useState("")
  const [description, setDescription] = useState("")
  const [nameOfDay, setNameOfDay] = useState("")
  const [city, setCity] = useState("")
  const [wind, setWind] = useState("")
  const [sunSet, setSunSet] = useState("")
  const [sunRise, setSunRise] = useState("")
  const [dayTime, setDayTime] = useState("")
  const [humidity, setHumidity] = useState("")
  const [pressure, setPressure] = useState("")
  const [dates, setDates] = useState("")
  const [dayItems, setDayItems] = useState([])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
useEffect(() => {
  getData()
  setPeriod(dayTime)
  setStatus(description)
}, [])
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  async function getData() {
    try {
    let response = 
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&units=metric&&lang=ru&appid=9b8df7b7f2207d424cdfdef63a988822`);
    let responseJson = await response.json();
      if(location) {
        setLatitude(latitude => location.coords.latitude)
    setLongitude(longitude => location.coords.longitude)
    setDescription(responseJson.weather[0].description)
    setStatus(description)
    setCity(responseJson.name)
    setTemp(Math.ceil(responseJson.main.temp))
    setFeelsLike(responseJson.main.feels_like)
    setTemp_min(responseJson.main.temp_min)
    setTemp_max(responseJson.main.temp_max)
    setSunRise(unixConverter(responseJson.sys.sunrise))
    setSunSet(unixConverter(responseJson.sys.sunset))
    setWind(responseJson.wind.speed)
    setDayTime(responseJson.weather[0].icon[responseJson.weather[0].icon.length - 1] === "n" ? "night" : "day")
    setHumidity(responseJson.main.humidity)
    setPressure(responseJson.main.pressure * 0.75)
      }
  } 
  catch (error) {
    console.error(error);
  }
} 
async function get5DaysData() {
  try {
    let response =
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&&units=metric&&lang=ru&appid=2e356aefbd53857048281362b509db4a`
      );
    let responseJson = await response.json();
    var startDate = new Date();
    if(location) {
      let array = responseJson.list
      setDates(GetDates(startDate, 5))
      let startTime = 0
    console.log(array.length)
    const n = 3 //tweak this to add more items per line

const result = new Array(Math.ceil(array.length / n))
  .fill()
  .map(_ => array.splice(0, n))
const items = result.map(r => <DayItem data={r[0]} />)
console.log(result[0][2].main.temp)
setDayItems(result.map(r => <DayItem data={r[0]}/>))
    }
  } catch (error) {
    console.error(error);
  }
}
  return (
    <View style={styles.container}>
      {
        location
        ?
        <View>
          
      <ScrollView alwaysBounceVertical={true} >
      <Text style={styles.nameOfDay} >{nameOfDay && nameOfDay} </Text>
      <Text style={styles.temp} onPress={() => console.log(description)}>{location && temp}°</Text>
      <View style={styles.rowContainer}>
      <Text style={styles.temp_info} >Ощущается как: {location && feelsLike}°</Text>
      </View>
      <Text style={styles.city} >{city} </Text>
      <Text style={styles.description} >{location && description}</Text>
      <Text style={styles.info} >Скорость ветра: 
      <Text style={styles.temp_info} >{wind}м/с </Text>
      </Text>
        <Text style={styles.info} >Восход: 
        &nbsp;<Text style={styles.temp_info} >{sunRise}</Text> </Text>
        <Text style={styles.info} >Закат:
        &nbsp;<Text style={styles.temp_info} >{sunSet}</Text>
         </Text>
        <Text style={styles.info} >
          Минимальная температура воздуха:
          <Text style={styles.temp_info} >{location && temp_min}°</Text>
        </Text>
        <Text style={styles.info} >
        Максимальная температура воздуха:
          <Text style={styles.temp_info} >{location && temp_max}°</Text>
        </Text>
      <Text style={styles.info} >
        Влажность: <Text style={styles.temp_info} >{humidity}%</Text>
       </Text>
       <Text style={styles.info} >
        Давление: <Text style={styles.temp_info} >{pressure} мм. рт. ст.</Text>
       </Text>
       <WeatherApiCom latitude={latitude} longitude={longitude} />
       <WeatherStack latitude={latitude} longitude={longitude} />
      </ScrollView>
        </View>
        :
        <Text>Waiting...</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  city: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 40,
    color: "#E7C689"
  },
  temp: {
    fontSize: 90,
    fontWeight: "300",
    textAlign: "center",
    color: "tomato"
  },
  temp_info: {
    fontSize: 30,
    fontWeight: "600",
    color: "tomato"
  },
  nameOfDay: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: "400",
    color: "#fff"
  },
  description: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 40,
    textAlign: "center",
    color: "#E7C689"
  },
  row: {
    flexDirection: "row",
  },
  info: {
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 40,
    textAlign: "center",
    color: "#789DD9"
  } 
});