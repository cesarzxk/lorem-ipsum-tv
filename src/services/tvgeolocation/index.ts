import axios from "axios";

export const getTvGeolocation = axios.create({
  baseURL: "https://octupus-challenge.vercel.app/api/",
});
