import { List } from '../../components/list';
import { Header } from '../../components/header';
import { Cart } from '../../components/cart';
import { useCart } from '../../hooks/useCart';

export const Main = () => {
  const { isOpen } = useCart();
  return (
    <>
      <Header />
      <List />
      {isOpen && <Cart />}
    </>
  );
};
