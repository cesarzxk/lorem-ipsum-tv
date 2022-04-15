import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles.native";

export default function Map() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Meu Plano</Text>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vestibulum rutrum nisl, et ultrices libero lacinia sit amet. Maecenas
          nec magna ac ipsum varius maximus. Nulla in augue ligula. Suspendisse
          nec bibendum dolor. Nunc id maximus arcu, ut porttitor magna.
          Vestibulum dignissim consequat augue dapibus placerat. Maecenas
          vehicula dui purus, in ultricies quam aliquam sit amet.
        </Text>
      </View>
      <Button
        title="Procurar"
        onPress={() => {
          navigate.navigate("Adress");
        }}
      />
    </View>
  );
}
