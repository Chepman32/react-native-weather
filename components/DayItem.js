import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
export const DayItem = ({data, currentDay, temp, feelsLike, city, description, wind, sunRise, sunSet,
   temp_min, temp_max, humidity, pressure, date}) => {
     const [nameOfDay, setNameOfDay] = useState("")
    const getNameOfDay = (array) => {
      switch(currentDay) {
        case "Понедельник":
          setNameOfDay("Вторник")
          case "Вторник":
            setNameOfDay("Вторник")
          case "Среда":
            setDayId(4)
          array[0].dayName = "Четверг"
          setDayId(5)
          case "Четверг" :
            setDayId(5)
          array[0].dayName = "Пятница"
          case "Пятница" :
            setDayId(6)
          array[0].dayName = "суббота"
          case "Суббота" :
            setDayId(7)
          array[0].dayName = "Воскресенье"
          case "Воскресенье" :
            setDayId(1)
          array[0].dayName = "Понедельник"
          default:
            array[0].dayName = "Вторник"
      }
    }
    function GetDates(startDate, daysToAdd) {
      var aryDates = [];
  
      for(var i = 0; i <= daysToAdd; i++) {
          var currentDate = new Date();
          currentDate.setDate(startDate.getDate() + i);
          aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
      }
      
      return aryDates;
  }
  
  function MonthAsString(monthIndex) {
      var d=new Date();
      var month=new Array();
      month[0]="January";
      month[1]="February";
      month[2]="March";
      month[3]="April";
      month[4]="May";
      month[5]="June";
      month[6]="July";
      month[7]="August";
      month[8]="September";
      month[9]="October";
      month[10]="November";
      month[11]="December";
      
      return month[monthIndex];
  }
  
  function DayAsString(dayIndex) {
      var weekdays = new Array(7);
      weekdays[0] = "Sunday";
      weekdays[1] = "Monday";
      weekdays[2] = "Tuesday";
      weekdays[3] = "Wednesday";
      weekdays[4] = "Thursday";
      weekdays[5] = "Friday";
      weekdays[6] = "Saturday";
      
      return weekdays[dayIndex];
  }
  
  var startDate = new Date();
  var aryDates = function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for(var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
    }
    
    return aryDates;
}

function MonthAsString(monthIndex) {
    var d=new Date();
    var month=new Array();
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";
    
    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    
    return weekdays[dayIndex];
}

var startDate = new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.nameOfDay} >{date} </Text>
      <Text style={styles.temp} onPress={() => console.log(GetDates(startDate, 5))}>{temp}°</Text>
      <View style={styles.rowContainer}>
      <Text style={styles.temp_info} >Ощущается как: {feelsLike}°</Text>
      </View>
      <Text style={styles.city} >{city} </Text>
      <Text style={styles.description} >{description}</Text>
      <ScrollView>
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