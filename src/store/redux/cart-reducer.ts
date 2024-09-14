import { actions } from './cart-actions';
import { createSlice } from '@reduxjs/toolkit';
import { ICartStates } from './cart-types';

const initialState: ICartStates = {
  cartProducts: [],
  value: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { ...actions },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
