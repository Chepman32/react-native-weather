import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { constants } from "../constants"
import { GetDates, unixConverter } from "../scripts"
import { DayItem } from './DayItem';
import { WeatherApiCom } from './WeatherApiCom';
import { WeatherStack } from './WeatherStack';
import { Weatherbit } from './Weatherbit';
import { styles } from '../styles';

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
  const [sea_level, setSea_level] = useState("")
  const [units, setUnits] = useState("")
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
  setBckgrnd()
  getDayName()
}, [])
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  function getDayName() {
    var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Воскресенье";
  weekday[1] = "Понедельник";
  weekday[2] = "Вторник";
  weekday[3] = "Среда";
  weekday[4] = "Четверг";
  weekday[5] = "Пятница";
  weekday[6] = "Суббота";

  var n = weekday[d.getDay()];
  setNameOfDay(n)
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
    setFeelsLike(Math.ceil(responseJson.main.feels_like))
    setTemp_min(responseJson.main.temp_min)
    setTemp_max(responseJson.main.temp_max)
    setSunRise(unixConverter(responseJson.sys.sunrise))
    setSunSet(unixConverter(responseJson.sys.sunset))
    setWind(responseJson.wind.speed)
    setDayTime(responseJson.weather[0].icon[responseJson.weather[0].icon.length - 1] === "n" ? "night" : "day")
    setHumidity(responseJson.main.humidity)
    setPressure(responseJson.main.grnd_level * 0.75)
    setSea_level(responseJson.main.sea_level)
      }
  } 
  catch (error) {
    console.error(error);
  }
}
async function setBckgrnd() {
  if(latitude && longitude) {
    await setStatus(description)
  await setPeriod(dayTime)
  }
}
useEffect(() => {
  setBckgrnd()
}, [latitude, longitude])
  return (
    <View style={styles.container}>
      {
        location
        ?
        <View>
          
      <ScrollView alwaysBounceVertical={true} >
      <Text style={styles.nameOfDay} >{nameOfDay} </Text>
      <Text style={styles.temp} onPress={() => console.log(nameOfDay)}>{location && temp}°</Text>
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
        Влажность: <Text style={styles.temp_info} >{humidity}%</Text>
       </Text>
       <Text style={styles.info} >
        Атмосферное давление: <Text style={styles.temp_info} >{pressure} мм. рт. ст.</Text>
       </Text>
       <Text style={styles.info} >
        Давление над уровнем моря: <Text style={styles.temp_info} >{sea_level * 0.75} мм. рт. ст.</Text>
       </Text>
       <WeatherApiCom latitude={latitude} longitude={longitude} />
       <WeatherStack latitude={latitude} longitude={longitude} />
       <Weatherbit latitude={latitude} longitude={longitude}/>
      </ScrollView>
        </View>
        :
        <Text>{text} </Text>
      }
    </View>
  );
}

