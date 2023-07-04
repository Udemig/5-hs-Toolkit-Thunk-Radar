import { useEffect, useState } from 'react';
import ListView from './components/ListView';
import MapView from './components/MapView';
import axios from 'axios';
import { getFlights } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // ekran haritaBileşeniBasıcazMı ? sorusunun stateini tutuyoruz
  const [showMapView, setShowMapView] = useState(true);

  useEffect(() => {
    // uçuş verilirini al ve store'a aktar
    dispatch(getFlights());
  }, []);

  return (
    <>
      {/* header alanı */}
      <header>
        <img src="https://seeklogo.com/images/T/turkish-airlines-logo-25BACC2D0C-seeklogo.com.png" />
        <h2>Uçuş Radarı</h2>
      </header>

      <div className="view-buttons">
        <button
          className={`${showMapView && 'active'}`}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={`${!showMapView && 'active'}`}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {/* hangi bileşenin ekran basılcağına karar verme */}
      {showMapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
