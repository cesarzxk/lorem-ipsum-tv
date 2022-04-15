import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, View } from "react-native";
import { styles } from "./styles.native";

import Map from "../../components/Map";
import Search from "../../components/Search";

export default function Adress() {
  const navigate = useNavigation();
  const [coords, setCoords] = useState<{ lat: number; lng: number }>();

  return (
    <View style={styles.container}>
      <Search setCoords={setCoords} coords={coords} />
      <View>
        <Map setCoords={setCoords} coords={coords} />
      </View>
      <Button title="Proximo" onPress={() => {}} />
    </View>
  );
}
