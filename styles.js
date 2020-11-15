const { StyleSheet, Dimensions } = require("react-native");
const { width, height } = Dimensions.get("window")
export const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: "center"
  },
  nameOfDay: {
    marginTop: height * 0.06,
    marginHorizontal: 20,
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#rgba(0, 0, 0, 0.1)",
    borderRadius: 50
  },
  temp: {
    marginTop: height * 0.04,
    fontSize: height * 0.11,
    textAlign: "center",
    fontFamily:"roboto-regular",
    color: "tomato"
  },
  city: {
    marginTop: height * 0.1,
    fontSize: height * 0.06,
    textAlign: "center",
    lineHeight: 40,
    fontFamily:"roboto-mediumItalic",
    color: "#E7C689"
  },
  temp_info: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily:"roboto-bold",
    textAlign: "center",
    color: "tomato"
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
    fontFamily:"roboto-regular",
    color: "#789DD9"
  } 
});