import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numberOfIcecreams: 10,
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numberOfIcecreams += action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(cakeOrdered, (state) => {
    //         state.numberOfIcecreams--;
    //     });
    // },
    // extraReducers: {
    //   ['cake/ordered']: state => {
    //     state.numOfIcecreams--
    //   }
    // }
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
