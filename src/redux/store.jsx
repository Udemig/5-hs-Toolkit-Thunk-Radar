import { configureStore } from '@reduxjs/toolkit';
import { flightSlice } from './fligtSlice';

export default configureStore({ reducer: flightSlice.reducer });
