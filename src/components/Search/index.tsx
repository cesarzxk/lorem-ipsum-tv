import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getGeocode, key } from "../../services/geolocation";
import Autocomplete from "react-native-autocomplete-input";

type SearchProps = {
  coords?: coordstype;
  setCoords: (coords: coordstype) => void;
};

type coordstype = { lat: number; lon: number };

export default function Search({ coords, setCoords }: SearchProps) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  async function handlerSearchGeocode() {
    if (query.trim() == "") {
      return;
    }

    const { data } = await getGeocode.get("", {
      params: {
        key: key,
        location: query,
      },
    });

    setResult(data.results[0].locations);
  }

  const AutocompleteItem = ({ item }: any) => (
    <TouchableOpacity
      style={{ marginHorizontal: 5 }}
      onPress={() => {
        setCoords({ lat: item.latLng.lat, lon: item.latLng.lng });
        setQuery(
          `${item.adminArea6 && item.adminArea6 + ", "}${
            item.adminArea5 && item.adminArea5 + ", "
          }${item.adminArea3 && item.adminArea3 + ", "}${item.adminArea1}`
        );
      }}
    >
      <Text>
        {`${item.adminArea6 && item.adminArea6 + ", "}${
          item.adminArea5 && item.adminArea5 + ", "
        }${item.adminArea3 && item.adminArea3 + ", "}${item.adminArea1}
        `}
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    setResult([]);
  }, [coords]);

  return (
    <View
      style={{
        flex: 1,
        left: 0,
        position: "absolute",
        right: 0,
        top: 40,
        zIndex: 1,
        marginHorizontal: "5%",
        backgroundColor: "#fff",
      }}
    >
      <Autocomplete
        data={result}
        onChangeText={(text) => setQuery(text)}
        onEndEditing={() => handlerSearchGeocode()}
        placeholder="Busque aqui seu endereço!"
        value={query}
        flatListProps={{
          keyboardShouldPersistTaps: "always",
          renderItem: ({ item }) => <AutocompleteItem item={item} />,
        }}
      />
    </View>
  );
}
