import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const regionFilterSlice = createSlice({
    name: "regionFilter",
    initialState,
    reducers: {
        setRegionFilter: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setRegionFilter } = regionFilterSlice.actions;
export default regionFilterSlice.reducer;
