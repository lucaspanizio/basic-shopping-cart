import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';
import './styles.css';

export const Content = () => {
  const { items, appendItem, removeItem, hasAnyProduct } = useCart();

  return (
    <div className="cart-content">
      {hasAnyProduct ? (
        <>
          {items.map((product) => (
            <div className="cart-content__item" key={product.id}>
              <img
                className="cart-content__item-image"
                src={product.image}
                alt="Imagem do Produto"
              />
              <div className="cart-content__item-container">
                <span className="cart-content__item-title">
                  {product.title}
                </span>
                <span className="cart-content__item-price">
                  {formatCurrency(product.price)}
                </span>
                <div className="cart-content__item-controls">
                  <button
                    className="cart-content__item-decrease-btn"
                    onClick={() => removeItem(product)}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <span className="cart-content__item-quantity">
                    {product.quantity}
                  </span>
                  <button
                    className="cart-content__item-increase-btn"
                    onClick={() => appendItem(product)}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span className="no-items">Nenhum produto adicionado.</span>
      )}
    </div>
  );
};
