import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import PlanCard from "../../components/PlanCard";
import NextButton from "../../components/NextButton";
import { styles } from "./styles.native";

export default function Plans() {
  const navigate = useNavigation();
  const pacotesFake = [
    {
      id: 1,
      pacote: "TV 1, Telefone 1",
      preco: 200,
      distancia: 100,
    },
    {
      id: 2,
      pacote: "TV 1, Telefone 1",
      preco: 200,
      distancia: 100,
    },
    {
      id: 3,
      pacote: "TV 1, Telefone 1",
      preco: 200,
      distancia: 100,
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Pacotes disponiveis</Text>

      <FlatList
        style={styles.flatlist}
        data={pacotesFake}
        renderItem={({ item }) => <PlanCard key={item.id} props={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <NextButton
          onPress={() => {
            navigate.goBack();
          }}
          title="Voltar"
        />
      </View>
    </View>
  );
}
