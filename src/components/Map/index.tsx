import React, { useEffect, useRef } from "react";
import { Dimensions } from "react-native";

import MapView, { Marker, MarkerProps } from "react-native-maps";
import * as Location from "expo-location";

type MapProps = {
  coords?: coordstype;
  setCoords: (coords: coordstype) => void;
};

type coordstype = { lat: number; lng: number };

export default function Map({ coords, setCoords }: MapProps) {
  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(() => {
    if (status?.status !== "granted") {
      requestPermission();
      getautomaticLocation();
    }
  }, []);

  async function getautomaticLocation() {
    const { coords } = await Location.getCurrentPositionAsync();
    setCoords({ lat: coords.latitude, lng: coords.longitude });
  }

  const MarkerRef = useRef<MarkerProps>();

  return (
    <MapView
      followsUserLocation={true}
      showsMyLocationButton={true}
      showsUserLocation={true}
      region={{
        latitude: coords ? coords.lat : -10,
        longitude: coords ? coords.lng : -60,
        latitudeDelta: coords ? 0.009 : 100,
        longitudeDelta: coords ? 0.009 : 100,
      }}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
      }}
      onLongPress={({ nativeEvent }) => {
        setCoords({
          lat: nativeEvent.coordinate.latitude,
          lng: nativeEvent.coordinate.longitude,
        });
      }}
    >
      {coords && (
        <Marker
          ref={MarkerRef}
          coordinate={{ latitude: coords.lat, longitude: coords.lng }}
        />
      )}
    </MapView>
  );
}
