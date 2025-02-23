import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/sidebar";
import CentralMarker from "../components/centralMarker";
import FireMarker from "../components/fireMarker";
import ApiService from "../components/apiService";
import RouteShortestPath from "../components/RouteShortestPath";
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
import fireIconUrl from '../assets/icons/fuego.png'; 
import centralIconUrl from '../assets/icons/central.png';
const PageMap = () => {
  
const fuego = new Icon({
  iconUrl: fireIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 36], 
  popupAnchor: [0, -36],
});

const central = new Icon({
  iconUrl: centralIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 36], 
  popupAnchor: [0, -36],
});
  
  const [centrales, setCentrales] = useState([
    {
      lat: -17.390990,
      lng: -66.165222,
      id: 1,
      icon: central,
    },
    {
      lat: -17.380596,
      lng: -66.159447,
      id: 2,
      icon: central,
    },
    {


      lat: -17.365719,
      lng: -66.137901,
      id: 3,
      icon: central,
    },
    ]);
  const [incendios, setIncendios] = useState([
    { 
      lat: -17.347396,
      lng: -66.144283,
      id: 1,
      icon: fuego,
    }

  ]);


  
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
          <RouteShortestPath centrales={centrales} incendios={incendios} />
        </MapContainer>
      </div>
    </div>
  );
};

export default PageMap;
