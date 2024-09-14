import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/redux/store';
import { addToCart, removeFromCart } from '../store/redux/cart-reducer';
import {
  ICartActions,
  ICartStates,
  IProduct,
  IProductInCart,
} from '../store/redux/cart-types';

interface UseProducts extends ICartStates, ICartActions {}

export const useProducts = (): UseProducts => {
  const dispatch: AppDispatch = useDispatch();
  const { cartProducts, value, totalQuantity } = useSelector(
    (state: RootState) => state.products,
  );

  return {
    cartProducts,
    value,
    totalQuantity,
    addToCart: (product: IProduct) => dispatch(addToCart(product)),
    removeFromCart: (product: IProductInCart) =>
      dispatch(removeFromCart(product)),
  };
};
