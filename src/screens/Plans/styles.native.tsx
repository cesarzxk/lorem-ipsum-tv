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

  title: {
    fontSize: 25,
    textShadowColor: "#ffffff",
    textShadowRadius: 1,
    textShadowOffset: {
      height: -1,
      width: -1,
    },
    fontWeight: "bold",
    marginLeft: "12%",
    alignSelf: "flex-start",
  },

  flatlist: {
    width: "100%",
    maxHeight: "60%",
  },

  filterButtom: {
    height: 40,
    width: 40,
    backgroundColor: "#0000ff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    alignSelf: "flex-end",
    marginRight: "12%",
  },
  filterButtomIcon: {
    color: "#ffffff",
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
});
