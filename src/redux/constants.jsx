// api'ye istek atmak için gerekli ayarlar

export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '35.389247',
    bl_lng: '26.91261',
    tr_lat: '41.484211',
    tr_lng: '43.510117',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key':
      '554b5c9a03msh4a008333f18e61ap1fb405jsnbaa4227abd20',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
