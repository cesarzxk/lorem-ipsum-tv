import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import Map from "../../components/Map";
import NextButton from "../../components/NextButton";
import { useGlobal } from "../../contexts/GlobalContext";
import { styles } from "./styles.native";

export default function PlanMap() {
  const navigate = useNavigation();
  const { coords, setCoords } = useGlobal();

  return (
    <View>
      <View>
        <Map setCoords={setCoords} enableSelfMark={false} coords={coords} />
      </View>
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
