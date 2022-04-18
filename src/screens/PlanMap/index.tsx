import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

import { useGlobal } from "../../contexts/GlobalContext";
import { styles } from "./styles.native";
import Map from "../../components/Map";
import NextButton from "../../components/NextButton";

type RootStackParamList = {
  plans: undefined;
  planmap: undefined;
  Forgot: undefined;
  main: undefined;
  adress: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "adress"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function PlanMap({ navigation }: Props) {
  const { coords, setCoords, cardSelected } = useGlobal();

  return (
    <View>
      <View>
        <Map
          setCoords={setCoords}
          enableSelfMark={false}
          markers={cardSelected?.coords}
          coords={coords}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NextButton
          onPress={() => {
            navigation.goBack();
          }}
          title="Voltar"
        />
      </View>
    </View>
  );
}
