import React, { createContext, useContext, useState } from "react";
import mock_products from "../mock_products.json";

interface IProduct {
  id: number;
  description: string;
  image: string;
  value: number;
}

interface IProductsContext {
  products: IProduct[];
  cart: IProduct[];
  cartSum: number;
  appendCart: (product: IProduct) => void;
  deleteCart: (product: IProduct) => void;
}

const ProductsContext = createContext({} as IProductsContext);

interface IProductsProviderProps {
  children: React.ReactNode;
}

const ProductsProvider: React.FC<IProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState(mock_products);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartSum, setCartSum] = useState(0);

  const appendCart = (product: IProduct) => {
    setCart((oldState) => [...oldState, product]);
    setCartSum((oldState) => oldState + product.value);

    setProducts((oldState) =>
      oldState.filter((item) => item.id !== product.id)
    );
  };

  const deleteCart = (product: IProduct) => {
    setCart((oldState) => oldState.filter((item) => item.id !== product.id));
    setCartSum((oldState) => {
      const sum = oldState - product.value;
      return sum > 0 ? sum : 0;
    });

    setProducts((oldState) => [
      ...oldState,
      ...mock_products.filter((item) => item.id === product.id),
    ]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        cartSum,
        appendCart,
        deleteCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): IProductsContext {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
