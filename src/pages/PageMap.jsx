import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/sidebar";
import CentralMarker from "../components/centralMarker";
import FireMarker from "../components/fireMarker";
import ApiService from "../components/apiService";
//import LeafIcon from "leaflet"
//import L from 'leaflet';
import {Icon} from 'leaflet'
// const LeafIcon = L.Icon.extend({
//   options: {
//       shadowUrl: 'leaf-shadow.png',
//       iconSize:     [38, 95],
//       shadowSize:   [50, 64],
//       iconAnchor:   [22, 94],
//       shadowAnchor: [4, 62],
//       popupAnchor:  [-3, -76]
//   }
// });
const PageMap = () => {
const cuaderno = new Icon({
  iconUrl: '/assets/img/fuego.png',
  iconSize: [120, 120],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});
  
  const [centrales, setCentrales] = useState([
    {
      lat: -17.391231,
      lng: -66.183609,
      id: 1,
      icon: cuaderno,
    },
    {
      lat: -17.396640,
      lng: -66.165619,
      id: 2,
      icon: cuaderno,
    },
    ]);
  const [incendios, setIncendios] = useState([]);

  useEffect(() => {
    //ApiService.getCentrales().then((data)=>{setCentrales(data)
     //  console.log('datos',data)});
    //ApiService.getIncendios().then(setIncendios);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar con un ancho fijo */}
      <div className="w-[250px] bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Contenedor del mapa que ocupa el resto del espacio */}
      <div className="w-360">
        <MapContainer
          center={[-17.3895, -66.1568]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {centrales.map((central) => (
            <CentralMarker key={central.id} central={central} />
          ))}
          {incendios.map((incendio) => (
            <FireMarker key={incendio.id} incendio={incendio} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default PageMap;
