import { createSlice } from '@reduxjs/toolkit';
import { actions } from './cart-actions';
import { ICartStates } from './cart-types';

const initialState: ICartStates = {
  items: [],
  isOpen: false,
  totalValue: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ...actions,
  },
});

export const { toggle, appendItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
