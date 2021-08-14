import { createSlice } from '@reduxjs/toolkit';


const initialState = { counter: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, increase } = counterSlice.actions

export default counterSlice.reducer