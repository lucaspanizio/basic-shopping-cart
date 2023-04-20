import React from "react";
import { Product } from "../product";
import { Button } from "../button";
import { useProducts } from "../../hooks/useProducts";

const Cart: React.FC = () => {
  const { cart, cartSum, deleteCart } = useProducts();

  return (
    <>
      <span>Qtde Itens: {cart.length}</span>
      <span>
        {cartSum.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>

      {cart.map((product) => {
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
              handleClick={() => deleteCart(product)}
            />
          </Product>
        );
      })}
    </>
  );
};

export { Cart };
