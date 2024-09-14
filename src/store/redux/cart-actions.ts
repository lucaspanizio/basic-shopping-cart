import { PayloadAction } from '@reduxjs/toolkit';
import { ICartStates, IProduct, IProductInCart } from './cart-types';

const findProductIndex = (cartProducts: IProductInCart[], productId: number) =>
  cartProducts.findIndex((item) => item.id === productId);

const addToCart = (state: ICartStates, action: PayloadAction<IProduct>) => {
  const product = action.payload;
  const productIndex = findProductIndex(state.cartProducts, product.id);

  if (productIndex >= 0) {
    state.cartProducts[productIndex].quantity++;
  } else {
    state.cartProducts.push({ ...product, quantity: 1 });
  }

  state.value += product.price;
  state.totalQuantity++;
};

const removeFromCart = (
  state: ICartStates,
  action: PayloadAction<IProductInCart>,
) => {
  const product = action.payload;
  const productIndex = findProductIndex(state.cartProducts, product.id);

  if (productIndex >= 0) {
    const productInCart = state.cartProducts[productIndex];

    if (productInCart.quantity > 1) {
      productInCart.quantity--;
    } else {
      state.cartProducts.splice(productIndex, 1);
    }

    state.value = Math.max(state.value - product.price, 0);
    state.totalQuantity--;
  }
};

export const actions = {
  addToCart,
  removeFromCart,
};
