import { Marker, Popup } from "react-leaflet";



const FireMarker = ({ incendio }) => {
    console.log(incendio);
  return (
    <Marker position={[incendio.lat, incendio.lng]}>
      <Popup>
        <strong>Incendio</strong>
        <p>Intensidad: {incendio.intensidad}</p>
      </Popup>
    </Marker>
  );
};

export default FireMarker;