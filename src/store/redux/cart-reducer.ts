import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  description: string;
  image: string;
  value: number;
}

export interface ICartStates {
  cartProducts: IProduct[];
  value: number;
}

export interface ICartActions {
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

const initialState: ICartStates = {
  cartProducts: [],
  value: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const product = action.payload;
      state.cartProducts.push(product);
      state.value += product.value;
    },
    removeFromCart(state, action: PayloadAction<IProduct>) {
      const product = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== product.id,
      );
      state.value = Math.max(state.value - product.value, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
