import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { appendItem, removeItem, toggle } from '../store/cart/cart-slice';
import {
  ICartActions,
  ICartStates,
  IProduct,
  IProductInCart,
} from '../store/cart/cart-types';

interface UseProducts extends ICartStates, ICartActions {}

export const useCart = (): UseProducts => {
  const dispatch: AppDispatch = useDispatch();
  const { items, totalValue, totalQuantity, isOpen } = useSelector(
    (state: RootState) => state.products,
  );

  return {
    items,
    totalValue,
    totalQuantity,
    isOpen,
    toggle: () => dispatch(toggle()),
    appendItem: (product: IProduct) => dispatch(appendItem(product)),
    removeItem: (product: IProductInCart) => dispatch(removeItem(product)),
  };
};
