import React from "react";
import { Product } from "../product";
import { Button } from "../button";
import { useProducts } from "../../hooks/useProducts";

const Grid: React.FC = () => {
  const { products, appendCart } = useProducts();

  return (
    <>
      {products.map((product) => {
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
              handleClick={() => appendCart(product)}
            />
          </Product>
        );
      })}
    </>
  );
};

export { Grid };
