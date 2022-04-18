import React, { useContext, useState } from "react";
import { createContext, ReactNode } from "react";
import getDistance from "../services/getDistance";
import { getTvGeolocation } from "../services/tvgeolocation";

type globalContextData = {
  coords: coordsType | undefined;
  plans: planType[];
  cardSelected: cardSelectedTypes | undefined;
  handlerGetTvPlans: () => Promise<number | undefined>;
  setCoords: (coords: coordsType) => void;
  clearPlans: () => void;
  setCardSelected: (cardSelected: cardSelectedTypes) => void;
  orderByPrice: (isSmaller: boolean) => void;
  orderByDistance: (isSmaller: boolean) => void;
};

type planType = {
  id: number;
  price: number;
  distance: number;
  pkg: item[];
};

type item = {
  name: string;
  type: string;
  price: number;
  coords: {
    lat: number;
    lon: number;
  };
};

type coordsType = {
  lat: number;
  lon: number;
};

type cardSelectedTypes = {
  id: number;
  coords: {
    lon: number;
    lat: number;
    color: string;
  }[];
};

export const GlobalContext = createContext({} as globalContextData);

type globalProviderProps = {
  children: ReactNode;
};

export function GlobalProvider({ children }: globalProviderProps) {
  const [coords, setCoords] = useState<coordsType>();
  const [plans, setPlans] = useState<planType[]>([]);
  const [cardSelected, setCardSelected] = useState<cardSelectedTypes>();

  function orderByPrice(isSmaller: boolean) {
    let plansSorted = plans.slice();
    if (isSmaller) {
      plansSorted = plansSorted.sort((a: planType, b: planType) => {
        if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
      setPlans(plansSorted);
    } else {
      plansSorted = plansSorted.sort((a: planType, b: planType) => {
        if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      });
      setPlans(plansSorted);
    }
  }

  function orderByDistance(isSmaller: boolean) {
    let plansSorted = plans.slice();
    if (isSmaller) {
      plansSorted = plansSorted.sort((a: planType, b: planType) => {
        if (a.distance < b.distance) {
          return -1;
        } else {
          return 0;
        }
      });
      setPlans(plansSorted);
    } else {
      plansSorted = plansSorted.sort((a: planType, b: planType) => {
        if (a.distance > b.distance) {
          return -1;
        } else {
          return 0;
        }
      });
      setPlans(plansSorted);
    }
  }

  async function handlerGetTvPlans() {
    if (!coords) {
      return;
    }
    const { data } = await getTvGeolocation.get("options", {
      params: {
        lat: coords.lat,
        lon: coords.lon,
      },
    });

    const TVs = data.list.filter((item: item) => item.type === "TV");
    const BROADBANDs = data.list.filter(
      (item: item) => item.type === "BROADBAND"
    );
    const LANDLINEs = data.list.filter(
      (item: item) => item.type === "LANDLINE"
    );
    const ADDONs = data.list.filter((item: item) => item.type === "ADDON");

    let id = 1;
    let newPlans = plans.slice();

    TVs.map((tv: item) => {
      BROADBANDs.map((broadband: item) => {
        const newPlan = {
          distance: getDistance([tv.coords, broadband.coords]),
          id: id,
          pkg: [tv, broadband],
          price: tv.price + broadband.price,
        } as planType;
        newPlans.push(newPlan);
        id += 1;

        LANDLINEs.map((landline: item) => {
          const newPlan = {
            distance: getDistance([
              tv.coords,
              broadband.coords,
              landline.coords,
            ]),
            id: id,
            pkg: [tv, broadband, landline],
            price: tv.price + broadband.price + landline.price,
          } as planType;
          newPlans.push(newPlan);
          id += 1;

          ADDONs.map((addon: item) => {
            const newPlan = {
              distance: getDistance([
                tv.coords,
                broadband.coords,
                landline.coords,
                addon.coords,
              ]),
              id: id,
              pkg: [tv, broadband, landline, addon],
              price: tv.price + broadband.price + landline.price + addon.price,
            };
            newPlans.push(newPlan);
            id += 1;
          });
        });
      });

      LANDLINEs.map((landline: item) => {
        const newPlan = {
          distance: getDistance([tv.coords, landline.coords]),
          id: id,
          pkg: [tv, landline],
          price: tv.price + landline.price,
        };
        newPlans.push(newPlan);
        id += 1;
      });

      ADDONs.map((addon: item) => {
        const newPlan = {
          distance: getDistance([tv.coords, addon.coords]),
          id: id,
          pkg: [tv, addon],
          price: tv.price + addon.price,
        };

        newPlans.push(newPlan);
        id += 1;
      });
    });
    setPlans(newPlans);
    return 200;
  }

  function clearPlans() {
    setPlans([]);
  }

  return (
    <GlobalContext.Provider
      value={{
        coords,
        setCoords,
        handlerGetTvPlans,
        plans,
        clearPlans,
        cardSelected,
        setCardSelected,
        orderByPrice,
        orderByDistance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
