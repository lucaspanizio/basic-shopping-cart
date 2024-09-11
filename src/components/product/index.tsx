import React from 'react';
import { IProduct } from '../../store/redux/cart-reducer';
import { formatCurrency } from '../../utils/formatCurrency';
import './styles.css';

export const Product = ({
  children,
  image,
  description,
  value,
}: React.PropsWithChildren<IProduct>) => {
  return (
    <div className="card">
      <img src={image} alt="Imagem do Produto" />
      <div className="overlay"></div>
      <span className="descriptionProduct">{description}</span>
      <span>{formatCurrency(value)}</span>
      {children}
    </div>
  );
};
