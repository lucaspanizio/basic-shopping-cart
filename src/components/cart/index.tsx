import React from 'react';
import { Product } from '../product';
import { Button } from '../button';
import { useProducts } from '../../hooks/useProducts';
import { formatCurrency } from '../../utils/formatCurrency';
import './styles.css';

export const Cart: React.FC = () => {
  const { cartProducts, value, removeFromCart } = useProducts();

  return (
    <div className="cart">
      <span>Qtde Itens: {cartProducts.length}</span>
      <span>{formatCurrency(value)}</span>

      {cartProducts.map((product) => {
        return (
          <Product key={`${product.id}_${Math.random()}`} data={product}>
            <Button
              title="REMOVER"
              bgColor="#FC2947"
              handleClick={() => removeFromCart(product)}
            />
          </Product>
        );
      })}
    </div>
  );
};
