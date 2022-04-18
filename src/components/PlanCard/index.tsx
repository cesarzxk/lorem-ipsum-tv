import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useGlobal } from "../../contexts/GlobalContext";
import { styles } from "./styles.native";

type PropsType = {
  props: {
    id: number;
    price: number;
    distance: number;
    pkg: item[];
  };
};

type item = {
  name: string;
  type: string;
  price: number;
  coords: {
    lat: number;
    lon: number;
  };
};

export default function PlanCard({ props }: PropsType) {
  const { cardSelected, setCardSelected } = useGlobal();
  const navigate = useNavigation();

  function getItems() {
    let name = "";
    name += props.pkg.map((item) => " " + item.name);
    return name;
  }

  const coords = props.pkg.map((item) => {
    switch (item.type) {
      case "TV": {
        return {
          lat: item.coords.lat,
          lon: item.coords.lon,
          color: "green",
        };
      }
      case "BROADBAND": {
        return {
          lat: item.coords.lat,
          lon: item.coords.lon,
          color: "red",
        };
      }
      case "LANDLINE": {
        return {
          lat: item.coords.lat,
          lon: item.coords.lon,
          color: "blue",
        };
      }
      case "ADDON": {
        return {
          lat: item.coords.lat,
          lon: item.coords.lon,
          color: "gray",
        };
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={() => {
        setCardSelected({ id: props.id, coords: coords });
        navigate.navigate("planmap");
      }}
    >
      <View style={styles.container}>
        <View style={styles.colum}>
          <Text style={styles.title}>Pacote {props.id}</Text>
          <Text>{getItems()}</Text>
        </View>

        <View style={styles.row}>
          <Text>R$ {props.price.toFixed(2)}</Text>
          <Text>{props.distance.toFixed(2)} km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
