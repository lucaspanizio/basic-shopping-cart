import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';
import { Product } from '../product';
import { Button } from '../button';
import './styles.css';

export const Cart = () => {
  const { items, totalValue, totalQuantity, isOpen, removeItem, toggle } =
    useCart();

  return (
    <>
      {isOpen && <div className="cart_overlay" onClick={toggle} />}
      <div className={`cart ${isOpen && 'cart_open'}`}>
        <div className="cart_title">
          <span>Carrinho de compras ({totalQuantity} itens)</span>
          <button
            title="Fechar carrinho"
            className="cart_btn-close"
            onClick={toggle}
          >
            <i className="fa fa-close" />
          </button>
        </div>

        {items.map((product) => {
          return (
            <Product key={`${product.id}_${Math.random()}`} data={product}>
              <Button
                text="REMOVER"
                bgColor="#FC2947"
                handleClick={() => removeItem(product)}
              />
            </Product>
          );
        })}

        <span>{formatCurrency(totalValue)}</span>
      </div>
    </>
  );
};
