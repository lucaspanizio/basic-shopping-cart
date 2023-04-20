import React from "react";
import styles from "../../styles/Store.module.css";
import { Cart } from "../cart";
import { Grid } from "../grid";

const Store: React.FC = () => {
  return (
    <div className={styles.store}>
      <div className={styles.grid}>
        <Grid />
      </div>
      <div className={styles.cart}>
        <Cart />
      </div>
    </div>
  );
};

export { Store };
