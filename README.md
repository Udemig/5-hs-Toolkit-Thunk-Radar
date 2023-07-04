# Uçuş Radarı

Ön İzleme:
https://flight-radar.netlify.app/

## Kütüphaneler

- leaflet
- react-leaflet
- react-redux
- @reduxjs/toolkit
- axios
- - thunk (toolkitin yanında geliyor)

## Kaynaklar

- API: https://rapidapi.com/apidojo/api/flight-radar1

- Sol Alt Enlem: 35.389247
- Sol Alt Boylam: 26.912610
- Sağ Üst Enlem: 41.484211
- Sağ Üst Boylam: 43.510117

## Yapılacaklar

- Liste görünümü `ListView.jsx` bileşeni oluştur
- Harita görünümü `MapView.jsx` bileşeni oluştur
- `App.jsx` içerisinde bu iki görünüm arasında geçişi sağla

- `MapView.jsx` 'de harita kurulumunu yap
- toolkit ile beraber redux kurulumunu yap

- Uygulama ekrana gelidiği anda API'den Türkiye üzerinde olan uçuş verileri al ve store'a aktar

- - bize dizi içerisinde dizi geliyor

- - Elimde Olan: [
    ["123123","afa143",56.683,45.9706,...]
    ["123123","afa143",56.683,45.9706,...]
    ["123123","afa143",56.683,45.9706,...]
    ]

- - Elde Etmek İstediğimiz : [
    {
    id: "123123",
    code: "afa143",
    lat:56.683,
    lng: 45.9706
    }
    ]

- - uçaklar disizndeki her bir dizinin enlem, boylam, id,kuyruk kodu değerlerine sahip bir obje oluştur

- `MapView.jsx` 'de Store'da tutulan Uçuşlar disizindeki herbir obje için ekrana bir tane imleç (marker) bas
- - marker' position olarak obje içisindeki lat ve lng değerlerini ver
- - haritanın merkezini Türkiye yap

- Popup içerisindeki Detay butonuna tıklanınca `SideDetail.jsx` bileşenini ekrana bas ve bileşen hangi uçağın detayı göstericekse onun id'sini bileşene aktar

- - Prop olarak gelen uçağın id değerini al ve bununla beraber api'nin details endpoint'ine istek at

- - Gelen detay bilgisini `SideDetail.jsx` de ekrana bas

- `ListView.jsx` içerisinde uçuşları tablo olarak listele
