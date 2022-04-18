import React, { useState } from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles.native";
import { useGlobal } from "../../contexts/GlobalContext";
import Map from "../../components/Map";
import Search from "../../components/Search";
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

export default function Adress({ navigation }: Props) {
  const { coords, setCoords, handlerGetTvPlans, plans } = useGlobal();
  const [isLoading, setIsloading] = useState(false);

  async function handlerSubmit() {
    setIsloading(true);
    await handlerGetTvPlans();
    setIsloading(false);
    navigation.navigate("plans");
  }

  return (
    <View style={styles.container}>
      <Search setCoords={setCoords} coords={coords} />
      <View>
        <Map setCoords={setCoords} coords={coords} />
      </View>
      <View style={styles.buttonContainer}>
        <NextButton
          enabled={coords ? true : false}
          onPress={handlerSubmit}
          isLoading={isLoading}
          title="Proxima etapa!"
        />
      </View>
    </View>
  );
}
