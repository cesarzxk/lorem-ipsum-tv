import React from "react";
import { Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles.native";
import NextButton from "../../components/NextButton";

type RootStackParamList = {
  plans: undefined;
  planmap: undefined;
  main: undefined;
  adress: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "main"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Main({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRight} />
      <View style={styles.headerLeft} />

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Seja bem-vindo! </Text>
        <Text style={styles.text}>
          Esse aplicativo é direcionado a clientes da empresa Lorem ipsum TV, e
          a seguir estará conhecendo os nossos planos e serviços disponíveis em
          sua região, seja a onde estiver!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NextButton
          onPress={() => {
            navigation.navigate("adress");
          }}
          title="Procurar!"
        />
      </View>
    </View>
  );
}
