import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import Leaflet from 'leaflet';
import icon from '../assets/plane-marker.png';
import { useState } from 'react';
import SideDetail from './SideDetail';

const MapView = () => {
  const state = useSelector((store) => store);
  const [showDetails, setShowDetails] = useState(false);
  const [detailId, setDetailId] = useState();

  // leaflet kütüphanesidnden gelen icon oluşturma fonksiyonun kullanma
  const planeMarker = Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });

  // detay butonuna tıklanınca çalışır
  const handleClick = (id) => {
    // id'yi stat'de tutucaz (bileşene prop olarak gidecek)
    setDetailId(id);
    // yan pencerenin açılamsını sağlıyoruz
    setShowDetails(true);
  };

  return (
    <div>
      <h2 className="counter">{state.flights.length} Uçak Bulundu</h2>
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
          <Marker
            icon={planeMarker}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button onClick={() => handleClick(flight.id)}>
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* showDetail state'i true ise ekrana yan pencere aç */}
      {showDetails && (
        <SideDetail id={detailId} setShowDetails={setShowDetails} />
      )}
    </div>
  );
};

export default MapView;
