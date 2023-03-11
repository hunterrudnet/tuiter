import {createSlice}
  from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
            state.loading = true
            state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits = payload
    },
    [findTuitsThunk.rejected]:
        (state) => {
            state.loading = false
    },
    [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
    },
    },

    reducers: {}
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;