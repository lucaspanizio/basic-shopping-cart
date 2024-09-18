import { useCart } from '@/hooks/useCart';
import './styles.css';

export const Title = () => {
  const { totalQuantity, hasAnyProduct, toggle } = useCart();

  return (
    <div className="cart-title">
      <div>
        <span>Carrinho de compras </span>
        {hasAnyProduct && (
          <span className="cart-title__items">
            ({totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'})
          </span>
        )}
      </div>

      <button
        title="Fechar carrinho"
        className="cart-title__btn-close"
        onClick={toggle}
      >
        <i className="fa fa-close" />
      </button>
    </div>
  );
};
