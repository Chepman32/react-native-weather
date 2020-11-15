import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
export const DayItem = ({data, currentDay, temp, feelsLike, city, description, wind, sunRise, sunSet,
   temp_min, temp_max, humidity, pressure, date, time}) => {
    

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container} >
      <Text style={styles.nameOfDay} >{date} </Text>
      <Text style={styles.nameOfDay} >{time} </Text>
      <Text style={styles.temp} >{temp}°</Text>
      <View style={styles.rowContainer}>
      <Text style={styles.temp_info} onPress={() => console.log(data)} >Ощущается как: {feelsLike}°</Text>
      </View>
      <Text style={styles.description} >{data.description}</Text>
      <ScrollView>
      <Text style={styles.info} >Скорость ветра: 
      <Text style={styles.temp_info} >{wind}м/с </Text>
      </Text>
        <Text style={styles.info} >Восход: 
        &nbsp;<Text style={styles.temp_info} >{data.sunRise}</Text> </Text>
        <Text style={styles.info} >Закат:
        &nbsp;<Text style={styles.temp_info} >{data.sunSet}</Text>
         </Text>
        <Text style={styles.info} >
          Минимальная температура воздуха:
          <Text style={styles.temp_info} >{temp_min}°</Text>
        </Text>
        <Text style={styles.info} >
        Максимальная температура воздуха:
          <Text style={styles.temp_info} >{temp_max}°</Text>
        </Text>
      <Text style={styles.info} >
        Влажность: <Text onPress={() => console.log(humidity)}  style={styles.temp_info} >{humidity}%</Text>
       </Text>
       <Text style={styles.info} >
        Давление: <Text style={styles.temp_info} >{pressure} мм. рт. ст.</Text>
       </Text>
      </ScrollView>
      <View style={styles.horizontalLine}></View>
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
    lineHeight: 40,
    color: "#E7C689"
  },
  temp: {
    marginTop: 20,
    fontSize: 120,
    fontWeight: "300",
    color: "tomato"
  },
  temp_info: {
    fontSize: 30,
    fontWeight: "600",
    color: "tomato"
  },
  nameOfDay: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff"
  },
  description: {
    marginTop: 50,
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
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 40,
    textAlign: "center",
    color: "#789DD9"
  },
  horizontalLine: {
    height: 20,
    width: "100%",
    backgroundColor: "#ccc",
    opacity: 0.6,
  }
});