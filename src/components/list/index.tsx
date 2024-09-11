import React from 'react';
import { Product } from '../product';
import { Button } from '../button';
import { useProducts } from '../../hooks/useProducts';
import { useFetchProducts } from '../../services/api/products';
import './styles.css';

export const List: React.FC = () => {
  const { addToCart } = useProducts();
  const { data: products = [] } = useFetchProducts();

  return (
    <div className="grid">
      {products?.map((product: any) => {
        return (
          <Product key={`${product.id}_${Math.random()}`} data={product}>
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
