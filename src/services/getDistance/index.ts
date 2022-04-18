export default function getDistance(latLngs: { lat: number; lon: number }[]) {
  let totalDistance = 0;
  const latLngRadius = latLngs.map((latLng: { lat: number; lon: number }) => {
    return {
      lat: (latLng.lat * Math.PI) / 180,
      lon: (latLng.lon * Math.PI) / 180,
    };
  });

  for (let i = 1; i < latLngRadius.length; i++) {
    totalDistance +=
      Math.acos(
        Math.cos(latLngRadius[i - 1].lat) *
          Math.cos(latLngRadius[i - 1].lon) *
          Math.cos(latLngRadius[i].lat) *
          Math.cos(latLngRadius[i].lon) +
          Math.cos(latLngRadius[i - 1].lat) *
            Math.sin(latLngRadius[i - 1].lon) *
            Math.cos(latLngRadius[i].lat) *
            Math.sin(latLngRadius[i].lon) +
          Math.sin(latLngRadius[i - 1].lat) * Math.sin(latLngRadius[i].lat)
      ) *
      6371 *
      1.15;
  }
  return totalDistance;
}
