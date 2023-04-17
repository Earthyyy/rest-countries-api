import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
