// Types
interface ILocation {
  accuracy: number;
  latitude: number;
  longitude: number;
}

// Constants
const accuracyThreshold = 2546.076925492267; // or 500

// Helpers
const isSameLocation = (coord1: ILocation, coord2: ILocation, accuracyThreshold: number) => {
  const distance = getDistance(coord1.latitude, coord1.longitude, coord2.latitude, coord2.longitude);
  return distance <= accuracyThreshold;
};

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance;
};

const deg2rad = (deg: number) => deg * (Math.PI / 180);


// Main logic
export default function getCoordinates(coordinates: ILocation): Promise<boolean | undefined> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by this browser.');
      resolve(undefined);
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude, accuracy } = position.coords;
      const currentCoordinates = {
        latitude,
        longitude,
        accuracy,
      };
      const result = isSameLocation(currentCoordinates, coordinates, accuracyThreshold);
      resolve(result);
    }, (error) => {
      console.error('Error getting geolocation:', error);
      resolve(undefined);
    });
  });
}
