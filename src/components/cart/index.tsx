import { useCart } from '../../hooks/useCart';
import { Title } from './title';
import { Content } from './content';
import { Footer } from './footer';
import './styles.css';

export const Cart = () => {
  const { isOpen, toggle } = useCart();

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={toggle} />}

      <div className={`cart ${isOpen && 'open'}`}>
        <Title />
        <Content />
        <Footer />
      </div>
    </>
  );
};
