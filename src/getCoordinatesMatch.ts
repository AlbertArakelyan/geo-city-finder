// Types
/**
 * Represents a location with latitude, longitude, and accuracy.
 *
 * @interface ILocation
 * @property {number} accuracy - The accuracy of the location.
 * @property {number} latitude - The latitude of the location.
 * @property {number} longitude - The longitude of the location.
 */
interface ILocation {
  accuracy: number;
  latitude: number;
  longitude: number;
}

// Constants
const accuracyThreshold = 2546.076925492267; // or 500

// Helpers
/**
 * Determines whether two locations are the same based on their coordinates and an accuracy threshold.
 *
 * @param {ILocation} coord1 - The first location coordinate.
 * @param {ILocation} coord2 - The second location coordinate.
 * @param {number} accuracyThreshold - The maximum distance allowed between the two coordinates to consider them the same.
 * @return {boolean} Returns true if the two locations are the same, false otherwise.
 */
const isSameLocation = (coord1: ILocation, coord2: ILocation, accuracyThreshold: number) => {
  const distance = getDistance(coord1.latitude, coord1.longitude, coord2.latitude, coord2.longitude);
  return distance <= accuracyThreshold;
};

/**
 * Calculates the distance between two points on the Earth's surface using the Haversine formula.
 *
 * @param {number} lat1 - The latitude of the first point.
 * @param {number} lon1 - The longitude of the first point.
 * @param {number} lat2 - The latitude of the second point.
 * @param {number} lon2 - The longitude of the second point.
 * @return {number} The distance between the two points in kilometers.
 */
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

/**
 * Converts degrees to radians.
 *
 * @param {number} deg - The degree value to be converted.
 * @return {number} The radian value equivalent to the given degree.
 */
const deg2rad = (deg: number) => deg * (Math.PI / 180);

// Main logic
/**
 * Retrieves the match of coordinates.
 *
 * @param {ILocation} coordinates - The coordinates to match.
 * @return {Promise<boolean | undefined>} A promise that resolves to a boolean indicating whether the coordinates match or undefined if there was an error.
 */
function getCoordinatesMatch(coordinates: ILocation): Promise<boolean | undefined> {
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

export default getCoordinatesMatch;
