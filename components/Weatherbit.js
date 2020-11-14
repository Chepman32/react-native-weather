import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Shake } from "./Shake"
export const Weatherbit = ({ latitude, longitude }) => {
  useEffect(() => {
    getData()
  }, [])
  const [solar_rad, setSolar_rad] = useState("")
  const  getData = async () => {
const response = await fetch(
  `http://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=073b5017a9cb4c43bd27c37347fa18ac`
)
const data = await response.json()
latitude && setSolar_rad(data.data[0].solar_rad)
  }
  return (
    <View style={styles.container} >
      <Text style={styles.info} onPress={() => console.log(solar_rad)} >
        Солнечная радиация: <Text style={styles.temp_info} >{solar_rad}, Вт/м2 </Text>
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
    fontSize: 25,
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
    fontSize: 25,
    fontWeight: "400",
    lineHeight: 40,
    textAlign: "center",
    color: "#789DD9"
  } 
});