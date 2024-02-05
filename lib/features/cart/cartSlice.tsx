import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from '@/lib/types';

const initalState = {
    items: new Map<Number,CartItem>(),
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initalState,
    reducers: {
        addToCart: (state, action) => {
            state.items.set(action.payload.id, action.payload);
            state.total = state.total + 1;
        },
        removeFromCart: (state, action) => {
            state.items.delete(action.payload.id)
            state.total = state.total - 1;
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;