import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const MapView = () => {
  const state = useSelector((store) => store);

  console.log(state);
  return (
    <div>
      <h1>Harita Görünümü</h1>

      <MapContainer
        center={[38.685721, 35.506984]}
        zoom={7}
        scrollWheelZoom={true}
      >
        {/* gösterilicek harita */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*
         * ekranda bulunan imleç
         * bizden prop olrak imlecin konum bilgisine sahip
         * bir dizi ister bu dizinin ilk değeri
         * enlem ikinci değeri boylam
         */}

        {state.flights.map((flight) => (
          <Marker position={[flight.lat, flight.lng]}>
            <Popup>
              Benim imlece tıklanınca göstermek istediğim yazı
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
