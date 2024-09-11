import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/redux/store';
import {
  IProduct,
  ICartStates,
  ICartActions,
  addToCart,
  removeFromCart,
} from '../store/redux/cart-reducer';

interface UseProducts extends ICartStates, ICartActions {}

export const useProducts = (): UseProducts => {
  const dispatch: AppDispatch = useDispatch();
  const { cartProducts = [], value } = useSelector(
    (state: RootState) => state.products,
  );

  return {
    cartProducts,
    value,
    addToCart: (product: IProduct) => dispatch(addToCart(product)),
    removeFromCart: (product: IProduct) => dispatch(removeFromCart(product)),
  };
};
