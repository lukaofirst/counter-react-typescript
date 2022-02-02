import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterReducer = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseRandomly(state) {
            state.counter += Math.floor(Math.random() * 10);
        },
        reset(state) {
            state.counter = 0;
        },
    },
});

export const counterActions = counterReducer.actions;

export default counterReducer.reducer;
