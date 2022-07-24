import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductCard = () => {
  const [count, setCount] = useState(0);
  const increaseBy = (value) => {
    setCount((prev) => Math.max(prev + value, 0));
  };

  return (
    <div className={styles.productCard}>
      <img src="./coffee-mug.png" alt="coffe" className={styles.productImg} />
      {/* <img src={noImage} alt="no-image" /> */}

      <span className={styles.productDescription}>Coffe Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
