import axios from "axios";

export const getGeocode = axios.create({
  baseURL: "http://open.mapquestapi.com/geocoding/v1/address",
});

export const key = "brB54ddAzcOivYy7R6aD7nrURKdypcjW";
