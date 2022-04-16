import React, { useEffect, useRef } from "react";
import { Dimensions, FlatList } from "react-native";

import MapView, { Marker, MarkerProps, MapViewProps } from "react-native-maps";
import * as Location from "expo-location";

type MapProps = {
  coords?: coordstype;
  setCoords: (coords: coordstype) => void;
  enableSelfMark?: boolean;
  markers?: marker[];
};

type marker = {
  lng: number;
  lat: number;
  color: string;
};

type coordstype = { lat: number; lng: number };

export default function Map({
  coords,
  setCoords,
  enableSelfMark = true,
  markers,
}: MapProps) {
  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(() => {
    if (enableSelfMark) {
      if (status?.status !== "granted") {
        requestPermission();
        getautomaticLocation();
      } else {
        getautomaticLocation();
      }
    }
  }, []);

  async function getautomaticLocation() {
    const { coords } = await Location.getCurrentPositionAsync();
    setCoords({ lat: coords.latitude, lng: coords.longitude });
  }

  const MarkerRef = useRef<MarkerProps>();
  const MapRef = useRef<MapViewProps>();

  return (
    <MapView
      followsUserLocation={enableSelfMark}
      showsMyLocationButton={enableSelfMark}
      showsUserLocation={enableSelfMark}
      region={{
        latitude: coords ? coords.lat : -10,
        longitude: coords ? coords.lng : -60,
        latitudeDelta: coords ? 0.01 : 100,
        longitudeDelta: coords ? 0.01 : 100,
      }}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
      mapPadding={{ top: 80 }}
      onLongPress={({ nativeEvent }) => {
        if (enableSelfMark) {
          setCoords({
            lat: nativeEvent.coordinate.latitude,
            lng: nativeEvent.coordinate.longitude,
          });
        }
      }}
    >
      {coords && (
        <Marker
          ref={MarkerRef}
          coordinate={{ latitude: coords.lat, longitude: coords.lng }}
        />
      )}

      {markers && (
        <FlatList
          data={markers}
          renderItem={({ item }) => (
            <Marker
              pinColor={item.color}
              coordinate={{ longitude: item.lng, latitude: item.lat }}
            />
          )}
          keyExtractor={(item) => item.lng.toString()}
        />
      )}
    </MapView>
  );
}
