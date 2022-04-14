import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Main() {
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
      <Button title="Procurar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
