import { PayloadAction } from '@reduxjs/toolkit';
import { ICartStates, IProduct, IProductInCart } from './cart-types';

const findProductIndex = (items: IProductInCart[], productId: number) =>
  items.findIndex((item) => item.id === productId);

const appendItem = (state: ICartStates, action: PayloadAction<IProduct>) => {
  const product = action.payload;
  const productIndex = findProductIndex(state.items, product.id);

  if (productIndex >= 0) {
    state.items[productIndex].quantity++;
  } else {
    state.items.push({ ...product, quantity: 1 });
  }

  state.totalValue += product.price;
  state.totalQuantity++;
};

const removeItem = (
  state: ICartStates,
  action: PayloadAction<IProductInCart>,
) => {
  const product = action.payload;
  const productIndex = findProductIndex(state.items, product.id);

  if (productIndex >= 0) {
    const productInCart = state.items[productIndex];

    if (productInCart.quantity > 1) {
      productInCart.quantity--;
    } else {
      state.items.splice(productIndex, 1);
    }

    state.totalValue = Math.max(state.totalValue - product.price, 0);
    state.totalQuantity--;
  }
};

const toggle = (state: ICartStates) => {
  state.isOpen = !state.isOpen;
};

export const actions = {
  toggle,
  appendItem,
  removeItem,
};
