import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
export const WeatherStack = ({ latitude, longitude }) => {
  useEffect(() => {
    getData()
  }, [])
  const [visibility, setVisibility] = useState("")
  const  getData = async () => {
const response = await fetch(
  `http://api.weatherstack.com/current?access_key=1c253991522a6597f01d63112a6d0737&query=${latitude},${longitude}`
)
const data = await response.json()
console.log(latitude)
setVisibility(data.current.visibility)
  }
  return (
    <View style={styles.container} >
      <Text style={styles.info} onPress={() => console.log(visibility)} > 
        Видимость: <Text style={styles.temp_info} >{visibility} км</Text>
       </Text>
    </View>
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