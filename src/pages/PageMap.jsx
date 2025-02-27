import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import fireIconUrl from "../assets/icons/fuego.png";
import centralIconUrl from "../assets/icons/central.png";
import Sidebar from "../components/sidebar";
import RouteShortestPath from "../components/RouteShortestPath";
import emailjs from "emailjs-com";
import verdeIconUrl from "../assets/icons/verde.png";
import amarilloIconUrl from "../assets/icons/amarillo.png";
import "../components/modal.css"

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

const verde = new Icon({
  iconUrl: verdeIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
})

const amarillo = new Icon({
  iconUrl: amarilloIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
})

const centrales = [
  { lat: -17.39099, lng: -66.165222, id: 1, nombre: "Central GEOS", disponibilidad: "Puede atender incendio", especialidad: "Rescate en alturas", icon: verde },
  { lat: -17.380596, lng: -66.159447, id: 2, nombre: "Central SAR", disponibilidad: "Ocupado", especialidad: "Control de incendios", icon: central },
  { lat: -17.365719, lng: -66.137901, id: 3, nombre: "Central FVBEAR", disponibilidad: "Solo herramientas", especialidad: "Materiales peligrosos", icon: amarillo },
];

// Función para enviar correo
const sendEmail = (incendioData) => {
  const templateParams = {
    to_name: "Destinatario",
    message: `🔥 Se ha detectado un incendio en: ${incendioData.coordenadas}.\n\nReporte: ${incendioData.reporte}\nIntensidad: ${incendioData.intensidad}\nTiempo: ${incendioData.tiempo}`,
    to_email: "christian.chubarieva@gmail.com",
  };

  emailjs
    .send("service_8vhr1bk", "template_oqzlxne", templateParams, "keWcQ30g5MKvw1Nxo")
    .then((response) => {
      console.log("Correo enviado:", response);
    })
    .catch((error) => {
      console.error("Error al enviar el correo:", error);
    });
};

// Componente para manejar clics en el mapa
const MapaClickHandler = ({ setIncendio }) => {
  useMapEvents({
    click(e) {
      const newIncendio = {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        coordenadas: `${e.latlng.lat}, ${e.latlng.lng}`,
        intensidad: "Alta",
        tiempo: "3 min",
        reporte: "Nuevo incendio detectado.",
        icon: fuego,
      };

      setIncendio(newIncendio); // Actualiza el estado del incendio
      sendEmail(newIncendio); // Envía el correo
      alert("🔥 ¡Alerta de incendio!");
    },
  });

  return null;
};

export default function PageMap() {
  const [incendio, setIncendio] = useState({
    lat: -17.347396,
    lng: -66.144283,
    intensidad: "Alta",
    tiempo: "30 min",
    coordenadas: "-17.347396, -66.144283",
    reporte: "Incendio forestal en expansión.",
    icon: fuego,
  });

  return (
    <div className="flex w-full h-dvh relative">
      <div>
        <Sidebar />
      </div>
      <div className="w-360 z-10">
        <MapContainer center={[-17.3895, -66.1568]} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapaClickHandler setIncendio={setIncendio} />

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

          <Marker position={[incendio.lat, incendio.lng]} icon={incendio.icon}>
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

          <RouteShortestPath centrales={centrales} incendios={[incendio]} />
        </MapContainer>
      </div>
    </div>
  );
}