import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieDataSlice } from "./MovieData";

const reducer = combineReducers({
   movies:  movieDataSlice.reducer
})

const store = configureStore({
    reducer,
})

export default store;