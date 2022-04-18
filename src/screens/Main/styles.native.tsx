import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    position: "absolute",
    backgroundColor: "#0000ff",
    height: Dimensions.get("screen").width / 3,
    width: Dimensions.get("screen").width / 3,
    top: -Dimensions.get("screen").width / 7,
    right: -Dimensions.get("screen").width / 7,
    borderRadius: 100,
  },

  headerLeft: {
    position: "absolute",
    backgroundColor: "#0000aa",
    height: Dimensions.get("screen").width / 2,
    width: Dimensions.get("screen").width / 2,
    top: -Dimensions.get("screen").width / 7,
    left: -Dimensions.get("screen").width / 7,
    borderRadius: 100,
  },

  textTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },

  textContainer: {
    padding: 20,
  },

  text: {
    fontSize: 20,
    textAlign: "justify",
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
});
