import React from 'react';
import './styles.css';

interface IProduct {
  id: number;
  description: string;
  image: string;
  value: number;
  children?: React.ReactNode;
}

export function Product(props: IProduct) {
  return (
    <div className="card">
      <img src={props.image} alt="Imagem do Produto" />
      <div className="overlay"></div>
      <span className="descriptionProduct">{props.description}</span>
      <span>
        {props.value
          ? props.value.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })
          : null}
      </span>
      {props.children}
    </div>
  );
}
