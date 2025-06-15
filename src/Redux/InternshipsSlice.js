import { createSlice } from '@reduxjs/toolkit';
import internships from '../Data/Internship';

const internshipsSlice = createSlice({
  name: 'internships',
  initialState: {
    list: internships,
    filter: '',
    typeFilter: 'All'
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.typeFilter = action.payload;
    }
  },
});

export const { setFilter, setTypeFilter } = internshipsSlice.actions;
export default internshipsSlice.reducer;
