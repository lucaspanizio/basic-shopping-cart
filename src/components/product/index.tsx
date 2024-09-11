import React from 'react';
import { IProduct } from '../../store/redux/cart-reducer';
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
      <span>
        {value
          ? value.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })
          : null}
      </span>
      {children}
    </div>
  );
};
