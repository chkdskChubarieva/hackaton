import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fireIconUrl from "../assets/icons/fuego.png";
import centralIconUrl from "../assets/icons/central.png";
import Sidebar from "../components/sidebar";
import RouteShortestPath from "../components/RouteShortestPath";


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



//import LeafIcon from "leaflet"
//import L from 'leaflet';
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


const centrales = [
  { lat: -17.39099, lng: -66.165222, id: 1, nombre: "Central GEOS", disponibilidad: "Puede atender incendio", especialidad: "Rescate en alturas", icon: central },
  { lat: -17.380596, lng: -66.159447, id: 2, nombre: "Central SAR", disponibilidad: "Ocupado", especialidad: "Control de incendios", icon: central },
  { lat: -17.365719, lng: -66.137901, id: 3, nombre: "Central FVBEAR", disponibilidad: "Solo herramientas", especialidad: "Materiales peligrosos", icon: central },
];


const incendios = [
  { lat: -17.347396, lng: -66.144283, id: 1, intensidad: "Alta", tiempo: "30 min", coordenadas: "-17.347396, -66.144283", reporte: "Incendio forestal en expansión.", icon: fuego },
];

export default function PageMap() {

  useEffect(() => {
    //ApiService.getCentrales().then((data)=>{setCentrales(data)
    //  console.log('datos',data)});
    //ApiService.getIncendios().then(setIncendios);
  }, []);


  return (
    <div className="flex h-screen">
      <div className="w-[250px] bg-gray-900 text-white">
        <Sidebar />
      </div>
      <div className="w-360">
        <MapContainer center={[-17.3895, -66.1568]} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {centrales.map((central) => (
            <Marker key={central.id} position={[central.lat, central.lng]} icon={central.icon}>
              <Popup>
                <strong>{central.nombre}</strong>
                <p>
                  Disponibilidad: {central.disponibilidad} 
                  <span 
                    className={
                      central.disponibilidad === "Puede atender incendio" ? "inline-block w-3 h-3 bg-green-500 rounded-full ml-2" :
                      central.disponibilidad === "Ocupado" ? "inline-block w-3 h-3 bg-red-500 rounded-full ml-2" :
                      "inline-block w-3 h-3 bg-yellow-500 rounded-full ml-2"
                    }>
                  </span>
                </p>
                <p>Especialidad: {central.especialidad}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">Ver recursos</button>
              </Popup>
            </Marker>
          ))}
          {incendios.map((incendio) => (
            <Marker key={incendio.id} position={[incendio.lat, incendio.lng]} icon={incendio.icon}>
              <Popup>
                <strong>Incendio activo</strong>
                <p>Severidad: 
                  <span className={`font-bold ${incendio.intensidad === 'Alta' ? 'text-red-500' : incendio.intensidad === 'Media' ? 'text-yellow-500' : 'text-green-500'}`}>
                    {incendio.intensidad}
                  </span>
                  <span className={`inline-block w-3 h-3 ml-2 rounded-full ${incendio.intensidad === 'Alta' ? 'bg-red-500' : incendio.intensidad === 'Media' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                </p>
                <p>Tiempo transcurrido: {incendio.tiempo}</p>
                <p>Ubicación: {incendio.coordenadas}</p>
                <p>Reporte: {incendio.reporte}</p>
                <button className="bg-green-500 text-white px-4 py-2 mt-2 w-full">Confirmar asistencia</button>
              </Popup>
            </Marker>
          ))}
          <RouteShortestPath centrales={centrales} incendios={incendios} />
        </MapContainer>
      </div>
    </div>
  );
}
