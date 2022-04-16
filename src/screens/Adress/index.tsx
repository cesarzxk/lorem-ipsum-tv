import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles.native";

import Map from "../../components/Map";
import Search from "../../components/Search";
import NextButton from "../../components/NextButton";
import { useGlobal } from "../../contexts/GlobalContext";

export default function Adress() {
  const navigate = useNavigation();
  const { coords, setCoords, handlerGetTVGeolocation } = useGlobal();

  return (
    <View style={styles.container}>
      <Search setCoords={setCoords} coords={coords} />
      <View>
        <Map setCoords={setCoords} coords={coords} />
      </View>
      <View style={styles.buttonContainer}>
        <NextButton
          enabled={coords ? true : false}
          onPress={() => {
            navigate.navigate("plans");
            handlerGetTVGeolocation();
          }}
          title="Proxima etapa!"
        />
      </View>
    </View>
  );
}
