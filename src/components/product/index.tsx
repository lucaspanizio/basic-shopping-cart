import React from 'react';
import { IProduct } from '../../store/redux/cart-reducer';
import { formatCurrency } from '../../utils/formatCurrency';
import './styles.css';

interface IProductProps {
  data: IProduct;
}

export const Product = ({
  data,
  children,
}: React.PropsWithChildren<IProductProps>) => {
  const { title, price, image } = data;

  return (
    <div className="card">
      <img src={image} alt="Imagem do Produto" />
      <div className="overlay"></div>
      <span className="descriptionProduct">{title}</span>
      <span>{formatCurrency(price)}</span>
      {children}
    </div>
  );
};
