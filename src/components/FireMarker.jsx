import { Marker, Popup } from "react-leaflet";



const FireMarker = ({ incendio }) => {
    console.log(incendio);
  return (
    <Marker position={[incendio.lat, incendio.lng]} icon={incendio.icon}>
      <Popup>
        <strong>Incendio</strong>
        <p>Intensidad: {incendio.intensidad}</p>
      </Popup>
    </Marker>
  );
};

export default FireMarker;