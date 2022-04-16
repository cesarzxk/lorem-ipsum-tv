import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "75%",
    alignSelf: "center",
    marginVertical: 5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  colum: {
    width: "90%",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});
