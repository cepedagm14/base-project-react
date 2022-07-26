import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProducts } from "../hooks/useProducts";

export const ProductCard = ({ product }) => {
  const { increaseBy, count } = useProducts();

  return (
    <div className={styles.productCard}>
      {/* <img src="./coffee-mug.png" alt="coffe" className={styles.productImg} /> */}
      <img
        src={product.img ? product.img : noImage}
        alt="no-image"
        className={styles.productImg}
      />

      <span className={styles.productDescription}>{product.title}</span>
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
