import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Show, ShowState } from "interfaces";

const initialState: ShowState = {
  fullCatalog: [],
  filteredCatalog: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieCatalog: (state, action: PayloadAction<Show[]>) => {
      state.fullCatalog = action.payload;
    },
    setFilteredMovies: (state, action: PayloadAction<Show[]>) => {
      state.filteredCatalog = action.payload;
    },
  },
});

export const { setMovieCatalog, setFilteredMovies } = moviesSlice.actions;
export default moviesSlice.reducer;