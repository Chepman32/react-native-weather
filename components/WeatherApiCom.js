import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Shake } from "./Shake"
export const WeatherApiCom = ({ latitude, longitude }) => {
  useEffect(() => {
    getData()
  }, [])
  const [wind_dir, setWind_dir] = useState("")
  const [wind_degree, setWind_degree] = useState("")
  const [precip_mm, setPrecip_mm] = useState("")
  const [uv, setuv] = useState("")
  const  getData = async () => {
const response = await fetch(
  `http://api.weatherapi.com/v1/current.json?key=ad6aefbe1fb04377a54154651200811&q=lat=${latitude}&lon=${longitude}`
)
const data = await response.json()
setWind_dir(data.wind_dir)
setWind_dir(data.current.wind_dir)
setWind_degree(data.current.wind_degree)
setPrecip_mm(data.current.precip_mm)
setuv(data.current.uv)
console.log(data)
  }
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container} >
      <Text style={styles.info} onPress={() => console.log(wind_dir)} >
        Направление ветра: <Text style={styles.temp_info} >{wind_dir}</Text>
       </Text>
       <Text style={styles.info} onPress={() => console.log(wind_dir)} >
        Направление ветра в градусах: <Text style={styles.temp_info} >{wind_degree}</Text> 
       </Text>
       <Text style={styles.info} >
        Количество осадков, мм: <Text style={styles.temp_info} >{precip_mm}</Text>
       </Text>
       <Text style={styles.info} >
        УФ-индекс: <Text style={styles.temp_info} >{uv}</Text>
       </Text>
    </View>
    </TouchableWithoutFeedback>
  )
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