import React, { useEffect, useRef } from "react";
import { Dimensions } from "react-native";

import MapView, { Marker, MarkerProps, MapViewProps } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

import * as Location from "expo-location";

type MapProps = {
  coords?: coordstype;
  setCoords: (coords: coordstype) => void;
  enableSelfMark?: boolean;
  markers?: marker[];
};

type marker = {
  lon: number;
  lat: number;
  color: string;
};

type coordstype = { lat: number; lon: number };

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
    setCoords({ lat: coords.latitude, lon: coords.longitude });
  }

  const MarkerRef = useRef<MarkerProps>();
  const MapRef = useRef<MapViewProps>();

  return (
    <MapView
      followsUserLocation={enableSelfMark}
      showsMyLocationButton={enableSelfMark}
      showsUserLocation={enableSelfMark}
      region={
        markers
          ? {
              latitude: coords.lat,
              longitude: coords.lon,
              latitudeDelta: 0.4,
              longitudeDelta: 0.4,
            }
          : {
              latitude: coords ? coords.lat : -10,
              longitude: coords ? coords.lon : -60,
              latitudeDelta: coords ? 0.01 : 100,
              longitudeDelta: coords ? 0.01 : 100,
            }
      }
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
      mapPadding={{ top: 80 }}
      onLongPress={({ nativeEvent }) => {
        if (enableSelfMark) {
          setCoords({
            lat: nativeEvent.coordinate.latitude,
            lon: nativeEvent.coordinate.longitude,
          });
        }
      }}
    >
      {coords && (
        <Marker
          ref={MarkerRef}
          coordinate={{ latitude: coords.lat, longitude: coords.lon }}
        >
          <FontAwesome name="map-marker" size={40} color="black" />
        </Marker>
      )}

      {markers &&
        markers.map((item) => (
          <Marker
            key={item.color}
            coordinate={{ longitude: item.lon, latitude: item.lat }}
          >
            <FontAwesome name="map-marker" size={40} color={item.color} />
          </Marker>
        ))}
    </MapView>
  );
}
