import React from 'react';
import { Product } from '../product';
import { Button } from '../button';
import { useProducts } from '../../hooks/useProducts';
import mock_products from '../../mock_products.json';
import './styles.css';

export const List: React.FC = () => {
  const { addToCart } = useProducts();

  return (
    <div className="grid">
      {mock_products.map((product) => {
        return (
          <Product
            key={`${product.id}_${Math.random()}`}
            id={product.id}
            description={product.description}
            image={product.image}
            value={product.value}
          >
            <Button
              title="COMPRAR"
              bgColor="#54B435"
              handleClick={() => addToCart(product)}
            />
          </Product>
        );
      })}
    </div>
  );
};
