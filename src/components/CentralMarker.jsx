import { Marker, Popup } from "react-leaflet";

const CentralMarker = ({ central }) => {
  return (
    <Marker position={[central.lat, central.lng]} icon={central.icon}>
      <Popup>
        <strong>{central.nombre}</strong>
        <p>Disponibilidad: {central.disponibilidad}</p>
        <p>Especialidad: {central.especialidad}</p>
      </Popup>
    </Marker>
  );
};

export default CentralMarker;