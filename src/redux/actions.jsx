import { createAsyncThunk } from '@reduxjs/toolkit';
import { options } from './constants';
import axios from 'axios';
/*
! createAsyncThunk
* Hem Asenkron İşlemler yağabilen
* Hem de bu işlemlerinin sonucunu slice'aktarbilen
* asenkron akisyonu oluşturmamız sağlayan method 
*/
export const getFlights = createAsyncThunk(
  'flights/getFlight',
  async () => {
    // api'ye istek atma
    const res = await axios.request(options);
    // bize gelen dizileri objelere çevirdik
    const newData = res.data.aircraft.map((flight) => ({
      id: flight[0],
      code: flight[1],
      lat: flight[2],
      lng: flight[3],
    }));
    // helen isteği slice'a aktarma
    return newData;
  }
);
