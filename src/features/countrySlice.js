import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  search: "",
  region: "All",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.countries = action.payload;
    },
    getSearchData: (state, action) => {
      state.search = action.payload;
    },
    getRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { getAll, getSearchData, getRegion } = countrySlice.actions;

export const selectCountries = (state) => state.countries;
export const selectSearch = (state) => state.search;
export const selectRegion = (state) => state.region;

export default countrySlice.reducer;
