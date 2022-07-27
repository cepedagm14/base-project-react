import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { createContext } from "react";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButon } from "./ProductButon";

export const ProductContext = createContext({});
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }) => {
  const { increaseBy, count } = useProducts();

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
