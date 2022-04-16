import React, { useContext, useState } from "react";
import { createContext, ReactNode } from "react";
import { getTvGeolocation } from "../services/tvgeolocation";

type globalContextData = {
  setCoords: (coords: coordsType) => void;
  coords: coordsType | undefined;
  handlerGetTVGeolocation: () => void;
};
type coordsType = {
  lat: number;
  lng: number;
};

export const GlobalContext = createContext({} as globalContextData);

type globalProviderProps = {
  children: ReactNode;
};

export function GlobalProvider({ children }: globalProviderProps) {
  const [coords, setCoords] = useState<coordsType>();

  async function handlerGetTVGeolocation() {
    if (!coords) {
      return;
    }
    const { data } = await getTvGeolocation.get("options", {
      params: {
        lat: coords.lat,
        lon: coords.lng,
      },
    });
    console.log(data);
  }

  return (
    <GlobalContext.Provider
      value={{
        coords,
        setCoords,
        handlerGetTVGeolocation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
