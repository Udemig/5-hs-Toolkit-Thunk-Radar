import { createSlice } from '@reduxjs/toolkit';
import { getFlights } from './actions';

const initialState = {
  flights: [],
};

export const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  extraReducers: {
    // eğerki aksiyona barşılı bir cevap gelirse veriyi store aktar
    [getFlights.fulfilled]: (state, action) => {
      state.flights = action.payload;
    },
  },
});
