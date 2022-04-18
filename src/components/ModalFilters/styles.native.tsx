import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fade: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000077",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  container: {
    display: "flex",
    height: "50%",
    width: "90%",
    backgroundColor: "#fff",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    opacity: 1,
  },
  closeButtom: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    alignSelf: "center",
  },

  filtersTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 24,
  },

  filters: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },

  filterButtom: {
    height: "100%",
    backgroundColor: "#0000ff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    flex: 1,
  },

  filterButtomIcon: {
    color: "#ffffff",
  },

  filterButtomText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
