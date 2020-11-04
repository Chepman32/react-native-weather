import React from "react"
import { Text, View } from "react-native"
export const DayItem = ({temp}) => {
  return (
    <View>
      <Text>{temp} </Text>
    </View>
  )
}