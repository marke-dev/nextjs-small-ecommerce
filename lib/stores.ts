/*
* This file is used to create the redux store and export the store, RootState, and AppDispatch types.
*/

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice"
//import counterReducer from "./features/counter/counterSlice"
import { enableMapSet } from 'immer'

enableMapSet()

export const makeStore = () => {
    return configureStore({
        reducer: {
            // Add reducers here
            //counter: counterReducer,
            cart: cartReducer
        },
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore['dispatch']