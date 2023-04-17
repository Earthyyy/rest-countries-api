import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice/themeSlice";
import searchInputSlice from "../features/searchInputSlice/searchInputSlice";

import countriesSlice from "../features/countriesSlice/countriesSlice";

import regionFilterSlice from "../features/regionFilterSlice/regionFilterSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice,
        searchInput: searchInputSlice,
        countries: countriesSlice,
        regionFilter: regionFilterSlice,
    },
});

