import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import CustomFormatter from "./CustomFormatter";

const RouteShortestPath = ({ centrales, incendios }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || centrales.length === 0 || incendios.length === 0) return;

    let routingControl;

    // Encuentra la central más cercana a cada incendio
    incendios.forEach((incendio) => {
      let closestCentral = null;
      let minDistance = Infinity;

      centrales.forEach((central) => {
        const distance = map.distance(
          L.latLng(incendio.lat, incendio.lng),
          L.latLng(central.lat, central.lng)
        );

        if (distance < minDistance) {
          minDistance = distance;
          closestCentral = central;
        }
      });

      if (!closestCentral) return;

      // Agrega la ruta más corta entre la central y el incendio
      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(closestCentral.lat, closestCentral.lng),
          L.latLng(incendio.lat, incendio.lng),
        ],
        routeWhileDragging: true,
        createMarker: () => null, // No crear marcadores adicionales
        formatter: new CustomFormatter(), // Usar el formateador personalizado
        showAlternatives: false, // No mostrar rutas alternativas
      }).addTo(map);
    });

    return () => {
      if (routingControl) map.removeControl(routingControl);
    };
  }, [map, centrales, incendios]);

  return null;
};

export default RouteShortestPath;