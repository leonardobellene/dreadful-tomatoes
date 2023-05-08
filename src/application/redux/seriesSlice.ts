import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Show, ShowState } from "interfaces";

const initialState: ShowState = {
    fullCatalog: [],
    filteredCatalog: [],
};

export const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {
        setSerieCatalog: (state, action: PayloadAction<Show[]>) => {
            state.fullCatalog = action.payload;
        },
        setFilteredSeries: (state, action: PayloadAction<Show[]>) => {
            state.filteredCatalog = action.payload;
        },
    },
});

export const { setSerieCatalog, setFilteredSeries } = seriesSlice.actions;
export default seriesSlice.reducer;