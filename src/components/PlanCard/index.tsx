import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles.native";

type PropsType = {
  props: {
    id: number;
    pacote: string;
    preco: number;
    distancia: number;
  };
};

export default function PlanCard({ props }: PropsType) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.colum}>
          <Text style={styles.title}>Pacote {props.id}</Text>
          <Text>{props.pacote}</Text>
        </View>

        <View style={styles.row}>
          <Text>R$ {props.preco}</Text>
          <Text>{props.distancia} km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
