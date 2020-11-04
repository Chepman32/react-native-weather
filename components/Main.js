import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { constants } from "../constants"
import { unixConverter } from "../scripts"
import { DayItem } from './DayItem';

export default function LocationComp({ setStatus, setPeriod }) {
  const [longitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [temp, setTemp] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [description, setDescription] = useState("")
  const [items, setItems] = useState([])
  const [nameOfDay, setNameOfDay] = useState("")
  const [city, setCity] = useState("")
  const [wind, setWind] = useState("")
  const [sunSet, setSunSet] = useState("")
  const [sunRise, setSunRise] = useState("")
  const [dayTime, setDayTime] = useState("")

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
  get5DaysData()
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
    setCity(responseJson.name)
    setTemp(Math.ceil(responseJson.main.temp))
    setFeelsLike(responseJson.main.feels_like)
    setSunRise(unixConverter(responseJson.sys.sunrise))
    setSunSet(unixConverter(responseJson.sys.sunset))
    setWind(responseJson.wind.speed)
    console.log(responseJson)
    setDayTime(responseJson.weather[0].icon[responseJson.weather[0].icon.length - 1] === "n" ? "night" : "day")
    }
  } catch (error) {
    console.error(error);
  }
} 
async function get5DaysData() {
  try {
    let response = 
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Moscow&units=metric&appid=2e356aefbd53857048281362b509db4a`);
    let responseJson = await response.json();
    if(location) {
      let array = responseJson.list.slice(0, 1)
    getNameOfDay(array)
    setItems(responseJson.list.map(i => <DayItem temp={i.main.temp} />))
    }
  } catch (error) {
    console.error(error);
  }
}
const getNameOfDay = (array) => {
  let dateObj = new Date()
  let dayName = dateObj.toLocaleString("default", {weekday: "long"})
  setNameOfDay(dayName)
  switch(dayName) {
    case "Понедельник":
      array[0].dayName = "Вторник"
      case "Вторник":
      array[0].dayName = "Среда"
      case "Среда":
      array[0].dayName = "Четверг"
      case "Четверг" :
      array[0].dayName = "Пятница"
      case "Пятница" :
      array[0].dayName = "суббота"
      case "Суббота" :
      array[0].dayName = "Воскресенье"
      case "Воскресенье" :
      array[0].dayName = "Понедельник"
      default:
        array[0].dayName = "Вторник"
  }
}
  return (
    <View style={styles.container}>
      <Text style={styles.nameOfDay} >{nameOfDay && nameOfDay} </Text>
      <Text style={styles.temp} onPress={() => console.log(feelsLike)}>{location && temp}°</Text>
      <View style={styles.rowContainer}>
      <Text style={{...styles.temp, fontSize: 30, fontWeight: "600"}} >Ощущается как: {location && feelsLike}°</Text>
      </View>
      <Text style={styles.city} >{city} </Text>
      <Text style={styles.description} >{location && description}</Text>
      <ScrollView>
      <View style={styles.rowContainer}>
      <Text style={styles.info} >Скорость ветра: {wind}м/с </Text>
        <Text style={styles.info} >Восход: {sunRise} </Text>
        <Text style={styles.info} >Закат: {sunSet} </Text>
      </View>
      </ScrollView>
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
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 40,
    color: "#E7C689"
  },
  temp: {
    marginTop: 50,
    fontSize: 120,
    fontWeight: "300",
    color: "tomato"
  },
  nameOfDay: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: "400",
    color: "#fff"
  },
  description: {
    marginTop: 100,
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "600",
    lineHeight: 40,
    color: "#E7C689"
  },
  row: {
    flexDirection: "row",
  },
  info: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 40,
    color: "#789DD9"
  }
});