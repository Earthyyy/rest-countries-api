import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const searchInputSlice = createSlice({
    name: "searchInput",
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSearchInput } = searchInputSlice.actions;
export default searchInputSlice.reducer;
