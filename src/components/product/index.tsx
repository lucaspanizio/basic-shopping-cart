import React from "react";
import styles from "../../styles/Product.module.css";

interface IProduct {
  id: number;
  description: string;
  image: string;
  value: number;
  children?: React.ReactNode;
}

function Product(props: IProduct) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="Imagem do Produto" />
      <div className={styles.overlay}></div>
      <span className={styles.descriptionProduct}>{props.description}</span>
      <span>
        {props.value
          ? props.value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          : null}
      </span>
      {props.children}
    </div>
  );
}

export { Product };
