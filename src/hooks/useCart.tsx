import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { appendItem, removeItem, toggle } from '@/store/cart/cart-slice';
import {
  ICartActions,
  ICartStates,
  IProduct,
  IProductInCart,
} from '@/store/cart/cart-types';

interface UseProducts extends ICartStates, ICartActions {
  hasAnyProduct: boolean;
}

export const useCart = (): UseProducts => {
  const dispatch: AppDispatch = useDispatch();

  const { items, totalValue, totalQuantity, isOpen } = useSelector(
    (state: RootState) => state.products,
  );

  const hasAnyProduct = totalQuantity > 0;

  return {
    items,
    totalValue,
    totalQuantity,
    hasAnyProduct,
    isOpen,
    toggle: () => dispatch(toggle()),
    appendItem: (product: IProduct) => dispatch(appendItem(product)),
    removeItem: (product: IProductInCart) => dispatch(removeItem(product)),
  };
};
