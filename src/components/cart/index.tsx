import React from 'react';
import { Product } from '../product';
import { Button } from '../button';
import { useProducts } from '../../hooks/useProducts';
import './styles.css';

export const Cart: React.FC = () => {
  const { cartProducts, value, removeFromCart } = useProducts();

  return (
    <div className="cart">
      <span>Qtde Itens: {cartProducts.length}</span>
      <span>
        {value.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>

      {cartProducts.map((product) => {
        return (
          <Product
            key={`${product.id}_${Math.random()}`}
            id={product.id}
            description={product.description}
            image={product.image}
            value={product.value}
          >
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
