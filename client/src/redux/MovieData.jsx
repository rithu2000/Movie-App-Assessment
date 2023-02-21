import { createSlice } from '@reduxjs/toolkit'

export const movieDataSlice = createSlice({
    name: "movie",
    initialState: {
        movie: [],
    },
    reducers: {
        addMovieData: (state, actions) => {
            state.movie.push(actions.payload)
        }
    }
})

export const { addMovieData } = movieDataSlice.actions;