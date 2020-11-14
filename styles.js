const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
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
    textAlign: "center",
    fontFamily:" roboto-mediumItalic",
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
    fontFamily:"roboto-bold",
    color: "#789DD9"
  } 
});