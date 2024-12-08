import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

export default function Map({ schoolData }) {
  const mapRef = useRef();
  const userMarkerRef = useRef();

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const location = useGeolocation();

  useEffect(() => {
    // Initialize the map once
    mapRef.current = leaflet
      .map("map", { attributionControl: false })
      .setView([userPosition.latitude, userPosition.longitude], 17);

    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // attribution:
        //   '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(mapRef.current);

    // Add markers for each school in the schoolData array
    schoolData.forEach(({ schoolName, longitude, latitude }) => {
      leaflet
        .marker([latitude, longitude])
        .addTo(mapRef.current)
        .bindPopup(
          `<b>${schoolName}</b><br>Lat: ${latitude.toFixed(
            2
          )}, Long: ${longitude.toFixed(2)}`
        );
    });

    // Cleanup function to remove markers when component unmounts
    return () => {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });
    };
  }, [schoolData]);

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;

    // Update the user marker position and map center when location changes
    setUserPosition({
      latitude: location.latitude,
      longitude: location.longitude,
    });

    if (userMarkerRef.current) {
      // Remove the old marker if it exists
      mapRef.current.removeLayer(userMarkerRef.current);
    }

    // Add new user marker
    userMarkerRef.current = leaflet
      .marker([location.latitude, location.longitude])
      .addTo(mapRef.current)
      .bindPopup("User");

    // Style the user marker (optional, for better visibility)
    const el = userMarkerRef.current.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)"; // You can change this for better styling
    }

    // Update map view to center on user position
    mapRef.current.setView([location.latitude, location.longitude]);
  }, [location]);

  return <div id="map" className="w-full h-screen -z-10"></div>;
}
