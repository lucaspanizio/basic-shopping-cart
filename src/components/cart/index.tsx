import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';
import { Product } from '../product';
import { Button } from '../button';
import './styles.css';

export const Cart = () => {
  const { items, totalValue, totalQuantity, isOpen, removeItem, toggle } =
    useCart();

  const hasAnyProduct = totalQuantity > 0;

  return (
    <>
      {isOpen && <div className="cart_overlay" onClick={toggle} />}

      <div className={`cart ${isOpen && 'cart_open'}`}>
        <div className="cart_title">
          <div>
            <span>Carrinho de compras </span>
            {hasAnyProduct && (
              <span className="cart_title_items">
                ({totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'})
              </span>
            )}
          </div>

          <button
            title="Fechar carrinho"
            className="cart_btn-close"
            onClick={toggle}
          >
            <i className="fa fa-close" />
          </button>
        </div>

        <div className="cart_content">
          {hasAnyProduct ? (
            <>
              {items.map((product) => {
                return (
                  <Product
                    key={`${product.id}_${Math.random()}`}
                    data={product}
                  >
                    <Button
                      text="REMOVER"
                      bgColor="#FC2947"
                      handleClick={() => removeItem(product)}
                    />
                  </Product>
                );
              })}
            </>
          ) : (
            <span className="noProduct">Nenhum produto adicionado.</span>
          )}
        </div>

        <div className="cart_footer">
          <span>{formatCurrency(totalValue)}</span>
        </div>
      </div>
    </>
  );
};
