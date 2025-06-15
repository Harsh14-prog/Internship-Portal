import { configureStore } from '@reduxjs/toolkit';
import internshipsReducer from './InternshipsSlice';

export const store = configureStore({
  reducer: {
    internships: internshipsReducer,
  },
});

export default store ;