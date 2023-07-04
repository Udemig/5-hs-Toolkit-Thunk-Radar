import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideDetail from './SideDetail';

const ListView = () => {
  const state = useSelector((store) => store);
  const [detailId, setDetailId] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (id) => {
    setDetailId(id);

    setShowDetails(true);
  };

  return (
    <div>
      <h2 className="counter">{state.flights.length} Uçak Bulundu</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.flights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => handleClick(flight.id)}>
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails && (
        <SideDetail id={detailId} setShowDetails={setShowDetails} />
      )}
    </div>
  );
};

export default ListView;
