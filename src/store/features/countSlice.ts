import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CountType {
    count: number
}

const initialState: CountType = {
    count: 0
}

export const CountSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        increment: (state, action:PayloadAction<{count: number}>) => {
            state.count = state.count+action.payload.count
        },

        decrement: (state, action:PayloadAction<{count: number}>) => {
            state.count = state.count-action.payload.count
        },
    }
})

export default CountSlice.reducer
export const {increment, decrement} = CountSlice.actions