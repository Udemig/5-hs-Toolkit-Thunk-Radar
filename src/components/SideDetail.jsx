import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SideDetail = ({ id, setShowDetails }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // id her değişitiğinde göstericeğimiz detayları boşa çekerek
    // loading ekranı girmesini sağladık
    setDetails(null);

    // istek atarken kullandığımız ayarlar
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: { flight: id },
      headers: {
        'X-RapidAPI-Key':
          '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
      },
    };

    // optionla beraber veri çekme isteği atma
    axios.request(options).then((res) => setDetails(res.data));
  }, [id]);

  console.log(details);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetails(false)}>X</span>
        </p>
        {!details ? (
          <p>Loading..</p>
        ) : (
          <>
            <h2>{details.aircraft.model.text}</h2>
            <p>{details.aircraft.model.code}</p>
            <p>Kuyruk Kodu: &nbsp; {details.aircraft.registration}</p>
            <img src={details?.aircraft?.images?.large[0]?.src} />
            <p>Şirket: &nbsp; {details.airline.short}</p>
            <p>
              Kalkış: &nbsp;
              <a href={details.airport.origin.website}>
                {details.airport.origin.name}
              </a>
            </p>
            <p>
              Hedef: &nbsp;
              <a
                className="space"
                href={details.airport.destination?.website}
              >
                {details.airport.destination.name}
              </a>
            </p>
            <p>Durum: &nbsp; {details.status.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
