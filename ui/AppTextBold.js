import React from "react"
import { Text, StyleSheet } from "react-native"
export const AppTextBold = (props) => (
  <Text style={...styles.bold, props.style} >
    {props.children}
    </Text>
)
const styles = StyleSheet.create({
  bold: {
    fontFamily: "roboto-bold"
  }
})