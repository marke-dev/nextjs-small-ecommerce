import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        initializeCount: (state, action) => {
            state.value = action.payload
        },
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, initializeCount } = counterSlice.actions

export default counterSlice.reducer;