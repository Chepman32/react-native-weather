import React, { useState } from "react"
import { View, Text } from "react-native"
import { styles } from "../styles"
export const Settings = ({setUnits}) => {
  const [unitsValue, setUnitsValue] = useState("")
  const [theme, setTheme] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Text style={styles.info}>Единицы измерения</Text>
      <Text style={styles.temp_info}>{unitsValue}</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.info}>Тема</Text>
      <Text style={styles.temp_info}>{unitsValue}</Text>
      </View>
    </View>
  )
}