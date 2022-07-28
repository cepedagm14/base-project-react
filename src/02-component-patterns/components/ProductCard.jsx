import { createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({});
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className }) => {
  const { increaseBy, count } = useProducts();

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
